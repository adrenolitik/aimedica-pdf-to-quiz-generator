module.exports = {
  apps: [{
    name: 'ai-medica-lab',
    script: 'npm',
    args: 'start',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};