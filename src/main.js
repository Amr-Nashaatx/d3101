import { zoom, drag, select } from "d3";
import { INNER_HEIGHT, INNER_WIDTH, SVG_HEIGHT, SVG_WIDTH } from "./cosntants";
import { edges, nodes } from "./data";
import { applyZoom } from "./zoom";
import { simulation } from "./foceSimulation";
import { init, update } from "./render";

const SVG = select("#app")
  .append("svg")
  .attr("width", SVG_WIDTH)
  .attr("height", SVG_HEIGHT);

const viewport = SVG.append("g").attr(
  "transform",
  `translate(${(SVG_WIDTH - INNER_WIDTH) / 2}, ${(SVG_HEIGHT - INNER_HEIGHT) / 2})`,
);

const graph = viewport.append("g");

init(graph);
simulation.on("tick", () => update(graph));
applyZoom(SVG, (transform) => graph.attr("transform", transform));
