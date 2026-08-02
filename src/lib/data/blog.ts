export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-home-needs-a-panel-upgrade",
    title: "5 Signs Your Home Needs an Electrical Panel Upgrade",
    excerpt:
      "Flickering lights and tripped breakers aren't just annoying — they can be early warnings. Here's how to know when it's time.",
    category: "Electrical",
    date: "2026-06-12",
    readTime: "5 min read",
    author: "Ermal Sylaj",
    content: [
      "An electrical panel is the single most important safety component in your home, yet it's the one homeowners think about least — until something goes wrong.",
      "Frequent breaker trips, flickering lights when appliances turn on, warm or discolored outlets, and a panel rated below 100A are all signals worth taking seriously.",
      "Beyond safety, an undersized panel also blocks future upgrades — EV chargers, smart home automation, and solar all need headroom that older panels simply don't have.",
      "A professional load assessment takes under an hour and tells you definitively whether your panel is keeping pace with how you actually use your home today.",
    ],
  },
  {
    slug: "smart-home-automation-where-to-start",
    title: "Smart Home Automation: Where to Actually Start",
    excerpt:
      "Whole-home automation can feel overwhelming. Here's the order that actually makes sense — and why lighting comes first.",
    category: "Smart Home",
    date: "2026-05-28",
    readTime: "6 min read",
    author: "Njomza Kastrati",
    content: [
      "Most homeowners assume smart home automation starts with buying a bundle of gadgets. It doesn't — it starts with your network.",
      "A stable, segmented network is the foundation everything else depends on. Skip this step and even the best hardware will feel unreliable.",
      "From there, lighting is almost always the highest-impact first step: it's the automation you'll notice every single day, and it pairs naturally with occupancy and security scenes later.",
      "Security and climate typically come next, with full whole-home orchestration (Control4-style) as the final layer once the individual systems are proven out.",
    ],
  },
  {
    slug: "cctv-vs-smart-cameras-whats-the-difference",
    title: "CCTV vs. AI Smart Cameras: What's Actually Different",
    excerpt:
      "Not all surveillance cameras are created equal. Here's what AI detection actually changes about how a security system performs.",
    category: "Security",
    date: "2026-05-09",
    readTime: "4 min read",
    author: "Blendi Rama",
    content: [
      "Traditional CCTV records everything and alerts on any motion — including passing cars, blowing leaves, and shadows. That's how alert fatigue happens.",
      "AI-powered cameras classify what they see: person, vehicle, animal. That single distinction is what turns a camera system from a recording archive into a genuinely useful early-warning system.",
      "The other major shift is license plate recognition, which lets a system automatically log or flag vehicles — useful for both security and simple convenience, like knowing when a delivery arrives.",
    ],
  },
  {
    slug: "structured-cabling-why-wifi-extenders-fail",
    title: "Why Wi-Fi Extenders Fail (and Structured Cabling Doesn't)",
    excerpt:
      "If you've bought a third Wi-Fi extender and still have dead zones, the problem isn't the extender. Here's what actually fixes it.",
    category: "Networking",
    date: "2026-04-15",
    readTime: "5 min read",
    author: "Argjend Morina",
    content: [
      "Wi-Fi extenders repeat a signal that's already degraded — every hop roughly halves your usable bandwidth. In larger or multi-floor homes, that's rarely enough.",
      "Structured cabling solves the actual problem: it gets a wired, full-bandwidth connection to multiple access points throughout the property, so each one broadcasts a fresh, strong signal instead of a weakened repeat.",
      "It's a bigger upfront project, but it's the difference between a network that mostly works and one that disappears from your list of problems entirely.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
