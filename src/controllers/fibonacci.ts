import { Request, RequestHandler, Response } from "express";
import fs from "fs/promises";
import path from "path";

export const fibonacciGetController = async (
  req: Request<{}, {}, {}, { length?: number }>,
  res: Response,
) => {
  const length = req.query.length;
  let template = await fs.readFile(
    path.join(__dirname, "../template.html"),
    "utf-8",
  );
  template = template.replace("<title></title>", "<title>Fibonacci</title>");
  const nums = Array.from(fibonacciGenerator(length));

  const numberGrid = nums.map((n) => `<p>${n}</p>`);
  const body = `<div class="grid">${numberGrid.join("\n")}</div>`;
  template = template.replace("{{}}", body);
  res.setHeader("Content-Type", "text/html");
  res.send(template);
};

export function* fibonacciGenerator(length = 100) {
  const collector = [0, 1];
  for (let i = 0; i < length; i++) {
    collector.push(collector.reduce((a, b) => a + b));
    yield collector.shift();
  }
}
