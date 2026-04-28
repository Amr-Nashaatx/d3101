import { selectAll } from "d3";
import { nodes, edges } from "./data";
import { attatchDragBehavior } from "./drag";

export function update(graph) {
  updateLinks(graph);
  updateNodes(graph);
  updateLabels(graph);
}

export function init(graph) {
  graph.selectAll("line").data(edges).join("line").style("stroke", "white");

  graph
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .style("stroke", "orange")
    .style("cursor", "pointer");

  graph
    .selectAll("text")
    .data(nodes)
    .join("text")
    .text((d) => d.id);

  attatchDragBehavior(graph);
}

function updateNodes(graph) {
  graph
    .selectAll("circle")
    .attr("r", 40)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);
}

function updateLinks(graph) {
  graph
    .selectAll("line")
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);
}

function updateLabels(graph) {
  graph
    .selectAll("text")
    .attr("x", (d) => d.x)
    .attr("y", (d) => d.y);
}
