/** Public status-board data. Edit here — UI renders from this. */
export const stats = [
  { value: "4", label: "AI Units" },
  { value: "2", label: "MCP Providers" },
  { value: "1", label: "Shared Memory" },
  { value: "∞", label: "Skills Growing" },
];

export const roster = [
  {
    code: "UNIT-01",
    name: "JARVIS",
    role: "Flagship Agent",
    status: "live",
    statusLabel: "Live",
    blurb:
      "The primary brain. A pragmatic senior-engineer agent running on Hermes, handling coding, systems, research and day-to-day automation. Verifies its own work with real tool output — plans dressed as progress don't count.",
    chips: ["Hermes Core", "Claude MCP", "Server-hosted"],
  },
  {
    code: "UNIT-02",
    name: "EDITH",
    role: "Knowledge Agent",
    status: "live",
    statusLabel: "Live",
    blurb:
      "A dedicated long-memory unit with its own profile, chat interface and always-on service. Continuously fed a curated knowledge base and tuned for recall and legacy context rather than hands-on system work.",
    chips: ["Own Profile", "Dedicated Bot", "Knowledge Base"],
  },
  {
    code: "UNIT-03",
    name: "FRIDAY",
    role: "Mobile Workstation",
    status: "beta",
    statusLabel: "Edge Node",
    blurb:
      "A remote worker node on a secure private mesh. Extends the roster onto a portable machine for on-device file, shell and process tasks — invoked deliberately, isolated from the core by design.",
    chips: ["Mesh Network", "Remote Shell", "On-Demand"],
  },
  {
    code: "UNIT-04",
    name: "DUMMY",
    role: "Lab Robotics",
    status: "beta",
    statusLabel: "Hardware",
    blurb:
      "The physical helper of the lab — a real robot integrated through a custom control SDK. Bridges the software roster into the physical world for status, tasking and autonomous routines.",
    chips: ["Robotics SDK", "Physical World", "Autonomous"],
  },
];

export const tracks = [
  {
    id: "hermes",
    title: "Hermes Core",
    provider: "AGENT RUNTIME",
    steps: [
      { state: "done", label: "Shipped", title: "Agent Runtime", detail: "Jarvis live on Hermes with tools, terminal and skills." },
      { state: "done", label: "Shipped", title: "Persistent Memory", detail: "Cross-session memory + holographic fact store online." },
      { state: "done", label: "Shipped", title: "Multi-Unit Profiles", detail: "EDITH split into its own isolated profile + gateway." },
      { state: "active", label: "In Progress", title: "Skill Library", detail: "Growing procedural memory across domains, auto-curated." },
      { state: "planned", label: "Planned", title: "Unified Control Plane", detail: "Single dashboard to observe and command every unit." },
    ],
  },
  {
    id: "claude",
    title: "Claude MCP",
    provider: "ANTHROPIC",
    steps: [
      { state: "done", label: "Shipped", title: "Core Reasoning", detail: "Claude as the primary reasoning engine for Jarvis." },
      { state: "done", label: "Shipped", title: "Tool + Terminal MCP", detail: "Full tool-use: files, shell, browser, vision, delegation." },
      { state: "active", label: "In Progress", title: "Remote Node MCP", detail: "Friday wired in as an opt-in MCP target over the mesh." },
      { state: "active", label: "In Progress", title: "Robotics MCP", detail: "Dummy control surfaced through a custom SDK bridge." },
      { state: "planned", label: "Planned", title: "Sub-Agent Fleets", detail: "Parallel Claude sub-agents for isolated workstreams." },
    ],
  },
  {
    id: "grok",
    title: "Grok MCP",
    provider: "xAI",
    steps: [
      { state: "done", label: "Shipped", title: "X / Live Search", detail: "Real-time X search + web signal via Grok tools." },
      { state: "active", label: "In Progress", title: "Second-Opinion Engine", detail: "Grok as a cross-check reasoner alongside Claude." },
      { state: "planned", label: "Planned", title: "Realtime Feeds MCP", detail: "Streaming market/news signals into the roster." },
      { state: "planned", label: "Planned", title: "Vision + Media MCP", detail: "Grok vision for image/video understanding tasks." },
      { state: "planned", label: "Planned", title: "Model Routing", detail: "Auto-route tasks to Claude or Grok by strength." },
    ],
  },
];

export const stack = [
  { n: "01", title: "Hermes Runtime", detail: "The agent framework hosting every unit — tools, terminal, skills and scheduling in one loop." },
  { n: "02", title: "Claude + Grok", detail: "Dual-provider brains via MCP. Claude drives reasoning and tool-use; Grok adds live search and cross-checks." },
  { n: "03", title: "Shared Memory", detail: "Persistent cross-session memory and a holographic fact store with trust scoring." },
  { n: "04", title: "Secure Mesh", detail: "Private encrypted network linking the core to edge nodes like Friday, on demand." },
  { n: "05", title: "Robotics Bridge", detail: "A custom SDK exposing physical hardware (Dummy) as a first-class unit." },
  { n: "06", title: "Skills Engine", detail: "Reusable, self-curating procedures that grow the roster's capability over time." },
];
