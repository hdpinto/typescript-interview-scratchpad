import { colourizer } from "test_helpers/colourizer";

const ink = colourizer();

export const assert = (expected: unknown, actual: unknown, description = "") => {
  if (expected === actual) {
    console.log(ink.green("\u2713 PASS: ") + description);
    return;
  }
  console.log(ink.red("\u2715 FAIL: ") + description);
  console.log("Expected: ", expected);
  console.log("Actual: ", actual);
  throw new Error(`test failed: ${description}`);
};

