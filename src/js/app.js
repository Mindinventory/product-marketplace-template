import '../css/app.css';

const uppy = document.querySelector('[data-s3-uppy]');
if (uppy) {
  import(/* webpackChunkName: "image-upload" */ './image-upload.js').then(() => {
    console.log('Image upload module loaded.');
  });
}

const gallery = document.querySelector('.glider');
if (gallery) {
  import(/* webpackChunkName: "gallery" */ './gallery.js').then(() => {
    console.log('Gallery module loaded.');
  });
}

const favoriteSeller = document.querySelector('[data-type="favorite_seller"]');
favoriteSeller.addEventListener("click", event => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');

  fetch('/api/favseller', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify({
      "id": id,
      "authenticity_token": document.getElementsByName('authenticity_token')[0].value
    })
  }).then((response) => {
    window.location.reload()
  });
})

const wishlist = document.querySelector('[data-type="wishlist"]');
wishlist.addEventListener("click", event => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');

  fetch('/api/wishlist', {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
    },
    body: JSON.stringify({
      "id": id,
      "authenticity_token": document.getElementsByName('authenticity_token')[0].value
    })
  }).then((response) => {
    window.location.reload()
  });
})
