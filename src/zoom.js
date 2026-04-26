import { zoom } from "d3";
import { INNER_WIDTH, INNER_HEIGHT } from "./cosntants";
import { xScale, yScale } from "./scales";

export function applyZoom(SVG, updateFn) {
  const z = zoom().scaleExtent([1, 10]).on("zoom", zoomedHandler);

  SVG.call(z);

  function zoomedHandler(e) {
    const transform = e.transform;
    const scaleFactor = e.transform.k;

    const newX = transform.rescaleX(xScale);
    const newY = transform.rescaleY(yScale);

    updateFn(newX, newY, scaleFactor);
  }
}
