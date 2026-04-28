export const nodes = [
  { id: "Alice" },
  { id: "Bob" },
  { id: "Carol" },
  { id: "Dave" },
  { id: "Eve" },
  { id: "Frank" },
  { id: "Grace" },
  { id: "Heidi" },
  { id: "Ivan" },
];

export const edges = [
  { source: "Alice", target: "Bob" },
  { source: "Alice", target: "Carol" },
  { source: "Bob", target: "Dave" },
  { source: "Carol", target: "Eve" },
  { source: "Dave", target: "Frank" },
  { source: "Eve", target: "Frank" },
  { source: "Frank", target: "Grace" },
  { source: "Grace", target: "Heidi" },
  { source: "Heidi", target: "Ivan" },
  { source: "Ivan", target: "Alice" },
];
