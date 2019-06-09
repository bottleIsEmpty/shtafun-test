// ES2015 classes, ideally have to be transpiled with webpack and babel
class gridElement {
  constructor() {
    let newElem = document.createElement('div');
    this.element = newElem;
  }

  add(elem) {
    this.element.appendChild(elem.element);
    return this;
  };
}

class row extends gridElement {
  constructor() {
    super();
    this.element.className = 'row';    
  }
};

class column extends row{
  constructor() {
    super();
    this.element.className = 'column';
  }
};

function img(path) {
  let img = document.createElement('img');
  img.src = path;
  let div = document.createElement('div');
  div.className = 'image';
  div.appendChild(img);
  return { element: div };
};

function drawStoryboard(frame, params = {
  width: 1000,
  height: 350,
  paddingTop: 5,
  paddingRight: 5,
  paddingBottom: 5,
  paddingLeft: 5,
}) {
  const grid = document.querySelector('#image-grid');
  let style = document.createElement('style');
  style.innerHTML =  `
    #image-grid .image {
      padding-top: ${params.paddingTop}px;
      padding-right: ${params.paddingRight}px;
      padding-bottom: ${params.paddingBottom}px;
      padding-left: ${params.paddingLeft}px;
    }
  `;
  const ref = document.querySelector('script');
  ref.parentNode.insertBefore(style, ref);

  grid.style.width = params.width + 'px';
  grid.style.height = params.height + 'px';
  grid.appendChild(frame.element);
}


// Пользовательский код

document.onreadystatechange = () => {
  const r1 = new row(),
        r2 = new row(),
        r3 = new row(),
        c1 = new column(),
        c2 = new column();
  r1.add(img('images/img10.jpg'))
    .add(c1)
    .add(img('images/img2.jpg'))
    .add(c2);

  r2.add(img('images/img9.jpg'))
    .add(img('images/img5.jpg'));

  r3.add(img('images/img6.jpg'))
    .add(img('images/img8.jpg'));
    
  c1.add(img('images/img3.jpg'))
    .add(r2);

  c2.add(img('images/img4.jpg'))
    .add(img('images/img7.jpg'))
    .add(r3);
    

  drawStoryboard(r1, { 
    width: 1300,
    height: 400,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
    paddingBottom: 2
  });
}
