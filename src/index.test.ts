import { doSomething, multiply } from ".";
import { vi } from "vitest";

describe("doSomething", () => {
  it("should output to the console", () => {
    const spy = vi.spyOn(console, "log");
    doSomething("testing");
    expect(spy).toHaveBeenCalledWith("I am currently testing");
  });
});

describe("multiply", () => {
  it("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
