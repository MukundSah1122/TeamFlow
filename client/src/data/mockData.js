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
  },
  {
    id: "development",
    name: "development",
    description: "Development and engineering discussions",
  },
  {
    id: "design",
    name: "design",
    description: "UI/UX and design discussions",
  },
  {
    id: "random",
    name: "random",
    description: "Casual team conversations",
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