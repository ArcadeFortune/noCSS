import "./css/app.css";
import { DraggedElementData } from "./types/draggedItemData";

export function app() {
  const dragableElements: NodeListOf<HTMLElement> = document.querySelectorAll(".toolbar .element");
  const pageZone: HTMLElement | null = document.querySelector(".page");

  dragableElements.forEach((dragable) => {
    dragable.addEventListener("dragstart", (event: DragEvent) => {
      if (!event.dataTransfer) return;
      if (!dragable.dataset.element) return event.preventDefault();
      event.setDragData<DraggedElementData>({
        HTMLElement: dragable.dataset.element as keyof HTMLElementTagNameMap
      });
    });
  });

  pageZone?.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  pageZone?.addEventListener("drop", (event) => {
    if (!event.dataTransfer) return;
    const data = event.getDragData<DraggedElementData>();
    console.log("data is", data);
  });
}
