import { RequestHandler } from "express";
import { getForecastForState } from "../lib/WeatherServices";
export const weatherGetController: RequestHandler = async (req, res) => {
  if (!req.params.state) {
    return res.sendStatus(400);
  }

  try {
    const forecast = await getForecastForState(req.params.state);
    res.json(forecast);
  } catch (error) {
    res.status(502).send(error);
  }
};
