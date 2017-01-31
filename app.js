(function () {
  var galleryBtn = document.querySelectorAll('button[gallery-target]')
  galleryBtn.forEach(forEachBtn)

  function forEachBtn (btn) {
    var galleryName = btn.getAttribute('gallery-target')
    var gallery = document.querySelector('div[gallery="' + galleryName + '"]')

    btn.addEventListener('click', handleOnClick)

    function handleOnClick () {
      gallery.classList.toggle('open')
    }
  }
})()