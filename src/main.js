import { drag, select, pointer } from "d3";
import { INNER_HEIGHT, INNER_WIDTH, SVG_HEIGHT, SVG_WIDTH } from "./cosntants";
import { xScale, yScale, colorScale } from "./scales";
import { edges, nodes } from "./data";
import { applyZoom } from "./zoom";

const SVG = select("#app")
  .append("svg")
  .attr("width", SVG_WIDTH)
  .attr("height", SVG_HEIGHT);

const viewport = SVG.append("g").attr(
  "transform",
  `translate(${(SVG_WIDTH - INNER_WIDTH) / 2}, ${(SVG_HEIGHT - INNER_HEIGHT) / 2})`,
);
const graph = viewport.append("g");

const nodeById = new Map(nodes.map((node) => [node.id, node]));

function getNodeX(id) {
  return xScale(nodeById.get(id).x);
}

function getNodeY(id) {
  return yScale(nodeById.get(id).y);
}

function updateGraph() {
  graph
    .selectAll(".edge")
    .attr("x1", (d) => getNodeX(d.source))
    .attr("y1", (d) => getNodeY(d.source))
    .attr("x2", (d) => getNodeX(d.target))
    .attr("y2", (d) => getNodeY(d.target));

  graph
    .selectAll(".node")
    .attr("cx", (d) => xScale(d.x))
    .attr("cy", (d) => yScale(d.y));

  graph
    .selectAll(".label")
    .attr("x", (d) => xScale(d.x))
    .attr("y", (d) => yScale(d.y));
}

const dragBehavior = drag()
  .on("start", (e) => e.sourceEvent.stopPropagation())
  .on("drag", dragHandler);

function dragHandler(e, d) {
  const [px, py] = pointer(e, graph.node());

  d.x = xScale.invert(px);
  d.y = yScale.invert(py);
  updateGraph();
}

applyZoom(SVG, (transform) => {
  graph.attr("transform", transform);
});
graph
  .selectAll(".edge")
  .data(edges)
  .join("line")
  .attr("class", "edge")
  .attr("x1", (d) => getNodeX(d.source))
  .attr("y1", (d) => getNodeY(d.source))
  .attr("x2", (d) => getNodeX(d.target))
  .attr("y2", (d) => getNodeY(d.target))
  .style("stroke", "white")
  .style("stroke-width", 2);

graph
  .selectAll(".node")
  .data(nodes)
  .join("circle")
  .attr("class", "node")
  .attr("cx", (d) => xScale(d.x))
  .attr("cy", (d) => yScale(d.y))
  .attr("fill", (d) => colorScale(d.y))
  .attr("r", 50)
  .call(dragBehavior);

graph
  .selectAll(".label")
  .data(nodes)
  .join("text")
  .attr("class", "label")
  .text((d) => d.id)
  .attr("x", (d) => xScale(d.x))
  .attr("y", (d) => yScale(d.y));
