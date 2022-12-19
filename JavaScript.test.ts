import { JavaScriptGreeter } from "./JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("inherits the greeting property from parent", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Howdy"
    );
    expect(newJavaScriptGreeter.greeting).toBe("Howdy");
  });
  test("the greet method was properly overwritten", () => {
    const newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "Howdy"
    );
    expect(newJavaScriptGreeter.greet("Mitch")).toBe(
      "console.log('Howdy, Mitch!')"
    );
  });
});