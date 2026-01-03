import WaitlistClient from "./WaitlistClient";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Smoothr</div>
          <a
            href="#waitlist"
            className="rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"
          >
            Get Early Access
          </a>
        </div>

        {/* Hero */}
        <section className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Navigation that avoids dirt roads by default.
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Smoothr prioritizes clean paved roads so you can avoid dirt, gravel,
              rough detours, and dusty surprises.
            </p>

            {/* Waitlist form */}
            <div id="waitlist" className="mt-8 rounded-2xl border border-zinc-200 p-5">
              <p className="text-sm font-medium">Join the beta waitlist</p>
              <p className="mt-1 text-sm text-zinc-600">
                Early users get priority access and founder pricing. No spam.
              </p>

              <WaitlistClient />
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-200 px-3 py-1">Paved-first routing</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Road confidence score</span>
              <span className="rounded-full border border-zinc-200 px-3 py-1">Community reports</span>
            </div>
          </div>

          {/* Right side card */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-lg font-semibold">How it works</h2>
            <ol className="mt-4 space-y-3 text-zinc-700">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-zinc-200 text-sm">
                  1
                </span>
                <span>Enter your destination.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-zinc-200 text-sm">
                  2
                </span>
                <span>Smoothr prioritizes clean paved roads (by default).</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-zinc-200 text-sm">
                  3
                </span>
                <span>Get turn-by-turn directions with fewer dirty surprises.</span>
              </li>
            </ol>

            <div className="mt-8 rounded-2xl bg-white p-5 border border-zinc-200">
              <h3 className="text-sm font-semibold">Built for:</h3>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                <li className="rounded-xl border border-zinc-200 px-3 py-2">EV & Tesla drivers</li>
                <li className="rounded-xl border border-zinc-200 px-3 py-2">Sports / low-clearance cars</li>
                <li className="rounded-xl border border-zinc-200 px-3 py-2">Rental & lease drivers</li>
                <li className="rounded-xl border border-zinc-200 px-3 py-2">Anyone who hates gravel detours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16 border-t border-zinc-200 pt-10">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-medium">Does Smoothr replace Google/Apple Maps?</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Not yet — the early beta focuses on cleaner routing and smarter road choices.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <h3 className="font-medium">How does Smoothr detect dirt roads?</h3>
              <p className="mt-2 text-sm text-zinc-600">
                We combine map data with road surface tags and user reports — and improve over time.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-zinc-200 pt-8 text-sm text-zinc-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Smoothr</span>
            <a className="hover:text-zinc-700" href="mailto:hello@smoothr.app">
              hello@smoothr.app
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
