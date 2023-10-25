import { reversePostController } from "./reverse";
import { getMockReq, getMockRes } from "@jest-mock/express";

const { res, next, clearMockRes } = getMockRes();

beforeEach(() => {
  clearMockRes();
});

// I figured it best to have two test cases for whether a body is provided or not
describe("Object Reverse Controller", () => {
  it("should return 400 if no body is provided", () => {
    const req = getMockReq();
    reversePostController(req, res, next);

    expect(res.status).toBeCalledWith(400);
  });

  it("should respond with an object in the body with the keys reversed", () => {
    const req = getMockReq({
      body: {
        "reverseMe": "prettyPlease",
      },
    });

    reversePostController(req, res, next);

    expect(res.json).toBeCalledWith(
      expect.objectContaining({
        "eMesrever": "esaelPytterp",
      }),
    );
  });
});
