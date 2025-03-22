import { config } from "../_config";
import { DraggedElementData } from "../types/draggedItemData";

export function createElement(event: DragEvent, data: DraggedElementData) {
  if (!data.element) return;

  let previewPage = config.previewElement;
  const newElement = document.createElement(data.element)
  newElement.innerHTML = data.defaultText ?? "";
  previewPage.appendChild(newElement);
}