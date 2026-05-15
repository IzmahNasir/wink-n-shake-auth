import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Sentinel · Biometric MFA over real-time WebSocket" },
      {
        name: "description",
        content:
          "Every login confirmed with Face ID or fingerprint on your trusted phone, pushed in real time over a secure channel.",
      },
    ],
  }),
});

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" />

      {/* HEADER */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold tracking-wide">
          Sentinel
        </h1>

        <nav className="flex items-center gap-2">
          <Link
            to="/login"
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto flex max-w-6xl justify-center px-6 pt-20 pb-28 text-center">
        <div className="max-w-3xl">
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
            Every login,
            <br />
            <span className="text-primary">
              approved by your face.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            A web sign-in. A push to your phone. Face ID or fingerprint to
            approve. The whole handshake takes about three seconds and stolen
            passwords go nowhere.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-primary transition hover:opacity-95"
            >
              Create an account
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/login"
              className="rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium transition hover:bg-surface-2"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Steps to Follow
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Step
            title="Web login"
            body="User submits credentials on the web app. Backend validates and issues a session-pending state."
          />

          <Step
            title="Realtime push"
            body="A signed challenge is pushed to the registered phone over a persistent WebSocket channel."
          />

          <Step
            title="Biometric approval"
            body="Phone surfaces the request and prompts Face ID or fingerprint via WebAuthn."
          />

          <Step
            title="Access granted"
            body="Server verifies the response, completes the session, and the web app moves on instantly."
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Features
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            title="Possession + biometric"
            body="Login requires both a paired device and a successful biometric — credentials alone are not enough."
          />

          <Feature
            title="No SMS, no codes"
            body="No 6-digit codes to mistype. No SIM-swap risk. The approval is the second factor."
          />

          <Feature
            title="Phishing resistant"
            body="WebAuthn user-verification is bound to the device's secure enclave — cannot be replayed remotely."
          />
        </div>
      </section>
    </div>
  );
}

function Step({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-5 transition hover:bg-surface-2">
      <h3 className="font-display text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {body}
      </p>
    </div>
  );
}

function Feature({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6">
      <h3 className="font-display text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {body}
      </p>
    </div>
  );
}