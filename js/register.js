/* Set up service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
    .then(reg => {
      console.log('Service Worker Registration Successful: ' );
    })
    .catch(error => {
      console.log('Service Worker Registration Failed: ' + error);
    });
}
