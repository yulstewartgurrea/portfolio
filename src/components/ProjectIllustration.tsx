// Simple line drawings shown at the top of a project card
// when the project has no screenshot. Each project id gets its own drawing;
// any other id falls back to a generic "</>" drawing.

const white = "#ffffff";
const docLine = "#c3cad9";
const badge = "#c9d8fb";
const blue = "#1849c9";

// Project id -> drawing
const drawings: Record<string, () => React.ReactNode> = {
  "ai-document-analysis": DocumentCompare,
  "agentic-ai-platform": AgentWorkflow,
  "booking-app": Calendar,
  "messaging-platform": ChatBubbles,
};

export default function ProjectIllustration({ id }: { id: string }) {
  const Drawing = drawings[id] ?? CodeBrackets;

  return (
    <div className="aspect-[16/9] w-full bg-navy">
      <svg viewBox="0 0 320 180" className="h-full w-full" fill="none" aria-hidden="true">
        <Drawing />
      </svg>
    </div>
  );
}

// A document with a folded corner and text lines. "highlight" marks one line in blue.
function Document({ x, highlight }: { x: number; highlight?: boolean }) {
  return (
    <g>
      <path d={`M${x} 44a4 4 0 0 1 4-4h50l16 16v80a4 4 0 0 1-4 4h-62a4 4 0 0 1-4-4z`} fill={white} />
      <path d={`M${x + 54} 40v16h16`} fill="#e4e9f3" />
      {[70, 84, 98, 112, 126].map((y) => (
        <line
          key={y}
          x1={x + 12}
          y1={y}
          x2={x + 58}
          y2={y}
          stroke={highlight && y === 98 ? blue : docLine}
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

// RAG Document Analysis: two documents compared, with a check and a cross between them.
function DocumentCompare() {
  return (
    <g>
      <Document x={55} />
      <Document x={195} highlight />
      {/* Two-way arrow */}
      <g stroke={white} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="142" y1="58" x2="178" y2="58" />
        <polyline points="148 52 142 58 148 64" />
        <polyline points="172 52 178 58 172 64" />
      </g>
      {/* Check badge */}
      <rect x="146" y="78" width="28" height="20" rx="5" fill={badge} />
      <polyline points="153 88 158 93 167 83" stroke={blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cross badge */}
      <rect x="146" y="106" width="28" height="20" rx="5" fill={badge} />
      <g stroke={blue} strokeWidth="3" strokeLinecap="round">
        <line x1="155" y1="111" x2="165" y2="121" />
        <line x1="165" y1="111" x2="155" y2="121" />
      </g>
    </g>
  );
}

// Agentic AI Platform: AI step -> processing step -> documents and database.
function AgentWorkflow() {
  return (
    <g stroke={white} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Connectors */}
      <line x1="94" y1="90" x2="126" y2="90" />
      <path d="M174 90H195V54H214M195 90V126H214" />
      {/* Node boxes */}
      <rect x="46" y="66" width="48" height="48" rx="10" />
      <rect x="126" y="66" width="48" height="48" rx="10" />
      <rect x="214" y="30" width="48" height="48" rx="10" />
      <rect x="214" y="102" width="48" height="48" rx="10" />
      {/* Sparkle (AI) */}
      <path d="M70 76c1.5 8 4 10.5 12 14-8 3.5-10.5 6-12 14-1.5-8-4-10.5-12-14 8-3.5 10.5-6 12-14z" />
      {/* Gear (processing) */}
      <circle cx="150" cy="90" r="5" />
      <circle cx="150" cy="90" r="12" strokeDasharray="5 3.5" />
      {/* Document */}
      <rect x="229" y="42" width="18" height="24" rx="2" />
      <line x1="233" y1="50" x2="243" y2="50" />
      <line x1="233" y1="55" x2="243" y2="55" />
      <line x1="233" y1="60" x2="240" y2="60" />
      {/* Database */}
      <ellipse cx="238" cy="117" rx="10" ry="4" />
      <path d="M228 117v16a10 4 0 0 0 20 0v-16M228 125a10 4 0 0 0 20 0" />
    </g>
  );
}

// Booking App: a calendar with one booked day.
function Calendar() {
  const days = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      days.push({ x: 122 + col * 20, y: 82 + row * 18, booked: row === 1 && col === 2 });
    }
  }

  return (
    <g>
      <rect x="110" y="40" width="100" height="104" rx="10" fill={white} />
      <path d="M110 50a10 10 0 0 1 10-10h80a10 10 0 0 1 10 10v16h-100z" fill={blue} />
      <g stroke={white} strokeWidth="4" strokeLinecap="round">
        <line x1="135" y1="32" x2="135" y2="48" />
        <line x1="185" y1="32" x2="185" y2="48" />
      </g>
      {days.map((day) => (
        <rect
          key={`${day.x}-${day.y}`}
          x={day.x}
          y={day.y}
          width="14"
          height="12"
          rx="3"
          fill={day.booked ? blue : "#dfe5f1"}
        />
      ))}
    </g>
  );
}

// Messaging Platform: two chat bubbles.
function ChatBubbles() {
  return (
    <g strokeWidth="4" strokeLinecap="round">
      <path d="M84 40h92a14 14 0 0 1 14 14v18a14 14 0 0 1-14 14h-80l-14 12v-12a14 14 0 0 1-12-14v-18a14 14 0 0 1 14-14z" fill={white} />
      <line x1="88" y1="56" x2="168" y2="56" stroke={docLine} />
      <line x1="88" y1="70" x2="140" y2="70" stroke={docLine} />
      <path d="M144 94h92a14 14 0 0 1 14 14v18a14 14 0 0 1-12 14v12l-14-12h-80a14 14 0 0 1-14-14v-18a14 14 0 0 1 14-14z" fill={badge} />
      <line x1="148" y1="110" x2="228" y2="110" stroke={blue} />
      <line x1="148" y1="124" x2="196" y2="124" stroke={blue} />
    </g>
  );
}

// Fallback for any other project: "</>".
function CodeBrackets() {
  return (
    <g stroke={white} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="130 66 106 90 130 114" />
      <polyline points="190 66 214 90 190 114" />
      <line x1="170" y1="58" x2="150" y2="122" />
    </g>
  );
}
