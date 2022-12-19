import { Greeter } from "./greeter";

describe("greeter class", () => {
    test("greeting property is properly set by the constructor", () => {
      const newGreeter: Greeter = new Greeter("Howdy");
      expect(newGreeter.greeting).toBe("Howdy");
    });
    test("the greet method properly returns a sentence", () => {
      const newGreeter: Greeter = new Greeter("Howdy");
      expect(newGreeter.greet("Bob")).toBe("Howdy, Bob!");
    });
  });