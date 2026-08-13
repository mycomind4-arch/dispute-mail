import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Home, ArrowRight, FileWarning } from "lucide-react";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dispute Mail — Dispute credit errors, debt, and billing issues with confidence" },
      { name: "description", content: "Guided workflows to prepare, review, send, and track dispute letters for credit report errors, debt validation, billing errors, and unauthorized charges. Physical mail with proof of delivery. Not a law firm — you control the facts." },
      { name: "robots", content: "index,follow" },
      { name: "theme-color", content: "#0f766e" },
      { property: "og:title", content: "Dispute Mail — Dispute credit errors, debt, and billing issues with confidence" },
      { property: "og:description", content: "Prepare, review, send, track, and keep a record of your dispute letters." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dispute Mail" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dispute Mail — Prepare and send dispute letters" },
      { name: "twitter:description", content: "Guided workflows, physical mail with tracking, and proof of delivery." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootShell,
  component: RootComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

function NotFoundPage() {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <section className="py-20 md:py-32">
        <div className="container max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50">
            <FileWarning size={36} className="text-teal-300" />
          </div>
          <h1 className="mt-8 text-6xl font-bold text-teal-700" style={{ fontFamily: "var(--font-serif)" }}>404</h1>
          <h2 className="mt-2 text-xl font-semibold text-teal-600">This item is being disputed elsewhere</h2>
          <p className="mt-3 text-sm text-slate-400">The page you're looking for doesn't exist or has moved. Let's get you back on track.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary"><Home size={16} /> Back to home</Link>
            <Link to="/workflows/credit-report" className="btn-rose">Start a dispute <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
