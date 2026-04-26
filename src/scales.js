import { max, scaleLinear } from "d3";
import { INNER_HEIGHT, INNER_WIDTH } from "./cosntants";
import { planets } from "./data";

export const xScale = scaleLinear().domain([0, 31]).range([0, INNER_WIDTH]);
export const yScale = scaleLinear()
  .domain([0, max(planets, (d) => d.size)])
  .range([INNER_HEIGHT, 0]);

export const fontScale = scaleLinear()
  .domain([0, max(planets, (d) => d.size)])
  .range([5, 18]);

export const rScale = scaleLinear().domain([0, 100]).range([2, 40]);

export const colorScale = scaleLinear()
  .domain([0, 25])
  .range(["orange", "red"]);
