import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Download,
  Music,
  Workflow,
  Sparkles,
  Camera,
  CalendarCheck,
  Clapperboard,
  Monitor,
  ArrowUpRight,
  X,
  Mail,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agapes AI Project" },
      {
        name: "description",
        content:
          "Agapes AI Project — gateway to chat, music, photos, planner, automation, studio and more.",
      },
      { property: "og:title", content: "Agapes AI Project" },
      {
        property: "og:description",
        content: "Gateway to every Agapes service.",
      },
    ],
  }),
  component: Index,
});

type Service = {
  name: string;
  host: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  tagline: string;
  description: string;
};

type Status = "up" | "down" | "unknown";

const STATUS_COLORS: Record<Status, string> = {
  up: "oklch(0.72 0.2 140)",
  down: "oklch(0.72 0.22 25)",
  unknown: "oklch(0.5 0 0)",
};

const services: Service[] = [
  {
    name: "Chat",
    host: "chat.agapes.us",
    icon: MessageCircle,
    gradient: "var(--grad-chat)",
    tagline: "Private AI chat",
    description: "Self-hosted conversations with your favorite AI models — fast, private, and always available.",
  },
  {
    name: "Downloads",
    host: "dl.agapes.us",
    icon: Download,
    gradient: "var(--grad-dl)",
    tagline: "Files & media",
    description: "Personal download hub for shared files, archives, and media drops.",
  },
  {
    name: "Music",
    host: "music.agapes.us",
    icon: Music,
    gradient: "var(--grad-music)",
    tagline: "Your library, streamed",
    description: "Stream your personal music collection anywhere with curated playlists and albums.",
  },
  {
    name: "n8n",
    host: "n8n.agapes.us",
    icon: Workflow,
    gradient: "var(--grad-n8n)",
    tagline: "Workflow automation",
    description: "Visual automations that connect every service and quietly run in the background.",
  },
  {
    name: "Nosta",
    host: "nosta.agapes.us",
    icon: Sparkles,
    gradient: "var(--grad-nosta)",
    tagline: "Workspace",
    description: "A focused workspace for notes, ideas, and ongoing projects.",
  },
  {
    name: "Photos",
    host: "photo.agapes.us",
    icon: Camera,
    gradient: "var(--grad-photo)",
    tagline: "Memories gallery",
    description: "Browse, share, and back up your photo library with full-resolution originals.",
  },
  {
    name: "Planner",
    host: "planner.agapes.us",
    icon: CalendarCheck,
    gradient: "var(--grad-planner)",
    tagline: "Tasks & calendar",
    description: "Plan the week, track tasks, and keep every commitment in one calm view.",
  },
  {
    name: "Studio",
    host: "studio.agapes.us",
    icon: Clapperboard,
    gradient: "var(--grad-studio)",
    tagline: "Creative studio",
    description: "Editing, rendering, and creative tooling for video and visual work.",
  },
  {
    name: "Remote",
    host: "remote.agapes.us",
    icon: Monitor,
    gradient: "var(--grad-n8n)",
    tagline: "Remote desktop",
    description: "Secure remote access to the home machine from anywhere in the world.",
  },
];

function formatClock(): string {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB");
  const date = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return `${time} · ${date}`;
}

