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
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "agapes.us — Directory" },
      {
        name: "description",
        content:
          "Quick access to all agapes.us services: chat, downloads, music, automation, photos, planner, studio, and more.",
      },
      { property: "og:title", content: "agapes.us — Directory" },
      {
        property: "og:description",
        content: "Quick access to all agapes.us services.",
      },
    ],
  }),
  component: Index,
});

type Service = {
  name: string;
  host: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const services: Service[] = [
  {
    name: "Chat",
    host: "chat.agapes.us",
    description: "Conversations & AI assistant",
    icon: MessageCircle,
  },
  {
    name: "Downloads",
    host: "dl.agapes.us",
    description: "File downloads & shared media",
    icon: Download,
  },
  {
    name: "Music",
    host: "music.agapes.us",
    description: "Personal music library",
    icon: Music,
  },
  {
    name: "n8n",
    host: "n8n.agapes.us",
    description: "Workflow automation",
    icon: Workflow,
  },
  {
    name: "Nosta",
    host: "nosta.agapes.us",
    description: "Nosta workspace",
    icon: Sparkles,
  },
  {
    name: "Photos",
    host: "photo.agapes.us",
    description: "Photo gallery & memories",
    icon: Camera,
  },
  {
    name: "Planner",
    host: "planner.agapes.us",
    description: "Tasks & scheduling",
    icon: CalendarCheck,
  },
  {
    name: "Studio",
    host: "studio.agapes.us",
    description: "Creative studio tools",
    icon: Clapperboard,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <header className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            agapes.us
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Welcome home.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-balance text-base text-muted-foreground sm:text-lg">
            A directory of everything running under agapes.us. Pick a service to continue.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.host}>
                <a
                  href={`https://${s.host}`}
                  className="group relative flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold tracking-tight">{s.name}</h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">{s.description}</p>
                  </div>
                  <p className="mt-auto pt-2 font-mono text-xs text-muted-foreground/70">
                    {s.host}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>

        <footer className="mt-20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} agapes.us
        </footer>
      </main>
    </div>
  );
}
