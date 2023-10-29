import { fibonacciGenerator } from "./fibonacci";

describe("Fibonacci Generator", () => {
  it("should generate the specified length or default to 100", () => {
    const length = 1000;
    const fib = Array.from(fibonacciGenerator(1000));
    expect(fib.length).toBe(length);
    const fib2 = Array.from(fibonacciGenerator());
    expect(fib2.length).toBe(100);
  });
  it("should start with the correct sequence for Fibonacci", () => {
    const fib = Array.from(fibonacciGenerator(10));

    expect(fib).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
