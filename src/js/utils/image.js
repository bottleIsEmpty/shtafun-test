export default class image {
  constructor(src) {
    this.element = document.createElement('img');
    this.element.src = src;
    this.WHratio = this.element.naturalWidth / this.element.naturalHeight;
  }

  draw(height, width, parentNode) {
    this.element.width = width;
    this.element.height = height;
    parentNode.appendChild(this.element);
  }
}