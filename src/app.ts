import { config } from "./_config";
import "./css/app.css";
import { createElement } from "./functions/drag";
import { DraggedElementData } from "./types/draggedItemData";

export function app() {
  const dragableElements: NodeListOf<HTMLElement> = document.querySelectorAll(".toolbar .element");
  const pageZone: HTMLElement | null = document.querySelector(".page");

  let currentDraggedElementData: DraggedElementData | null = null;

  dragableElements.forEach((dragable) => {
    dragable.addEventListener("dragstart", (event: DragEvent) => {
      if (!dragable.dataset.element) return event.preventDefault();
      currentDraggedElementData = Object.fromEntries(
        Object.entries(dragable.dataset)
      ) as unknown as DraggedElementData;
    });
  });

  pageZone?.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  pageZone?.addEventListener("drop", (event) => {
    if (!event.dataTransfer) return;
    if (!currentDraggedElementData) return;
    const data = currentDraggedElementData;
    createElement(event, data)
    console.log(data)
  });
}
