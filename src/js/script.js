import row from './utils/row';
import column from './utils/column';
import image from './utils/image';

const parentNode = document.querySelector('#image-grid');

function img(src) {
  return new image(src);
} 

function drawStoryboard(element, options) {
  element.width = options.width;
  element.draw(parentNode);
}

function drawStoryboardCol(element, options) {
  element.height = options.height;
  element.draw(parentNode);
}

// Код пользователя

document.onreadystatechange = () => {
  const row1 = new row();
  const col1 = new column();
  row1.add(img('images/img1.jpg')).add(img('images/img2.jpg')).add(img('images/img3.jpg'));
  col1.add(img('images/img1.jpg')).add(img('images/img2.jpg')).add(img('images/img3.jpg'));
  drawStoryboard(row1, { width: 800 })
  drawStoryboardCol(col1, { height: 900 })
}
