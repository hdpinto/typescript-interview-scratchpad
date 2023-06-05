import "jest";

import { doSomething } from ".";

describe("doSomething", () => {
  it("should output to the console", () => {
    const spy = jest.spyOn(console, "log");
    doSomething("testing");
    expect(spy).toHaveBeenCalledWith("I am currently testing");
  });
});
