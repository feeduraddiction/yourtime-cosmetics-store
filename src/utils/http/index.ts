import { api } from "../functions";

export function updateCart(username: string, term: number, goodID: string) {
    return fetch(api("updateCart"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, term, goodID }),
    });
  }
  
  export function insertGoodCart(username: string, term: number, good: {}) {
    return fetch(api("insertGoodCart"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        good,
        term,
      }),
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