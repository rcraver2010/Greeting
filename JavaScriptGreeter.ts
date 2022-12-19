import {Greeter} from "./greeter";

export class JavaScriptGreeter extends Greeter {
    constructor(newGreeting: string) {
      super(newGreeting);
    }
    greet(name: string): string {
      return `console.log('${super.greet(name)}')`;
    }
  }