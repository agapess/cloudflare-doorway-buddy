import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Agapes Ai" },
      {
        name: "description",
        content:
          "Agapes Ai privacy policy. Learn how we handle your data across our AI services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://agapes.us/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 size-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--grad-core)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.16_0.04_280/0.9)_75%)]" />
      </div>

      <main className="relative mx-auto max-w-2xl px-6 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to portal
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <Shield className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Privacy Policy</h1>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p className="text-foreground/90">
            At Agapes Ai, your privacy matters. This policy explains what data we collect,
            how we use it, and how we keep it safe across all our AI-powered services.
          </p>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              We collect minimal data necessary to operate our services. This may include:
              service usage logs, anonymous analytics, and any content you voluntarily submit
              to our AI tools (such as prompts, images, or chat messages).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">2. How We Use Your Data</h2>
            <p>
              Your data is used solely to provide and improve our AI services. We do not sell
              your personal information to third parties. AI-generated outputs belong to you.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">3. Data Storage & Security</h2>
            <p>
              All services are self-hosted on our own infrastructure. We use industry-standard
              encryption and security practices to protect your data from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">4. Third-Party Services</h2>
            <p>
              Some AI models may process requests through external APIs. We only use reputable
              providers and never share your data beyond what is required for the service to function.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">5. Cookies & Tracking</h2>
            <p>
              We use minimal cookies for basic functionality. We do not employ invasive tracking
              or profiling technologies. Visitor counts are anonymous.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. Contact us
              at any time using the email below.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">7. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, reach out at:{" "}
              <a
                href="mailto:ali_venus@yahoo.com"
                className="inline-flex items-center gap-1 text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                <Mail className="size-3" />
                ali_venus@yahoo.com
              </a>
            </p>
          </section>

          <p className="pt-4 text-xs text-muted-foreground/60">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </main>
    </div>
  );
}
