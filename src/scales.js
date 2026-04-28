import { extent, scaleLinear, scaleSequential } from "d3";
import { INNER_HEIGHT, INNER_WIDTH } from "./cosntants";
import { nodes } from "./data";
import { interpolateYlOrRd } from "d3-scale-chromatic";

const NODE_PADDING = 30;

export const colorScale = scaleSequential(interpolateYlOrRd).domain(
  extent(nodes, (d) => d.x),
);
export const xScale = scaleLinear()
  .domain(extent(nodes, (d) => d.x))
  .range([NODE_PADDING, INNER_WIDTH - NODE_PADDING]);

export const yScale = scaleLinear()
  .domain(extent(nodes, (d) => d.y))
  .range([NODE_PADDING, INNER_HEIGHT - NODE_PADDING]);
