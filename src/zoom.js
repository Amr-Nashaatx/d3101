import { zoom } from "d3";
import { INNER_WIDTH, INNER_HEIGHT } from "./cosntants";

export function applyZoom(SVG, updateFn) {
  const z = zoom().scaleExtent([1, 10]).on("zoom", zoomedHandler);

  SVG.call(z);

  function zoomedHandler(e) {
    updateFn(e.transform);
  }
}
