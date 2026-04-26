import { max, scaleLinear, scaleSequential } from "d3";
import { INNER_HEIGHT, INNER_WIDTH } from "./cosntants";
import { planets } from "./data";
import { interpolateYlOrRd } from "d3-scale-chromatic";

export const colorScale = scaleSequential(interpolateYlOrRd).domain([0, 71]);
export const xScale = scaleLinear()
  .domain([0, max(planets, (d) => d.distance)])
  .range([0, INNER_WIDTH]);
export const yScale = scaleLinear()
  .domain([0, max(planets, (d) => d.size)])
  .range([INNER_HEIGHT, 0]);

export const fontScale = scaleLinear()
  .domain([0, max(planets, (d) => d.size)])
  .range([5, 18]);

export const rScale = scaleLinear().domain([0, 100]).range([2, 40]);
