import { getMockReq, getMockRes } from "@jest-mock/express";
import { QOTDMiddleware } from "./qotd";

const { res, next, clearMockRes } = getMockRes();

beforeEach(() => {
  clearMockRes();
});

describe("QOTD Middleware", () => {
  // This test always fails because the mock doesn't respect headers, but this is the test I would write otherwise
  it("should set the x-qotd and x-qotd-attr headers", async () => {
    const req = getMockReq();
    await QOTDMiddleware(req, res, next);
    expect(res.getHeader("X-Qotd")).toBeTruthy();
    expect(res.getHeader("X-Qotd-Attr")).toBeTruthy();
  });
  it("should call next", async () => {
    const req = getMockReq();
    await QOTDMiddleware(req, res, next);
    expect(next).toBeCalled();
  });
});
