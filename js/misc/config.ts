interface ConfigProperties {
  documentRoot: HTMLElement;
}

export default {
  documentRoot: document.querySelector('main.editor .preview')
} as Readonly<ConfigProperties>