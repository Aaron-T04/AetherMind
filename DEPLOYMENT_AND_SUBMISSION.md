# 🚀 Deployment & Submission Guide

## 📦 Step 1: Deploy to Vercel

### Prerequisites
- GitHub repository pushed (✅ Done: https://github.com/Aaron-T04/AetherMind)
- Vercel account (Sign up at https://vercel.com - free)

### Deployment Steps

1. **Connect GitHub to Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import from GitHub: `Aaron-T04/AetherMind`
   - Select the repository

2. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

3. **Add Environment Variables:**
   Click "Environment Variables" and add all from your `.env.local`:
   
   ```
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
   FIRECRAWL_API_KEY=fc-...
   GEMINI_API_KEY=AIzaSy...
   AIMLAPI_API_KEY=5b5459f8ec054503871053e0a89654a1
   
   # Optional but recommended
   DEMO_MODE=true
   USE_FALLBACK_DATA=true
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your app will be live at: `https://aethermind-xxx.vercel.app`

5. **Get Your Production URL:**
   - After deployment, copy your Vercel URL
   - Example: `https://aethermind.vercel.app` or custom domain

---

## 🗄️ Step 2: Deploy Convex to Production

### Deploy Convex Backend

1. **In your terminal:**
   ```bash
   npx convex deploy
   ```

2. **Update Vercel Environment Variable:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update `NEXT_PUBLIC_CONVEX_URL` with the production Convex URL
   - Redeploy (Vercel will auto-redeploy or click "Redeploy")

---

## 📝 Step 3: Prepare Submission Materials

### Required Materials Checklist

- [ ] **GitHub Repository Link**
  - ✅ https://github.com/Aaron-T04/AetherMind

- [ ] **Live Demo URL (Vercel)**
  - Your deployed Vercel link
  - Example: `https://aethermind.vercel.app`

- [ ] **Demo Video (1 minute)**
  - Upload to YouTube (unlisted) or Vimeo
  - Get shareable link
  - See `DEMO_VIDEO_GUIDE.md` for recording instructions

- [ ] **Project Description**
  - Brief summary (2-3 sentences)
  - Key features
  - Tech stack highlights

- [ ] **Screenshots** (Optional but recommended)
  - Landing page
  - Workflow builder in action
  - Final output example

---

## 📤 Step 4: Submit to Hackathon

### Where to Submit

**AI Genesis Hackathon 2025** is hosted by **lablab.ai** and **/function1**

### Submission Platform Options:

1. **lablab.ai Platform:**
   - Go to https://lablab.ai
   - Find "AI Genesis Hackathon 2025"
   - Click "Submit Project" or "Add Submission"
   - Fill out the submission form

2. **Devpost (if used):**
   - Some hackathons use Devpost
   - Check hackathon page for submission link
   - Create account if needed
   - Submit project

3. **Direct Submission:**
   - Check hackathon Discord/Slack
   - Email submission (if specified)
   - Google Form (if provided)

### Submission Form Fields (Typical)

Fill out these fields:

1. **Project Name:**
   ```
   AetherMind – Autonomous AI Workflow Builder
   ```

2. **Tagline/Short Description:**
   ```
   Visual AI workflow builder that transforms prompts into autonomous agent pipelines powered by Gemini 2.5 Flash and AI/ML API
   ```

3. **Full Description:**
   ```
   AetherMind is a visual, no-code AI workflow builder that demonstrates multi-agent orchestration. Users drag and drop nodes to create autonomous pipelines that combine:
   
   - Gemini 2.5 Flash for reasoning and analysis
   - AI/ML API (Llama 3.1 70B) for summaries
   - Firecrawl for web research
   
   Built for AI Genesis Hackathon 2025 by Team Aether.
   ```

4. **GitHub Repository:**
   ```
   https://github.com/Aaron-T04/AetherMind
   ```

5. **Live Demo URL:**
   ```
   https://your-app.vercel.app
   ```

6. **Demo Video:**
   ```
   https://youtube.com/watch?v=... (or Vimeo link)
   ```

7. **Tech Stack:**
   ```
   Next.js, Gemini 2.5 Flash, AI/ML API, Firecrawl, Convex, LangGraph, React Flow
   ```

8. **Team Members:**
   ```
   Team Aether
   [Your Name]
   ```

9. **Hackathon Track:**
   ```
   Google Gemini Track (or as specified)
   ```

10. **Judging Criteria Alignment:**
    - ✅ Application of Technology: Gemini 2.5 Flash + AI/ML API integration
    - ✅ Presentation: Visual workflow builder with real-time execution
    - ✅ Business Value: Automates research and analysis workflows
    - ✅ Originality: Multi-agent orchestration with visual builder

---

## 🔗 Quick Links for Submission

### Your Project Links:
- **GitHub:** https://github.com/Aaron-T04/AetherMind
- **Vercel:** `https://your-app.vercel.app` (after deployment)
- **Demo Video:** `https://youtube.com/...` (after upload)

### Hackathon Links:
- **lablab.ai:** https://lablab.ai
- **Hackathon Page:** Check lablab.ai for "AI Genesis Hackathon 2025"
- **Discord/Slack:** Check hackathon page for community links

---

## ✅ Pre-Submission Checklist

Before submitting, verify:

- [ ] **GitHub repo is public** and accessible
- [ ] **Vercel deployment is live** and working
- [ ] **All environment variables** are set in Vercel
- [ ] **Convex is deployed** to production
- [ ] **Demo video is uploaded** and accessible
- [ ] **README.md is complete** with setup instructions
- [ ] **Workflow templates work** on live deployment
- [ ] **No broken links** in documentation
- [ ] **API keys are configured** (or fallback mode enabled)

---

## 🎯 Submission Tips

1. **Test Your Live Demo:**
   - Open your Vercel URL in incognito mode
   - Test the workflow end-to-end
   - Make sure it works without your local environment

2. **Video Quality:**
   - Record in 1080p
   - Keep under 1 minute
   - Show key features clearly

3. **Description:**
   - Be concise but complete
   - Highlight Gemini 2.5 Flash + AI/ML API integration
   - Emphasize the visual builder aspect

4. **Screenshots:**
   - Take high-quality screenshots
   - Show the workflow builder in action
   - Include final output examples

---

## 🆘 Troubleshooting

### Vercel Deployment Issues:

**Build Fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (18+)

**Environment Variables Not Working:**
- Double-check variable names (case-sensitive)
- Redeploy after adding variables
- Check Vercel logs for errors

**Convex Connection Issues:**
- Verify `NEXT_PUBLIC_CONVEX_URL` is set correctly
- Ensure Convex is deployed: `npx convex deploy`
- Check Convex dashboard for errors

### Demo Video Issues:

**Video Too Long:**
- Edit and speed up non-critical parts
- Cut unnecessary pauses
- Focus on key moments

**Audio Issues:**
- Re-record with better microphone
- Add captions/subtitles
- Use text overlays if needed

---

## 📅 Submission Deadline

**AI Genesis Hackathon 2025:**
- **Dates:** November 14-19, 2025
- **Submission Deadline:** November 18 at 8 AM UAE time
- **Location:** Hybrid (Online + Festival Arena Dubai)

**⚠️ Submit early to avoid last-minute issues!**

---

## 🎉 After Submission

1. **Share on Social Media:**
   - Twitter/X with hackathon hashtags
   - LinkedIn post
   - Tag @lablabai, @function1, @GoogleAI

2. **Engage with Judges:**
   - Respond to questions promptly
   - Be available during judging period
   - Prepare to demo live if asked

3. **Network:**
   - Join hackathon Discord/Slack
   - Share your project
   - Connect with other participants

---

**Good luck with your submission! 🚀**

