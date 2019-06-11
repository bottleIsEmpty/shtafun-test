import imageField from './imageField';

export default class row extends imageField {
  constructor() {
    super();
  }

  draw(parentNode) {
    const ratioSum = this.elements.reduce((acc, cur) => acc + cur.WHratio, 0);
    this.height = this.width / ratioSum;
    this.WHratio = this.width / this.height;

    let div = document.createElement('div');
    div.className = 'row';
    parentNode.appendChild(div);

    this.elements.forEach(el => {
      const elHeight = this.height;
      const elWidth = this.height * el.WHratio;
      el.draw(elHeight, elWidth, div);
    });
  }
}