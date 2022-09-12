type Combinable = string | number;
const concat = (n1: Combinable, n2: Combinable) =>
  typeof n1 === "number" && typeof n2 === "number"
    ? Number(n1 + n2)
    : typeof n1 === "number" && typeof n2 === "number"
    ? String(n1 + n2)
    : undefined;
