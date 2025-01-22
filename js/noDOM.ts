enum HTMLPosition {
  ABOVE,
  BELOW,
}

interface NoDOMInterface {
  addElement(element: HTMLElement, targetElement: HTMLElement, position: HTMLPosition): HTMLElement;
  exportRaw(): HTMLElement;
}

class NoDOM implements NoDOMInterface {
  private doc: HTMLElement = document.querySelector('main');
  public addElement(element: HTMLElement, targetElement: HTMLElement = null, position: HTMLPosition = HTMLPosition.BELOW): HTMLElement {
    switch (position) {
      case HTMLPosition.ABOVE:
        this.doc.insertBefore(element, targetElement);
        break;
      case HTMLPosition.BELOW:
        this.doc.insertBefore(element, targetElement?.nextElementSibling);
        break;
    }
    return element;
  }

  public exportRaw(): HTMLElement {
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