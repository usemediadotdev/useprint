import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-14 sm:px-10 lg:px-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-fd-border/70 bg-[linear-gradient(135deg,rgba(244,239,228,0.95),rgba(251,247,240,0.92)_42%,rgba(228,240,238,0.9))] px-6 py-10 shadow-sm sm:px-10 sm:py-14">
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.18),transparent)]" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-fd-muted-foreground">
              React documents for HTML-first PDF workflows
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-fd-foreground sm:text-5xl">
              Build printable documents as React components, then render them to HTML.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg">
              Useprint gives you page-aware document primitives, HTML rendering, Tailwind support,
              and a local preview workflow. Send the resulting HTML through{' '}
              <code>useprint-js</code> for the recommended hosted PDF flow, or plug it into your
              own Chromium pipeline.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="rounded-full bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background transition hover:opacity-90"
              >
                Open docs
              </Link>
              <Link
                href="/docs/getting-started/installation"
                className="rounded-full border border-fd-border bg-fd-background/80 px-5 py-2.5 text-sm font-medium text-fd-foreground transition hover:bg-fd-accent"
              >
                Start with the combo
              </Link>
            </div>
          </div>
          <div className="grid gap-3 rounded-[1.5rem] border border-fd-border/70 bg-fd-background/70 p-5 text-sm backdrop-blur">
            <div>
              <p className="font-medium text-fd-foreground">Recommended starter</p>
              <p className="mt-1 text-fd-muted-foreground">
                <code>@useprint/components</code> + <code>@useprint/cli</code>
              </p>
            </div>
            <div>
              <p className="font-medium text-fd-foreground">Recommended production path</p>
              <p className="mt-1 text-fd-muted-foreground">
                Render React to HTML, then hand it to <code>useprint-js</code>.
              </p>
            </div>
            <div>
              <p className="font-medium text-fd-foreground">Alternative</p>
              <p className="mt-1 text-fd-muted-foreground">
                Keep the HTML output and drive Chromium or Playwright yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link
          href="/docs/getting-started/your-first-document"
          className="rounded-[1.5rem] border border-fd-border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:bg-fd-accent"
        >
          <p className="text-sm font-medium text-fd-foreground">Author in React</p>
          <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
            Compose a document with <code>Document</code>, <code>Page</code>, and friends.
          </p>
        </Link>
        <Link
          href="/docs/packages/render"
          className="rounded-[1.5rem] border border-fd-border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:bg-fd-accent"
        >
          <p className="text-sm font-medium text-fd-foreground">Render to HTML</p>
          <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
            Use <code>@useprint/render</code> to turn React trees into printable markup.
          </p>
        </Link>
        <Link
          href="/docs/integrations/useprint-js"
          className="rounded-[1.5rem] border border-fd-border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:bg-fd-accent"
        >
          <p className="text-sm font-medium text-fd-foreground">Ship PDFs</p>
          <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
            Send React or HTML through <code>useprint-js</code>, or bring your own browser engine.
          </p>
        </Link>
      </section>
    </main>
  );
}
