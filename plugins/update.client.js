export default async function() {
  const workbox = await window.$workbox

  if (!workbox) {
    console.debug("%cWorkbox couldn't be loaded.", 'color: orange;') // eslint-disable-line
    return
  }

  workbox.addEventListener('installed', event => {
    if (event.isUpdate) {
      console.debug('%cThere is an update for the PWA, reloading...', 'color: orange;') // eslint-disable-line
      window.location.reload()
      return
    }
    
    console.debug('%cThe PWA is on the latest version.', 'color: orange;') // eslint-disable-line
  })
}
