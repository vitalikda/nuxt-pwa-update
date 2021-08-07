# nuxt-pwa-update

Detect new app version client side and update (reload the page) with Nuxt PWA

Here is the code:

```js
export default async function() {
  const workbox = await window.$workbox

  // Workbox couldn't be loaded
  if (!workbox) return

  workbox.addEventListener('installed', event => {
    // There is a new PWA version, reload the page
    if (event.isUpdate) window.location.reload()
  })
}
```