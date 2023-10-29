import { getMockReq, getMockRes } from "@jest-mock/express";
import { weatherGetController } from "./weather";

const { res, next, clearMockRes } = getMockRes();

beforeEach(() => {
  clearMockRes();
});

describe("Weather API Controller", () => {
  it("should return 400 if no query is provided", async () => {
    const req = getMockReq();
    await weatherGetController(req, res, next);

    expect(res.sendStatus).toBeCalledWith(400);
  });

  it("should respond with an object containing forecast data", async () => {
    const req = getMockReq({
      params: {
        state: "UT",
      },
    });

    await weatherGetController(req, res, next);

    expect(res.json).toBeCalled();
  });
});
