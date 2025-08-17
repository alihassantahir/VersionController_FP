# Version Controller for Frankly Prompt

## Overview
This project returns the latest version of the Chrome extension and serves the extension files. It allows automatic version checking and downloading for the Frankly Prompt extension.

## Deployment on Vercel

You can deploy this project on **Vercel** so it can serve the extension and provide version updates.

### Steps to Deploy

1. **Clone this repository locally**:

    ```bash
    git clone https://github.com/alihassantahir/VersionController_FP.git
    cd VersionController_FP
    ```

2. Go to [Vercel](https://vercel.com/) and log in.  
3. Click **New Project** → **Import Git Repository**.  
4. Select this repository (`VersionController_FP`) from your GitHub account.  
5. Click **Deploy**.  
6. After deployment, your project will have a **primary URL**, e.g.,  
   `https://version-controller-fp-umn6.vercel.app`.

### Updating the Extension File

- Place your latest Chrome extension zip file in the `public` folder with the name `FP_Latest.zip`.  
- Commit and push changes to GitHub. Vercel will automatically redeploy with the updated file.

    ```bash
    git add public/FP_Latest.zip
    git commit -m "Update latest extension"
    git push
    ```

- Your deployed URL will always serve the latest version of the extension at:  

    ```
    https://<your-vercel-url>/FP_Latest.zip
    ```
