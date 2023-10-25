import { RequestHandler } from "express";

export const reversePostController: RequestHandler = (req, res) => {
  // If no body is provided or is empty, reject the request with code 400
  if (!req.body || !Object.keys(req.body).length) return res.sendStatus(400);
  // Create new object to hold new keys and values
  const reversed: Record<string, string> = {};

  // loop over object entries of req.body
  for (const [key, value] of Object.entries<string>(req.body)) {
    // reverse the key and value by splitting them into an array and using the native Array.reverse method and then joining it back into a string
    //  - You could do this by looping over the strings from the end and adding them to another string, thus eliminating the (miniscule) overhead of split, reverse, and join
    const keyReversed = key.split("").reverse().join("");
    const valueReversed = value.split("").reverse().join("");

    // assign the newly reversed value to the reversed key
    reversed[keyReversed] = valueReversed;
  }

  // respond with the object containing all the reversed items
  res.json(reversed);
};
