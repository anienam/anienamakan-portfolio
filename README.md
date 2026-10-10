# Anienam Udo — Digital Experience Portfolio

A responsive portfolio website built with plain HTML, CSS and vanilla JavaScript.

## Run locally

1. Extract the project folder if you downloaded the ZIP.
2. Open `index.html` in a browser, or use the VS Code **Live Server** extension for a local development server.
3. Edit the content in `index.html`, visual styles in `styles.css`, and project modal content/behaviour in `script.js`.

## Add your actual graphics and videos

The current project cards use CSS-built visual previews so the layout works before your assets are added. Replace these previews with your real work before publishing.

### Suggested asset structure

```text
assets/
  images/
    unitellas-training-homepage.png
    unitellas-website-desktop.png
    campaign-cloud-01.png
    linkedin-carousel-01.png
    video-thumbnail-01.jpg
  videos/
    campaign-video-01.mp4
  Anienam-Udo-CV.pdf
```

### Replacing a visual preview with an image

Inside the relevant `.project-visual` button in `index.html`, replace its CSS mockup content with an image, for example:

```html
<img class="project-image" src="assets/images/campaign-cloud-01.png" alt="Unitellas cloud infrastructure campaign graphic">
```

Add this rule to `styles.css`:

```css
.project-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

For a video, use a thumbnail button that opens a project dialog or place a video player in a dedicated case-study page. Example:

```html
<video controls playsinline preload="metadata" poster="assets/images/video-thumbnail-01.jpg">
  <source src="assets/videos/campaign-video-01.mp4" type="video/mp4">
  Your browser does not support HTML video.
</video>
```

Keep large video files hosted on a suitable video platform or compressed for web delivery where possible. Use optimised images (WebP or compressed JPG/PNG) for faster loading.

## Important before publishing

- Replace the CSS mockup previews with real work you are permitted to show.
- Confirm you have permission to publish company-owned graphics, videos, internal screenshots and platform details. Avoid showing confidential information or learner/customer data.
- Add your CV as `assets/Anienam-Udo-CV.pdf` or update/remove the download link.
- Review all project descriptions so they reflect work you personally completed. Add metrics only when you can verify them.
- Check all pages at mobile, tablet and desktop widths.
- This is a static site; no build step or framework is required.

## Publish

You can deploy the folder as a static site using GitHub Pages, Netlify, or Vercel. For a separate identity, consider registering a domain that reflects your name and digital experience work.


## Added real creative samples

Three supplied Unitellas graphics are included in `assets/images/` and displayed in the Selected Creative Work gallery:
- `unitellas-cloud-security.png`
- `unitellas-independence-day.png`
- `unitellas-cloud-scale.png`

Replace or add images by placing files in `assets/images/` and adding a matching `<figure class="real-work-card">` entry in `index.html`. Confirm permission to publish company assets before deploying publicly.


## Added real Unitellas media

The Selected Creative Work section now includes three supplied graphics and two playable MP4 videos:

- `assets/images/unitellas-cloud-security.png` — Cloud Security Best Practices
- `assets/images/unitellas-independence-day.png` — Nigeria Independence Day
- `assets/images/unitellas-cloud-scale.png` — How Enterprises Scale with Cloud
- `assets/videos/digital-sovereignty.mp4` — Digital Sovereignty
- `assets/videos/unitellas-managed-cloud.mp4` — Unitellas Managed Cloud

Videos use native HTML video controls and load metadata first to reduce unnecessary initial downloads. Before publishing publicly, confirm permission to share these company assets.


## Learning platform case study

The portfolio includes two screenshots supplied for the Unitellas International Training Centre case study:
- `assets/images/unitellas-lms-courses-dashboard.png` — course administration view.
- `assets/images/unitellas-lms-site-management.png` — site-template management view.

The screenshots open at full size when selected. Before publishing the portfolio publicly, confirm company approval and review screenshots for confidential information.


## Portfolio evidence included

- `assets/images/unitellas-corporate-homepage.png` — corporate website homepage screenshot.
- `assets/images/unitellas-corporate-solutions.png` — corporate website solutions page screenshot.
- `assets/images/unitellas-lms-courses-dashboard.png` and `unitellas-lms-site-management.png` — LMS administration evidence.
- `assets/images/` also contains the three supplied Unitellas graphics.
- `assets/videos/` contains the Digital Sovereignty and Unitellas Managed Cloud videos.

The corporate website case-study copy describes visible page structure and presentation. Update it with your specific responsibilities and verified outcomes before publishing.
