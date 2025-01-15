enum HTMLPosition {
  ABOVE,
  RIGHT,
  BELOW,
  LEFT,
}

class NoDOM {
  private doc: DocumentFragment = document.createDocumentFragment();
  private previewDoc: HTMLElement = document.querySelector('main');
  constructor() {
    this.previewDoc.appendChild(this.doc);
  }
  public addElement(element: HTMLElement, targetElement: HTMLElement = null, position: HTMLPosition = HTMLPosition.BELOW): HTMLElement {
    switch (position) {
      case HTMLPosition.ABOVE:
        this.doc.insertBefore(element, targetElement);
        this.previewDoc.insertBefore(element, targetElement);
        break;
      case HTMLPosition.RIGHT:
        break;
      case HTMLPosition.BELOW:
        this.doc.insertBefore(element, targetElement?.nextElementSibling);
        this.previewDoc.insertBefore(element, targetElement?.nextElementSibling);
        break;
      case HTMLPosition.LEFT:
        break;
    }
    return element;
  }

  public exportRaw(): DocumentFragment {
    return this.doc;
  }
}

const dom = new NoDOM();

function test() {
  var a = document.createElement('h3');
  a.textContent = 'Hello World'
  return dom.addElement(a);
}

function test2(el: HTMLElement) {
  dom.addElement(document.createElement('h1'), el, HTMLPosition.ABOVE);
}

function exportRaw() {
  console.log(dom.exportRaw());
}