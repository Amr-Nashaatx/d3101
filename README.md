# D3 Practice Visualizations

This repository is a collection of small Vite + D3 practice projects. Each branch contains a different visualization experiment.

## Branches

| Branch | What's inside | Brief description |
| --- | --- | --- |
| `master` | Planet scatter plot | A zoomable and pannable scatter plot of planets, using distance from the sun on one axis and planet size on the other. Circles, labels, axes, radius scaling, color scaling, and zoom-rescaled axes are included. |
| `graph` | Manual graph layout | A zoomable and pannable node-link graph with fixed node coordinates. Nodes can be dragged, and their connected edges update as they move. |
| `force-directed-graph` | Force-directed graph | A force simulation graph where D3 positions connected nodes using link, charge, center, and collision forces. Nodes can be dragged, and zoom/pan works around the graph interaction. |

## Current branch

`force-directed-graph` contains the force-directed graph version. The app defines a small social-style network in `src/data.js`, builds the D3 force simulation in `src/foceSimulation.js`, renders nodes/links/labels in `src/render.js`, and separates drag and zoom behavior into `src/drag.js` and `src/zoom.js`.

This repo is just for practice.

## Run locally

```bash
npm install
npm run dev
```
