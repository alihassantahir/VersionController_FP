# Version Controller for Frankly Prompt

## Overview
This project returns the latest version of the Chrome extension and serves the extension files. It allows automatic version checking and downloading for the Frankly Prompt extension.

## Deployment

You can deploy this project on **Vercel** so it can serve the extension and provide version updates.

### Steps to Deploy on Vercel

1. Go to [Vercel](https://vercel.com/) and log in.
2. Click **New Project** → **Import Git Repository**.
3. Select this repository (`VersionController_FP`) from your GitHub account.
4. Set **Environment Variables** if needed (for example, any API keys or version links).
5. Click **Deploy**.
6. After deployment, your project will have a **primary URL**, e.g.,  
   `https://version-controller-fp-umn6.vercel.app`.  


```javascript
const VERSION_CONTROLLER_LINK = "https://version-controller-fp-umn6.vercel.app";
