declare global {
  interface DragEvent {
    getDragData<T>(): T | null;
    setDragData<T>(data: T): void;
  }
}

declare global {
  interface String {
    isValidHTMLElement(): this is keyof HTMLElementTagNameMap;
  }
}

export function registerPrototypes() {
  DragEvent.prototype.getDragData = function <T>(): T | null {
    if (!this.dataTransfer) return null;
    try {
      return JSON.parse(this.dataTransfer.getData("text/plain")) as T;
    } catch {
      return null;
    }
  };

  DragEvent.prototype.setDragData = function <T>(data: T): void {
    if (!this.dataTransfer) return;
    this.dataTransfer.setData("text/plain", JSON.stringify(data));
  }
  
  String.prototype.isValidHTMLElement = function (): this is keyof HTMLElementTagNameMap {
    console.log(document.createElement(this.toString()))
    return this.toString() in document.createElement(this.toString());
  };
}

