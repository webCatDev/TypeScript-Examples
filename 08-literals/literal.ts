const sumNumbers = (
  n1: number,
  n2: number,
  resultType: "as-number" | "as-text" 
) => (resultType === "as-number" ? n1 + n2 : String(n1 + n2));

sumNumbers(2,3, 'as-text')