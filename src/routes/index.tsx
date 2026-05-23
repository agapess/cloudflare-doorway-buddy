import { createFileRoute } from "@tanstack/react-router";
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
};

const services: Service[] = [
  { name: "Chat", host: "chat.agapes.us", icon: MessageCircle, gradient: "var(--grad-chat)" },
  { name: "Downloads", host: "dl.agapes.us", icon: Download, gradient: "var(--grad-dl)" },
  { name: "Music", host: "music.agapes.us", icon: Music, gradient: "var(--grad-music)" },
  { name: "n8n", host: "n8n.agapes.us", icon: Workflow, gradient: "var(--grad-n8n)" },
  { name: "Nosta", host: "nosta.agapes.us", icon: Sparkles, gradient: "var(--grad-nosta)" },
  { name: "Photos", host: "photo.agapes.us", icon: Camera, gradient: "var(--grad-photo)" },
  { name: "Planner", host: "planner.agapes.us", icon: CalendarCheck, gradient: "var(--grad-planner)" },
  { name: "Studio", host: "studio.agapes.us", icon: Clapperboard, gradient: "var(--grad-studio)" },
];

function Index() {
  const count = services.length;

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Colorful aura background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[120vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--grad-core)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,oklch(0.16_0.04_280/0.9)_75%)]" />
      </div>

      <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <h1 className="sr-only">Agapes AI Project</h1>

        {/* Orbit stage */}
        <div className="relative aspect-square w-full max-w-[680px]">
          {/* Orbit rings */}
          <div className="absolute inset-[8%] rounded-full border border-white/10" />
          <div className="absolute inset-[22%] rounded-full border border-white/5" />

          {/* Center core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div
                className="absolute inset-0 -m-6 rounded-full opacity-70 blur-2xl"
                style={{ background: "var(--grad-core)" }}
              />
              <div
                className="relative flex size-36 flex-col items-center justify-center rounded-full p-1 shadow-2xl sm:size-44"
                style={{ background: "var(--grad-core)" }}
              >
                <div className="flex size-full flex-col items-center justify-center rounded-full bg-background/80 px-4 text-center backdrop-blur-md">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Welcome to
                  </span>
                  <span className="mt-1 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-lg font-bold leading-tight tracking-tight text-transparent sm:text-xl">
                    Agapes AI
                    <br />
                    Project
                  </span>
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
            return (
              <a
                key={s.host}
                href={`https://${s.host}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="relative flex size-16 items-center justify-center rounded-2xl p-[2px] shadow-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:size-20"
                    style={{ background: s.gradient }}
                  >
                    <div
                      className="absolute inset-0 -z-10 rounded-2xl opacity-60 blur-xl transition-opacity group-hover:opacity-100"
                      style={{ background: s.gradient }}
                    />
                    <div className="flex size-full items-center justify-center rounded-[14px] bg-background/70 backdrop-blur-md">
                      <Icon className="size-6 text-white sm:size-7" />
                    </div>
                  </div>
                  <span className="rounded-full bg-background/70 px-2.5 py-0.5 text-xs font-medium text-foreground/90 backdrop-blur-md">
                    {s.name}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Tap a planet to launch · agapes.us
        </p>
      </main>
    </div>
  );
}
