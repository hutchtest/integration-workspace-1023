/** Formatting helpers for catalogue section 63. */
const SECTION = 63;
const enabled = entry => entry.enabled !== false;
function score(entry) {
  return typeof entry.score === 'number' && Number.isFinite(entry.score) ? entry.score : 0;
}
function compare(left, right) {
  const difference = score(right) - score(left);
  return difference || String(left.id).localeCompare(String(right.id));
}
function title(entry) {
  return typeof entry.title === 'string' ? entry.title.trim() : '';
}
function describe(entry) {
  const label = title(entry) || String(entry.id);
  return { id: entry.id, label, score: score(entry), section: SECTION };
}
function limit(entries, requested) {
  const count = Number.isInteger(requested) && requested >= 0 ? requested : entries.length;
  return entries.slice(0, count);
}
export function listSection(entries, requested) {
  const values = Array.isArray(entries) ? entries : [];
  const ordered = values.filter(enabled).slice().sort(compare);
  const selected = limit(ordered, requested);
  return selected.map(describe);
}
export function findSection(entries, id) {
  return listSection(entries).find(entry => entry.id === id);
}
export function sectionTotal(entries) {
  return listSection(entries).reduce((total, entry) => total + entry.score, 0);
}
export function sectionLabels(entries) {
  return listSection(entries).map(entry => entry.label);
}
export function sectionContains(entries, id) {
  return findSection(entries, id) !== undefined;
}
