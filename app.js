const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.js-gallery')
const lightboxEL = document.querySelector('.light-box')
const lightboxImgEl = document.querySelector('.lightbox__image')
const closeBtnEl = document.querySelector('[data-action="close-lightbox"]')

const picture = galleryItems.map((img) => {
  const { preview, original, description } = img
  
  const itemEl = document.createElement('li');
  itemEl.classList.add('gallery__item');
  const linkEl = document.createElement('a');
  linkEl.classList.add('gallery__link');
  const imagEl = document.createElement('img')
  imagEl.classList.add('gallery__image')

  return `<li class="gallery__item"><a class="gallery__link" href=${original}>
<img class="gallery__image" src=${preview} data-source=${original} alt=${description}>
    </a>
  </li>`
})

galleryEl.insertAdjacentHTML('afterbegin', picture.join(''));

console.log(galleryEl);


const refs = {
  gallery: document.querySelector('.js-gallery'),
  modalWindow: document.querySelector('.lightbox'),
  largeModalImage: document.querySelector('img.lightbox__image'),
  closeBtnEl :document.querySelector('[data-action="close-lightbox"]')
};
refs.gallery.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  setLargeImageSrc(largeImageURL);
}
function setLargeImageSrc(url) {
  refs.largeModalImage.src = url;
}
  refs.gallery.addEventListener('click', () => {
    refs.modalWindow.classList.add('is-open');
    setLargeImageSrc;
  });

  refs.closeBtnEl.addEventListener('click', () => {
   refs.modalWindow.classList.remove('is-open');
    setLargeImageSrc;
    
    refs.largeModalImage.src = '';
    refs.largeModalImage.alt = '';
  });
 
