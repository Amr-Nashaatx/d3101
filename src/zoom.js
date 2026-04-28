import { zoom } from "d3";
import { INNER_WIDTH, INNER_HEIGHT } from "./cosntants";

export function applyZoom(window, updateFn) {
  const z = zoom()
    .scaleExtent([1, 10])
    .on("zoom", zoomedHandler)
    .filter((e) => e.target.tagName !== "circle" && !e.button);

  window.call(z);

  function zoomedHandler(e) {
    updateFn(e.transform);
  }
}
