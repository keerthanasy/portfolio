# How to Host Your Portfolio

Since your portfolio is built with **Next.js**, the best and easiest place to host it is **Vercel** (the creators of Next.js) or **Netlify**.

## Option 1: Vercel (Recommended)

1.  **Push your code to GitHub**
    *   Initialize a git repository if you haven't already:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
    *   Create a new repository on [GitHub.com](https://github.com/new).
    *   Follow the instructions to push your local code to the new repository.

2.  **Deploy to Vercel**
    *   Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.
    *   Click **"Add New..."** -> **"Project"**.
    *   Import your `portfolio_2` repository from the list.
    *   **Framework Preset**: It should automatically detect `Next.js`.
    *   **Build Command**: `next build` (default).
    *   **Output Directory**: `.next` (default).
    *   Click **"Deploy"**.

3.  **Done!**
    *   Vercel will build your site and give you a live URL (e.g., `portfolio-keerthana.vercel.app`).
    *   Every time you push changes to GitHub, Vercel will automatically redeploy your site.

## Option 2: Netlify

1.  **Push your code to GitHub** (same as above).
2.  **Deploy to Netlify**
    *   Go to [netlify.com](https://netlify.com) and sign up.
    *   Click **"Add new site"** -> **"Import an existing project"**.
    *   Choose **GitHub**.
    *   Select your repository.
    *   **Build command**: `npm run build`
    *   **Publish directory**: `.next` (Netlify might auto-detect this, or you may need to install the `@netlify/plugin-nextjs`).
    *   Click **"Deploy"**.

---

### Important Note for 3D/WebGL Projects
Since your portfolio uses heavy 3D assets (Three.js), ensure your `public` folder isn't too massive (e.g., huge video files or unoptimized textures). Vercel has limits on file sizes for the free tier, but for standard web assets, it will work perfectly.
