export const currentUser = {
  id: "user-001",
  name: "Mukund Sah",
  initials: "MS",
  role: "Admin",
  status: "online",
};

export const workspace = {
  name: "TeamFlow",
  initials: "TF",
};

export const channels = [
  {
    id: "general",
    name: "general",
    description: "General team conversation",
    members: 12,
  },
  {
    id: "development",
    name: "development",
    description: "Development and engineering discussions",
    members: 8,
  },
  {
    id: "design",
    name: "design",
    description: "UI/UX and design discussions",
    members: 5,
  },
  {
    id: "random",
    name: "random",
    description: "Casual team conversations",
    members: 10,
  },
];

export const directMessages = [
  {
    id: "alex",
    name: "Alex",
    initials: "A",
    status: "online",
    lastMessage: "The prototype looks great!",
  },
  {
    id: "rahul",
    name: "Rahul",
    initials: "R",
    status: "online",
    lastMessage: "I'll review it today.",
  },
  {
    id: "sarah",
    name: "Sarah",
    initials: "S",
    status: "offline",
    lastMessage: "See you tomorrow!",
  },
];

export const recentConversations = [
  {
    channel: "general",
    title: "General Team Discussion",
    description: "Discuss announcements and everyday team updates.",
    members: 12,
  },
  {
    channel: "development",
    title: "Development",
    description: "Engineering discussions, builds and technical updates.",
    members: 8,
  },
  {
    channel: "design",
    title: "Design",
    description: "UI/UX ideas, design reviews and creative discussions.",
    members: 5,
  },
];

export const channelMessages = {
  general: [
    {
      id: "general-001",
      userId: "alex",
      userName: "Alex",
      initials: "A",
      message:
        "Good morning everyone! Let's have a productive day.",
      timestamp: "9:15 AM",
    },
    {
      id: "general-002",
      userId: "rahul",
      userName: "Rahul",
      initials: "R",
      message:
        "Morning! I'll share the latest project updates shortly.",
      timestamp: "9:18 AM",
    },
    {
      id: "general-003",
      userId: "user-001",
      userName: "Mukund Sah",
      initials: "MS",
      message:
        "Sounds good. I'll keep an eye on the development tasks.",
      timestamp: "9:22 AM",
    },
  ],

  development: [
    {
      id: "development-001",
      userId: "rahul",
      userName: "Rahul",
      initials: "R",
      message:
        "The latest development build is ready for testing.",
      timestamp: "10:05 AM",
    },
    {
      id: "development-002",
      userId: "alex",
      userName: "Alex",
      initials: "A",
      message:
        "Great. I'll review the build and check for any issues.",
      timestamp: "10:12 AM",
    },
    {
      id: "development-003",
      userId: "user-001",
      userName: "Mukund Sah",
      initials: "MS",
      message:
        "I'll integrate the frontend changes after the review.",
      timestamp: "10:20 AM",
    },
  ],

  design: [
    {
      id: "design-001",
      userId: "sarah",
      userName: "Sarah",
      initials: "S",
      message:
        "I've uploaded the updated dashboard design.",
      timestamp: "11:10 AM",
    },
    {
      id: "design-002",
      userId: "alex",
      userName: "Alex",
      initials: "A",
      message:
        "The new layout looks clean. I especially like the sidebar.",
      timestamp: "11:16 AM",
    },
    {
      id: "design-003",
      userId: "user-001",
      userName: "Mukund Sah",
      initials: "MS",
      message:
        "Looks great! I'll make sure the implementation follows the design.",
      timestamp: "11:21 AM",
    },
  ],

  random: [
    {
      id: "random-001",
      userId: "alex",
      userName: "Alex",
      initials: "A",
      message:
        "Anyone up for a quick coffee break?",
      timestamp: "12:05 PM",
    },
    {
      id: "random-002",
      userId: "sarah",
      userName: "Sarah",
      initials: "S",
      message:
        "Definitely! I could use one right now. ☕",
      timestamp: "12:07 PM",
    },
  ],
};