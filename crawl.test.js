import { normalizeUrl } from "./crawl";
import { test, expect } from "@jest/globals";

test("normalizeUrl", () => {
  const input = "";
  const actual = normalizeUrl(input);
  const expected = "";
  expect(actual).toEqual(expected);
});
