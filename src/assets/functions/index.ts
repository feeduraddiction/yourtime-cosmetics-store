export function pathToCategory(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export function upperCaseOfCategory(name: string) {
  return name.replace("for", "For ");
}

export function updateCart(username: string, term: number, goodID: string) {
  return fetch(api("updateCart"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, term, goodID }),
  });
}

export function removeGood(username: string, goodID: string) {
  return fetch(api("removeGood"), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      goodID,
    }),
  });
}

export function api(api: string) {
  return `${window.location.origin}/api/${api}`;
}
