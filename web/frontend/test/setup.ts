import "@shopify/react-testing/matchers";

import "vi-fetch/setup";
import { mockFetch } from "vi-fetch";
import { beforeEach } from "vitest";

beforeEach(() => {
  mockFetch.clearAll();
});
