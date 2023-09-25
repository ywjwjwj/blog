<template>
  <!-- Your template code -->
</template>

<script>
export default {
  // Your component options
  
  mounted() {
    // Connect to WebSocket on component mount
    this.$socket.client.on("connect", () => {
      this.addLogToMessages("连接成功");
      if (!this.scrolledToBottom) {
        this.scrollWindowToBottom();
      }
    });

    this.$socket.client.on("message", (message) => {
      this.addLogToMessages(message);
    });

    this.$socket.client.on("disconnect", () => {
      this.addLogToMessages("连接断开，3秒后重新连接");
      setTimeout(this.connectWebSocket, 3000);
      if (!this.scrolledToBottom) {
        this.scrollWindowToBottom();
      }
    });
  },

  methods: {
    connectWebSocket() {
      // Connect to WebSocket using nuxt-socket-io
      this.$socket.connect();

      // Rest of your method code
    },

    // Rest of your methods
  },
};
</script>

<style scoped>
/* Your component styles */
</style>
