var HTMLPosition;
(function (HTMLPosition) {
    HTMLPosition[HTMLPosition["ABOVE"] = 0] = "ABOVE";
    HTMLPosition[HTMLPosition["BELOW"] = 1] = "BELOW";
})(HTMLPosition || (HTMLPosition = {}));
var NoDOM = (function () {
    function NoDOM() {
        this.doc = document.querySelector('main');
    }
    NoDOM.prototype.addElement = function (element, targetElement, position) {
        if (targetElement === void 0) { targetElement = null; }
        if (position === void 0) { position = HTMLPosition.BELOW; }
        switch (position) {
            case HTMLPosition.ABOVE:
                this.doc.insertBefore(element, targetElement);
                break;
            case HTMLPosition.BELOW:
                this.doc.insertBefore(element, targetElement === null || targetElement === void 0 ? void 0 : targetElement.nextElementSibling);
                break;
        }
        return element;
    };
    NoDOM.prototype.exportRaw = function () {
        return this.doc;
    };
    return NoDOM;
}());
var dom = new NoDOM();
function test() {
    var a = document.createElement('h3');
    a.textContent = 'Hello World';
    return dom.addElement(a);
}
function test2(el) {
    dom.addElement(document.createElement('h1'), el, HTMLPosition.ABOVE);
}
function exportRaw() {
    console.log(dom.exportRaw());
}
//# sourceMappingURL=noDOM.js.map