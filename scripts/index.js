const layout = document.getElementById('layout');
const sidebar = layout.getElementsByTagName('sidebar')[0];
const feed = document.getElementById('feed-container');

const IMAGE_CLASS = [
  {
    name: 'nightfalls',
    count: 229
  }, {
    name: 'wallpaper',
    count: 242
  }, {
    name: 'super',
    count: 24
  }
];

IMAGE_CLASS.forEach(({name}, index) => {
  sidebar.append(div('', name.toUpperCase(), () => setCurrent(index)));
});

const IMAGE_FRAGMENTS = IMAGE_CLASS.map(({name, count}) => createImagesFragment(name, count));


function createImagesFragment(imageClassName, count) {
  const fragment = document.createDocumentFragment();
  for(let i = 1; i <= count; i++) {
    const anchor = a(`static/${imageClassName}/origin/${imageClassName}${i}.jpg`);
    anchor.append(img(`static/${imageClassName}/webp/${imageClassName}${i}.webp`, `${imageClassName}${i}.webp`, 'feed-image'))
    fragment.append(anchor);
  }
  return fragment;
}

function setCurrent(index) {
  const children = [...sidebar.children];
  children.forEach(child => {
    child.className = '';
  })
  children[index].className = 'tab-current';
  
  feed.replaceChildren(IMAGE_FRAGMENTS[index].cloneNode(true));
}

