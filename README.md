# D & S Wedding Invitation

A responsive, bride-first wedding invitation website for GitHub Pages.

## Edit the invitation

Open `script.js`. Everything under the `WEDDING` object is intended to be easy to edit:

- Bride name and parents
- Groom name and parents
- Bible verse
- Wedding date/time
- Venue and address
- Google Maps link

The countdown and Add to Calendar button update automatically from those values.

## Add your own photos

The current design uses elegant letter placeholders so the site works immediately.

To add photos later, place images in the `images/` folder and replace the `.portrait-placeholder` elements in `index.html` with `<img>` elements. The CSS can then be adjusted for your preferred photo style.

## Run locally

Double-click `index.html` to preview it in a browser.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `wedding-invitation`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder.
3. Open the repository's **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`.
6. Save. GitHub will provide the public invitation URL.

No server or database is required.
