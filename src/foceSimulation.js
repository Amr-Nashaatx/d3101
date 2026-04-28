import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3";
import { edges, nodes } from "./data";
import { INNER_HEIGHT, INNER_WIDTH } from "./cosntants";

export const simulation = forceSimulation(nodes)
  .force(
    "link",
    forceLink(edges)
      .id((d) => d.id)
      .distance(120),
  )
  .force("charge", forceManyBody().strength(-400))
  .force("center", forceCenter(INNER_WIDTH / 2, INNER_HEIGHT / 2))
  .force("collide", forceCollide(40));
