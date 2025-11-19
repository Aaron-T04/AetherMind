import { WorkflowNode, WorkflowState } from '../types';
import { substituteVariables } from '../variable-substitution';

/**
 * Execute HTTP Request Node
 */
export async function executeHTTPNode(
  node: WorkflowNode,
  state: WorkflowState
): Promise<any> {
  const { data } = node;
  const nodeData = data as any;

  try {
    // Substitute variables in URL
    const url = substituteVariables(nodeData.httpUrl || '', state);
    const method = nodeData.httpMethod || 'GET';

    // Build headers
    const headers: Record<string, string> = {};

    if (nodeData.httpHeaders && Array.isArray(nodeData.httpHeaders)) {
      nodeData.httpHeaders.forEach((h: any) => {
        if (h.key && h.value) {
          headers[h.key] = substituteVariables(h.value, state);
        }
      });
    }

    // Add authentication
    if (nodeData.httpAuthType === 'bearer' && nodeData.httpAuthToken) {
      let authToken = substituteVariables(nodeData.httpAuthToken, state);
      // Handle environment variable substitution (e.g., ${FIRECRAWL_API_KEY})
      if (authToken.startsWith('${') && authToken.endsWith('}')) {
        const envVar = authToken.slice(2, -1);
        authToken = process.env[envVar] || authToken;
      }
      headers['Authorization'] = `Bearer ${authToken}`;
    } else if (nodeData.httpAuthType === 'api-key' && nodeData.httpAuthToken) {
      let authToken = substituteVariables(nodeData.httpAuthToken, state);
      // Handle environment variable substitution
      if (authToken.startsWith('${') && authToken.endsWith('}')) {
        const envVar = authToken.slice(2, -1);
        authToken = process.env[envVar] || authToken;
      }
      headers['X-API-Key'] = authToken;
    } else if (nodeData.httpAuthType === 'basic' && nodeData.httpAuthToken) {
      let authToken = substituteVariables(nodeData.httpAuthToken, state);
      // Handle environment variable substitution
      if (authToken.startsWith('${') && authToken.endsWith('}')) {
        const envVar = authToken.slice(2, -1);
        authToken = process.env[envVar] || authToken;
      }
      headers['Authorization'] = `Basic ${btoa(authToken)}`;
    }

    // Build request body
    let body: string | undefined = undefined;
    if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && nodeData.httpBody) {
      let bodyStr = substituteVariables(nodeData.httpBody, state);
      // If body is a JSON string, try to parse and re-stringify to handle nested variable substitution
      try {
        const parsed = JSON.parse(bodyStr);
        // Recursively substitute variables in the parsed object
        const substituteInObject = (obj: any): any => {
          if (typeof obj === 'string') {
            return substituteVariables(obj, state);
          } else if (Array.isArray(obj)) {
            return obj.map(substituteInObject);
          } else if (obj && typeof obj === 'object') {
            const result: any = {};
            for (const [key, value] of Object.entries(obj)) {
              result[substituteVariables(key, state)] = substituteInObject(value);
            }
            return result;
          }
          return obj;
        };
        const substituted = substituteInObject(parsed);
        body = JSON.stringify(substituted);
      } catch (e) {
        // Not JSON, use as-is
        body = bodyStr;
      }
    }

    console.log('HTTP Request:', { method, url, headers, body });

    // Make the request
    const response = await fetch(url, {
      method,
      headers,
      body,
    });

    const responseData = await response.json().catch(() => response.text());

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: responseData,
      url,
      method,
    };
  } catch (error) {
    console.error('HTTP request error:', error);
    throw new Error(`HTTP request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
