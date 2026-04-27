export const nodes = [
  { id: "Alice", x: 300, y: 150 },
  { id: "Bob", x: 100, y: 300 },
  { id: "Carol", x: 500, y: 300 },
  { id: "Dave", x: 150, y: 500 },
  { id: "Eve", x: 450, y: 500 },
];

export const edges = [
  { source: "Alice", target: "Bob" },
  { source: "Alice", target: "Carol" },
  { source: "Bob", target: "Dave" },
  { source: "Carol", target: "Eve" },
  { source: "Dave", target: "Eve" },
];
