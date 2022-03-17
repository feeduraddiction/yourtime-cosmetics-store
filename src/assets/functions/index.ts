export function pathToCategory(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export function upperCaseOfCategory(name: string) {
  return name.replace("for", "For ");
}
