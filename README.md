# nuxt-pwa-update

Detect new app version client side and update (reload the page) with Nuxt PWA

Here is the code:

```js
export default async function() {
  const workbox = await window.$workbox

  if (!workbox) return

  workbox.addEventListener('installed', event => {
    if (event.isUpdate) {
      window.location.reload()
      return    
    }
  })
}
```