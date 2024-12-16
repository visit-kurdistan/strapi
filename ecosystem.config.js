module.exports = {
  apps: [
    {
      name: "strapi",
      script: "yarn build && yarn start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G", // Restart the app if it exceeds 1GB of memory
      node_args: ["-r dotenv/config"],
    },
  ],
};