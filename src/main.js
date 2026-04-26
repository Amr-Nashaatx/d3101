import { axisBottom, axisLeft, select } from "d3";
import { SVG_WIDTH, SVG_HEIGHT, INNER_HEIGHT, MARGIN } from "./cosntants";
import { xScale, yScale, colorScale, fontScale, rScale } from "./scales";
import { applyZoom } from "./zoom";
import { planets } from "./data";
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

const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale).ticks(5);

const xAxisSvg = viewport.append("g");
const yAxisSvg = viewport.append("g");

xAxisSvg.attr("transform", `translate(0, ${INNER_HEIGHT})`).call(xAxis);
yAxisSvg.call(yAxis);

applyZoom(SVG, (newX, newY) => {
  // update axis
  xAxisSvg.call(axisBottom(newX));
  yAxisSvg.call(axisLeft(newY));
  // update circles
  viewport.selectAll("circle").attr("cx", (d) => newX(d.distance));
  viewport.selectAll("circle").attr("cy", (d) => newY(d.size));
  // update labels
  viewport
    .selectAll(".planet-label")
    .attr("x", (d) => newX(d.distance))
    .attr("y", (d) => newY(d.size));
});

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
  .attr("class", "planet-label")
  .attr("x", (d) => xScale(d.distance))
  .attr("y", (d) => yScale(d.size))
  .attr("dx", 6)
  .attr("dy", 10)
  .style("font-size", (d) => `${fontScale(d.size)}px`)
  .text((d) => d.name);
