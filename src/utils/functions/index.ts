export function pathToCategory(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export function upperCaseOfCategory(name: string | undefined) {
  return name?.replace("for", "For ");
}

export function api(api: string) {
  return `${window.location.origin}/api/${api}`;
}

// export async function getClient() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://feeduraddiction:Vjq1Gfhjkm2qwerty@cluster0.8swm7.mongodb.net/yourtime-cosmetics?retryWrites=true&w=majority"
//   );

//   return client;
// }
