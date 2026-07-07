# Gods of War Start Screen

This is the piecemeal start-screen build.

## Files

- `index.html`
- `style.css`
- `app.js`
- `godsofwartitle.png`

## What it does

- Shows the `godsofwartitle.png` start image full screen.
- Lets the player tap anywhere on the image.
- Fades into a placeholder main menu.
- Includes a Cloudflare Pages URL placeholder in the HTML via `data-cloudflare-src`.

## Cloudflare image URL

In `index.html`, replace:

```html
data-cloudflare-src="https://YOUR-CLOUDFLARE-DOMAIN.pages.dev/godsofwartitle.png"
```

with your real Cloudflare asset URL.

Then in `app.js`, uncomment:

```js
startImage.src = startImage.dataset.cloudflareSrc;
```

For GitHub Pages or simple local use, just keep `godsofwartitle.png` beside `index.html`.
