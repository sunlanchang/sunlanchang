import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start/server";

// Prerendered pages are served from static assets before this handler
// runs; it only answers for anything that was not prerendered.
const appFetch = createStartHandler(defaultStreamHandler);

export default {
  fetch(request: Request) {
    return appFetch(request);
  },
} satisfies ExportedHandler;
