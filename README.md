# Victec Website

A responsive, single-page website for a technology and software development company.

## Files
- `index.html` — page structure and content
- `styles.css` — layout, colors, responsive styling
- `script.js` — mobile navigation, footer year and WhatsApp link

## Set the WhatsApp contact number
1. Open `script.js`.
2. Find `const WHATSAPP_NUMBER = "ADD_VICTEC_NUMBER";`
3. Replace `ADD_VICTEC_NUMBER` with Victec's WhatsApp number in international format, digits only.
   - Zimbabwe numbers use country code `263` and omit the leading `0`.
   - Example format: `263771234567` (replace with the real Victec number).
4. Save the file and test the WhatsApp button.

## Preview
Open `index.html` in a browser. An internet connection is needed for the Google Fonts import.

## Publish
Upload the contents of this folder to a static website host such as GitHub Pages, Netlify or Vercel. Keep `index.html`, `styles.css` and `script.js` in the same folder.
