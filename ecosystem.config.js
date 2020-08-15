module.exports = {
  apps: [
    {
      name: "Web Admininstrator | TrazeTrip",
      script: "npm",
      args: "start",
      cwd: "/var/www/webapp-trace-trip/",
      instances: 2,
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      interpreter: "/home/csierra/.nvm/versions/node/v10.21.0/bin/node",
      env: {
        NODE_ENV: "development",
        PORT: 3001,
      },
      env_stating: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
  deploy: {
    stating: {
      user: "crijosicar",
      host: "64.227.61.21",
      ref: "origin/stage",
      repo: "git@github.com/webapp-trace-trip.git",
      path: "/var/www/webapp-trace-trip",
      "post-deploy":
        "npm install && next build && pm2 reload ecosystem.config.js --env stating",
    },
  },
};
