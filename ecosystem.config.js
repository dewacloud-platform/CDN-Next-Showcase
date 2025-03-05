module.exports = {
    apps : [{
      name   : "cdnx-1",
      script : "npm",
      args: "start",
      env: {
        NODE_ENV: "production"
      }
    }]
  }
  