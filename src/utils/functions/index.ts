import { MongoClient } from "mongodb";

export function pathToCategory(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export function upperCaseOfCategory(name: string | undefined) {
  return name?.replace("for", "For ");
}

export function api(api: string) {
  return `${window.location.origin}/api/${api}`;
}
