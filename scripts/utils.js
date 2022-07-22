function div(className, innerText, onclick) {
  const div = document.createElement('div');
  div.className = className;
  div.innerText = innerText;
  div.onclick = onclick;
  return div;
}

function img(src, alt, className) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = className;
  img.loading = 'lazy';
  return img;
}

function a(href) {
  const a = document.createElement('a');
  a.href = href;
  a.target = "_blank"
  return a;
}