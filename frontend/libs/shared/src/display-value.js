/** Produce display values by recursively flattening scalar tuples, including values nested in collection tuples. */
export function displayValue(input) {
  if (Array.isArray(input) && input.length === 2 && ['text', 'integer', 'boolean'].includes(input[0])) return input[1];
  if (Array.isArray(input)) return input.map(displayValue);
  if (input && typeof input === 'object') return Object.fromEntries(Object.entries(input).map(([name,value]) => [name,displayValue(value)]));
  return input;
}
