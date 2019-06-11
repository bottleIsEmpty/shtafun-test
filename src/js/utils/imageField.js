export default class imageField {
  constructor() {
    this.elements = [];
    this.height = null;
    this.WHratio = null;
  }

  add(element) {
    this.elements.push(element);
    return this;
  }
};