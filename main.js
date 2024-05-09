console.log('initial location:', this.location);

window.addEventListener('popstate', e => {
  console.log(e);
  console.log(location, location.pathname);
  console.log(history);
})

const links = document.querySelectorAll('#nav a')
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const path = link.getAttribute('href')
    const origin = location.origin

    history.pushState({}, '', `${origin}${path}`)
  })
})

const nativePushState = history.pushState.bind(history);
history.pushState = function(data, unused, url) {
  console.log('pushState', data, url);

  nativePushState({
    ...data,
    debug: true
  }, unused, url)
}