module.exports = {
  apps: [
    {
      name: 'App',
      script: 'server.js',
      watch: true,
      env: {
        "COMMON_VARIABLE": true,
      },
      "env_production": {
        "NODE_ENV": "production"
      }
    }
  ],
  deploy: {
    production: {
      user: 'ecs_manager',
      host: '120.26.235.4',
      port: '22',
      ref: 'origin/master',
      repo: 'git@github.com:Lwenli1224/pm2-ecosystem.git',
      path: '/www/app/production',
      ssh_options: 'StrictHostKeyChecking=no',
      "post-deploy": 'npm install; pm2 startOrRestart ecosystem.config.js --env production',
      "pre-deploy-local": "echo 'Deploy Done!'",
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
