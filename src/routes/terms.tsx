import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Agapes Ai" },
      {
        name: "description",
        content:
          "Agapes Ai terms of use. Rules and guidelines for using our AI-powered services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://agapes.us/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
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
          <FileText className="size-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Terms of Use</h1>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p className="text-foreground/90">
            Welcome to Agapes Ai. By using any of our AI-powered services, you agree to these terms.
            Please read them carefully before accessing our tools.
          </p>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">1. Acceptable Use</h2>
            <p>
              Our AI services are provided for lawful and creative purposes only. You may not use them
              to generate harmful, illegal, deceptive, or abusive content. This includes spam,
              malware, harassment, impersonation, or any material that violates applicable laws.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">2. AI-Generated Content</h2>
            <p>
              You retain ownership of content you create using our AI tools. However, AI-generated outputs
              may not always be accurate or original. You are responsible for reviewing and verifying
              any content before using it commercially or publicly.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">3. Service Availability</h2>
            <p>
              We strive to keep all services online, but uptime is not guaranteed. Maintenance,
              updates, or unforeseen issues may cause temporary interruptions. We reserve the right
              to modify or discontinue any service without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">4. No Warranty</h2>
            <p>
              All services are provided &quot;as is&quot; without warranties of any kind. We are not liable
              for any damages arising from the use or inability to use our AI tools, including but
              not limited to data loss, business interruption, or reliance on AI-generated advice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">5. Account & Access</h2>
            <p>
              Some services may require access credentials. You are responsible for maintaining the
              confidentiality of your access information. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">6. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of our services after changes
              constitutes acceptance of the new terms. Check this page periodically for updates.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-foreground">7. Contact</h2>
            <p>
              Questions about these terms? Reach out at:{" "}
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