function Index() {
  const count = services.length;
  const [selected, setSelected] = useState<Service | null>(null);
  const [displayedService, setDisplayedService] = useState<Service | null>(null);
  const [centerVisible, setCenterVisible] = useState(true);

  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) { hasMounted.current = true; return; }
    setCenterVisible(false);
    const t = setTimeout(() => {
      setDisplayedService(selected);
      setCenterVisible(true);
    }, 150);
    return () => clearTimeout(t);
  }, [selected]);

  const [clock, setClock] = useState("");

  useEffect(() => {
    setClock(formatClock());
    const id = setInterval(() => setClock(formatClock()), 1000);
    return () => clearInterval(id);
  }, []);

  const [status, setStatus] = useState<Record<string, Status>>(
    Object.fromEntries(services.map((s) => [s.host, "unknown" as Status]))
  );

  useEffect(() => {
    const check = async () => {
      const entries = await Promise.allSettled(
        services.map(async (s): Promise<[string, Status]> => {
          try {
            await fetch(`https://${s.host}`, {
              method: "HEAD",
              signal: AbortSignal.timeout(5000),
              mode: "no-cors",
            });
            return [s.host, "up"];
          } catch {
            return [s.host, "down"];
          }
        })
      );
      setStatus(
        Object.fromEntries(
          entries
            .filter(
              (r): r is PromiseFulfilledResult<[string, Status]> =>
                r.status === "fulfilled"
            )
            .map((r) => r.value)
        )
      );
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
      onClick={() => setSelected(null)}
    >
      {/* Colorful aura background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 size-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--grad-core)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.16_0.04_280/0.9)_75%)]" />
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <h1 className="sr-only">Agapes AI Project</h1>

        <div className="relative aspect-square w-full max-w-[680px]">
          <div className="absolute inset-[8%] animate-spin-cw rounded-full border border-white/10" />
          <div className="absolute inset-[22%] animate-spin-ccw rounded-full border border-white/5" />

          {/* Center core — welcome OR selected service info */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <div
                className="absolute inset-0 -m-6 animate-pulse-glow rounded-full blur-2xl transition-all duration-500"
                style={{
                  background: displayedService
                    ? displayedService.gradient
                    : "var(--grad-core)",
                }}
              />
              <div
                className="relative flex size-44 items-center justify-center rounded-full p-1 shadow-2xl transition-all duration-500 sm:size-52"
                style={{
                  background: displayedService
                    ? displayedService.gradient
                    : "var(--grad-core)",
                }}
              >
                <div className="flex size-full flex-col items-center justify-center rounded-full bg-background/85 px-5 text-center backdrop-blur-md">
                  <div
                    className={`flex size-full flex-col items-center justify-center transition-opacity duration-150 ${
                      centerVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {displayedService ? (
                      <>
                        <button
                          onClick={() => setSelected(null)}
                          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                          aria-label="Close"
                        >
                          <X className="size-3.5" />
                        </button>
                        <displayedService.icon className="size-6 text-white" />
                        <span className="mt-1.5 text-base font-bold leading-tight">
                          {displayedService.name}
                        </span>
                        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {displayedService.tagline}
                        </span>
                        <p className="mt-1.5 line-clamp-3 text-[11px] leading-snug text-foreground/80">
                          {displayedService.description}
                        </p>
                        <a
                          href={`https://${displayedService.host}`}
                          className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-foreground transition-colors hover:bg-white/20"
                        >
                          Open <ArrowUpRight className="size-3" />
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                          Welcome to
                        </span>
                        <span className="mt-1 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-xl font-bold leading-tight tracking-tight text-transparent">
                          Agapes Ai
                        </span>
                        <span className="mt-2 text-[10px] text-muted-foreground">
                          Tap a planet
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting services */}
          {services.map((s, i) => {
            const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 42;
            const y = 50 + Math.sin(angle) * 42;
            const Icon = s.icon;
            const isActive = selected?.host === s.host;
            const isDimmed = selected && !isActive;
            const svcStatus = status[s.host] ?? "unknown";
            return (
              <button
                key={s.host}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(isActive ? null : s);
                }}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isDimmed ? "scale-90 opacity-40" : "opacity-100"
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={s.name}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`relative flex size-14 items-center justify-center rounded-2xl p-[2px] shadow-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:size-16 ${
                      isActive ? "-translate-y-1 scale-110" : ""
                    }`}
                    style={{ background: s.gradient }}
                  >
                    <div
                      className={`absolute inset-0 -z-10 rounded-2xl blur-xl transition-opacity ${
                        isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                      }`}
                      style={{ background: s.gradient }}
                    />
                    <div className="flex size-full items-center justify-center rounded-[14px] bg-background/70 backdrop-blur-md">
                      <Icon className="size-5 text-white sm:size-6" />
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-background"
                      style={{ background: STATUS_COLORS[svcStatus] }}
                      title={svcStatus}
                    />
                  </div>
                  <span className="rounded-full bg-background/70 px-2 py-0.5 text-[10px] font-medium text-foreground/90 backdrop-blur-md sm:text-xs">
                    {s.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs tabular-nums text-muted-foreground">
          {clock}
        </p>

        <div className="mt-3 opacity-60">
          <img
            src="https://hits.sh/agapes.us.svg"
            alt="visitor count"
            height="20"
            width="88"
          />
        </div>

        <footer className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
          <a
            href="mailto:ali_venus@yahoo.com"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <Mail className="size-3" />
            ali_venus@yahoo.com
          </a>
          <span>·</span>
          <a
            href="https://t.me/agapes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            <Send className="size-3" />
            @agapes
          </a>
        </footer>
      </main>
    </div>
  );
}
