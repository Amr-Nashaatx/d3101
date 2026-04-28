import { drag, pointer } from "d3";
import { simulation } from "./foceSimulation";

export function attatchDragBehavior(graph) {
  const dragBehavior = drag()
    .on("start", dragStart)
    .on("drag", dragHandler)
    .on("end", dragEnd);

  function dragStart(e, d) {
    if (!e.active) simulation.alphaTarget(0.3).restart();
    const [px, py] = pointer(e, graph.node());
    d.fx = px;
    d.fy = py;
  }
  function dragHandler(e, d) {
    const [px, py] = pointer(e, graph.node());
    d.fx = px;
    d.fy = py;
  }
  function dragEnd(e, d) {
    if (!e.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
  graph.selectAll("circle").call(dragBehavior);
}
