import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { site } from "#/content/site";
import appCss from "#/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sunlanchang.com/" },
    ],
    links: [
      { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
      { rel: "canonical", href: "https://sunlanchang.com/" },
      { rel: "stylesheet", href: appCss },
    ],
    // Marks the document as JS-capable before first paint so the
    // scroll-reveal CSS can hide sections without a no-JS fallback gap.
    scripts: [{ children: "document.documentElement.classList.add('js')" }],
  }),
  component: () => <Outlet />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    // The head script adds a class to <html> before hydration; suppress
    // the (dev-only) attribute mismatch warning that would cause.
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
