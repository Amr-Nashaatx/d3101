import { axisBottom, axisLeft, max, scaleLinear, select } from "d3";
import {
  SVG_WIDTH,
  SVG_HEIGHT,
  INNER_HEIGHT,
  MARGIN,
  INNER_WIDTH,
} from "./cosntants";

// Append the SVG Element
const app = document.querySelector("#app");
const svgNode = document.createElement("svg");
svgNode.setAttribute("width", SVG_WIDTH);
svgNode.setAttribute("height", SVG_HEIGHT);
app.appendChild(svgNode);

// SVG selection
const SVG = select("svg");

const viewport = SVG.append("g").attr(
  "transform",
  `translate(${MARGIN.left}, ${MARGIN.top})`,
);

const planets = [
  { name: "Mercury", distance: 0.39, size: 2.4 },
  { name: "Venus", distance: 0.72, size: 6.1 },
  { name: "Earth", distance: 1.0, size: 6.4 },
  { name: "Mars", distance: 1.52, size: 3.4 },
  { name: "Jupiter", distance: 5.2, size: 71.0 },
  { name: "Saturn", distance: 9.58, size: 60.0 },
  { name: "Uranus", distance: 19.2, size: 25.0 },
  { name: "Neptune", distance: 30.05, size: 24.6 },
];

const xScale = scaleLinear().domain([0, 31]).range([0, INNER_WIDTH]);
const yScale = scaleLinear()
  .domain([0, max(planets, (d) => d.size)])
  .range([INNER_HEIGHT, 0]);

const fontScale = scaleLinear()
  .domain([0, max(planets, (d) => d.size)])
  .range([5, 18]);
const rScale = scaleLinear().domain([0, 100]).range([2, 40]);

const colorScale = scaleLinear().domain([0, 25]).range(["orange", "red"]);

const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale).ticks(5);

viewport
  .append("g")
  .attr("transform", `translate(0, ${yScale(0)})`)
  .call(xAxis);
viewport.append("g").call(yAxis);

viewport
  .selectAll("circle")
  .data(planets)
  .join("circle")
  .attr("cx", (d) => xScale(d.distance))
  .attr("cy", (d) => yScale(d.size))
  .attr("fill", (d) => colorScale(d.size))
  .attr("r", (d) => rScale(d.size));

viewport
  .selectAll(".planet-label")
  .data(planets)
  .join("text")
  .attr("x", (d) => xScale(d.distance))
  .attr("y", (d) => yScale(d.size))
  .attr("dx", 6)
  .attr("dy", 10)
  .style("font-size", (d) => `${fontScale(d.size)}px`)
  .text((d) => d.name);
