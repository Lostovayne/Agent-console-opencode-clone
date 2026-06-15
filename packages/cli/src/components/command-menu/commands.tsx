export const COMMANDS = [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
  },
  {
    name: "exit",
    description: "Exit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
