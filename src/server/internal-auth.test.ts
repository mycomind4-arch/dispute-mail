import { describe, expect, it, vi } from "vitest";
import { requireInternalServiceKey } from "./internal-auth";

describe("requireInternalServiceKey", () => {
  it("fails closed when the server key is not configured", () => {
    const previous = process.env.DISPUTE_MAIL_INTERNAL_API_KEY;
    delete process.env.DISPUTE_MAIL_INTERNAL_API_KEY;
    expect(() => requireInternalServiceKey(new Request("https://example.test"))).toThrow();
    if (previous) process.env.DISPUTE_MAIL_INTERNAL_API_KEY = previous;
    else delete process.env.DISPUTE_MAIL_INTERNAL_API_KEY;
  });

  it("rejects missing and incorrect credentials", () => {
    process.env.DISPUTE_MAIL_INTERNAL_API_KEY = "expected-key";
    expect(() => requireInternalServiceKey(new Request("https://example.test"))).toThrow();
    expect(() => requireInternalServiceKey(new Request("https://example.test", { headers: { authorization: "Bearer wrong-key" } }))).toThrow();
  });

  it("accepts the configured bearer credential", () => {
    process.env.DISPUTE_MAIL_INTERNAL_API_KEY = "expected-key";
    expect(() => requireInternalServiceKey(new Request("https://example.test", { headers: { authorization: "Bearer expected-key" } }))).not.toThrow();
    vi.unstubAllEnvs();
  });
});
