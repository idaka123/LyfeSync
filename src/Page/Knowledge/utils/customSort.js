import Alphabet from "./alphabet";
import calculateLength from "../utils/podcastLengthData";
export const customStringSort = (a, b) => {
  const stringA = a.toLowerCase();
  const stringB = b.toLowerCase();
  const stringLength = Math.min(stringA.length, stringB.length);
  for (let i = 0; i <= stringLength; ++i) {
    return (Alphabet[stringA[i]] - Alphabet[stringB[i]])
  }
}

export const customNumberSort = (a, b) => {
  return calculateLength(a) - calculateLength(b);
}