const ascii = `
 █████╗  ██╗  ██╗ ███╗   ███╗███████╗██████╗ 
██╔══██╗██║  ██║ ████╗ ████║██╔════╝██╔══██╗
███████║███████║ ██╔████╔██║█████╗  ██║  ██║
██╔══██║██╔══██║ ██║╚██╔╝██║██╔══╝  ██║  ██║
██║  ██║██║  ██║ ██║ ╚═╝ ██║███████╗██████╔╝
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═╝     ╚═╝╚══════╝╚═════╝ 
`;

export const resume = {
  name: "AHMED",
  ascii,

  location: "Iraq, Al-Hillah",
  locationLink: "https://www.google.com/maps/place/Al+Hillah,+Iraq",

  about:
    "I’m a <strong>recent CS graduate</strong> and <strong>full-stack JavaScript/TypeScript developer</strong>, daily <a href='https://github.com/vwh/nixos-config' target='_blank' class='underline break-all' style='color: #a2c9eb'>NixOS</a> user and <strong>GNU/Linux enthusiast</strong> exploring system programming to deepen my expertise.",

  languagesSummary:
    "Using <strong>TypeScript</strong> for type safety, <strong>JavaScript</strong> for flexibility, <strong>Python</strong> for scripting and rapid prototyping, and <strong>C</strong> for low-level system programming.",

  runtimesSummary:
    "Experienced with <strong>Node.js</strong>, <strong>Bun</strong>, <strong>Deno</strong>, <strong>Cloudflare Workers</strong>, and <strong>browsers</strong>, building high-performance applications across server, edge, and front-end environments.",

  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "Zig",
    "Dart",
    "Kotlin",
    "Java",
    "WebAssembly",
    "Vite",
    "React",
    "Next.js",
    "Zustand",
    "React Query",
    "Tailwind",
    "ShadcnUI",
    "SQLite",
    "PostgreSQL",
    "Redis",
    "Drizzle",
    "Prisma",
    "Node",
    "Bun",
    "Deno",
    "tRPC",
    "Express",
    "Hono",
    "Cloudflare",
    "Docker",
    "Windows",
    "Linux",
    "Git",
  ],

  contact: {
    email: "ssdcv101@gmail.com",
    social: {
      Telegram: {
        name: "Telegram",
        url: "https://t.me/rkiviry",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmed-ali-45815b308/",
      },
    },
  },

  futurePlans:
    "Diving into <strong>system programming</strong> with <strong>C</strong>, <strong>Zig</strong>, and <strong>Rust</strong> to master systems and performance optimization, while exploring diverse databases and back-end technologies for efficient, scalable web apps.",

  projects: [
    {
      title: "There are no projects yet.",
      active: false,
      description: "None",
      links: [
        {
          type: "Website",
          href: "",
        },
        {
          type: "Source",
          href: "",
        },
      ],
    },
    {
        },
      ],
    } as const;

declare global {
  namespace Lume {
    interface Data {
      resume: typeof resume;
    }
  }
}