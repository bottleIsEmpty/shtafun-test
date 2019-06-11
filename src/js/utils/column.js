import imageField from './imageField';

export default class column extends imageField {
  constructor() {
    super();
  }

  draw(parentNode) {
    const ratioSum = this.elements.reduce((acc, cur) => acc + cur.WHratio, 0);
    this.width = this.height / ratioSum;
    this.WHratio = this.width / this.height;

    let div = document.createElement('div');
    div.className = 'column';
    parentNode.appendChild(div);

    this.elements.forEach(el => {
      const elWidth = this.width;
      const elHeight = this.width / el.WHratio;
      el.draw(elHeight, elWidth, div);
    });
  }
}