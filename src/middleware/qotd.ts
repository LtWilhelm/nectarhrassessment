import { RequestHandler } from "express";

// Custom middleware that appends a random quote to the headers
export const QOTDMiddleware: RequestHandler = async (_, res, next) => {
  const quoteRes = await fetch("https://type.fit/api/quotes");
  const quoteArr: {
    text: string;
    author: string;
  }[] = await quoteRes.json();
  const random = quoteArr[Math.floor(Math.random() * quoteArr.length)];

  res.setHeader(
    "x-qotd",
    random.text,
  );
  res.setHeader(
    "x-qotd-attr",
    random.author,
  );

  next();
};
