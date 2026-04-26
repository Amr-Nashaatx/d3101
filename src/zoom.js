import { zoom } from "d3";
import { INNER_WIDTH, INNER_HEIGHT } from "./cosntants";
import { xScale, yScale } from "./scales";

export function applyZoom(SVG, updateFn) {
  const z = zoom()
    .scaleExtent([1, 10])
    .extent([
      [0, 0],
      [INNER_WIDTH, INNER_HEIGHT],
    ])
    .translateExtent([
      [0, 0],
      [INNER_WIDTH, INNER_HEIGHT],
    ])
    .on("zoom", zoomedHandler);

  SVG.call(z);

  function zoomedHandler(e) {
    const transform = e.transform;

    const newX = transform.rescaleX(xScale);
    const newY = transform.rescaleY(yScale);

    console.log("INSIDE HANDLER: ", newX.domain(), newY.domain());
    updateFn(newX, newY);
  }
}
