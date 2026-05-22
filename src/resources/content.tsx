import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Derd",
  lastName: "Si Paling Brewer",
  name: `Derd`,
  role: "Home Brewer",
  avatar: "/images/avatar2.png",
  email: "derdtime@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  // languages: ["English", "Bahasa"],
  languages: ["Review Product", "Coffee Shop", "Brewing", "Recipes", "Education", "Entertain"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Interested in collaborating with {person.firstName}?</>,
  description: <>Whether you're a coffee brand, brewing tools, café, or creative partner, I’d love to hear from you.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/derd.time",
    essential: true,
  },
  {
    name: "Tiktok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@derdtime",
    essential: true,
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@derdtime",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@derd.time",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I’m Derd. Let's Rawr!</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Brewing <Text as="span" size="xl" weight="strong">stories</Text>, one cup at a time.<br />
    Coffee is more than a drink-it’s <Text as="span" size="xl" weight="strong">ritual</Text>, <Text as="span" size="xl" weight="strong">exploration</Text>, and <Text as="span" size="xl" weight="strong">quiet moments</Text> worth sharing. Welcome to my coffee journal.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://api.whatsapp.com/send?phone=6285175626262",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A space where I document coffee moments—from experimenting with brew methods to discovering beans that leave lasting impressions.
        I’m not here to chase perfection. Just to enjoy the process, one cup at a time.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Coffee Journey",
    experiences: [
      {
        company: "Exploring, Learning, and Creating",
        timeframe: "Feb 2026 - Present",
        role: "Home Brewer x Buzzer Kopi 🔥",
        achievements: [
          <>
            A continued exploration of specialty coffee.
          </>,
          <>
            From experimenting with new brew methods to learning more about beans, origins, and extraction techniques, coffee has become both a daily ritual and an ongoing study.
          </>,
          <>
            At the same time, I’ve been building consistency in creating content sharing discoveries, brew sessions, and the small moments that make coffee meaningful.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/d-cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Building Derd Account",
        timeframe: "Nov 2025 — Jan 2026",
        role: "Content Creator 🦖",
        achievements: [
          <>
            A new space to document the journey.
          </>,
          <>
            Derd was created as a personal coffee journal a place to archive brews, thoughts, and quiet moments around coffee.
          </>,
          <>
            What began as simple documentation slowly became a creative outlet for sharing my growing curiosity.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/tiktok-captured.png",
          //   alt: "Tiktok Account",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/ig-captured.png",
          //   alt: "Instagram Account",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/youtube-captured.png",
          //   alt: "Youtube Account",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "First Steps into Specialty Coffee",
        timeframe: "Aug 2025 — Oct 2025",
        role: "Home Brewer ☕",
        achievements: [
          <>
            The beginning of my specialty coffee journey.
          </>,
          <>
            It started with my first bag of specialty beans and my first brewing tool: a moka pot.
          </>,
          <>
            These early months were all about learning understanding flavor, adapting my palate, and discovering how different brewing choices could completely change a cup.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Brewing Setup",
    skills: [
      {
        title: "Grinder",
        tags: [
          {
            name: "Timemore C3S",
          },
          {
            name: "Kova N600",
          },
        ],
      },
      {
        title: "Dripper",
        tags: [
          {
            name: "Hario V60",
          },
          {
            name: "Origami Air",
          },
          {
            name: "Suji Wave",
          },
        ],
      },
      {
        title: "Kettle",
        tags: [
          {
            name: "Latina Bango 2",
          },
        ],
      },
      {
        title: "Scale",
        tags: [
          {
            name: "Unbranded",
          },
        ],
      },
      {
        title: "Espresso Machine",
        tags: [
          {
            name: "Guererro TBK01 Pro Lite",
          },
        ],
      },
      // {
      //   title: "Next.js",
      //   description: (
      //     <>Building next gen apps with Next.js + Once UI + Supabase.</>
      //   ),
      //   tags: [
      //     {
      //       name: "JavaScript",
      //       icon: "javascript",
      //     },
      //     {
      //       name: "Next.js",
      //       icon: "nextjs",
      //     },
      //     {
      //       name: "Supabase",
      //       icon: "supabase",
      //     },
      //   ],
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Coffee Preferences",
    institutions: [
      {
        name: "Favorite brew method",
        description: <>V60 pour-over because i enjoy the clarity and control it offers a slow ritual that highlights delicate flavors and makes every cup feel intentional.</>,
      },
      {
        name: "Favorite processing method",
        description: <>Natural and Honey process</>,
      },
      {
        name: "Favorite coffee moments",
        description: <>Quiet mornings, fresh beans, and the first aroma after bloom.</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about coffee...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Archive",
  title: `Projects – ${person.name}`,
  description: `Create and edit by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/d-horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/d-vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/d-horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/d-vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/d-vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/d-horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/d-horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/d-vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
