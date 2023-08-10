<template>
  <div class="body">
    <h1>日志</h1>
    <div class="mt-6 flex space-x-4">
      <span class="mr-4">ws:// <input class="w-46 rounded-sm border-solid border-2 border-indigo-600"
          placeholder="127.0.0.1:16668/ws" id="url" value="127.0.0.1:16668/ws" /> </span>
      <button class="w-12 rounded-sm border-solid border-2 border-indigo-600" type="button"
        @click="connectWebSocket">连接</button>
      <button class="w-12 rounded-sm border-solid border-2 border-indigo-600" type="button"
        @click="closeWebSocket">断开</button>
      <button class="w-12 rounded-sm border-solid border-2 border-indigo-600" type="button"
        @click="clearScreen">清空</button>
    </div>

    <div id="messages" class="messages">
      <p v-for="(message, index) in messageList" :key="index" :class="message.styleClass">
        {{ message.content }}
      </p>
    </div>
  </div>
</template>
  
<script>
export default {

  created() {
    // 进入页面时修改 body 的背景颜色
    document.body.classList.add('my-body');
  },
  beforeUnmount() {
    // 退出页面时重置 body 的背景颜色
    document.body.classList.remove('my-body');
  },

  data() {
    return {
      socket: null,
      messageList: [],
    };
  },
  methods: {
    connectWebSocket() {
      const url = 'ws://' + document.getElementById('url').value;
      this.socket = new WebSocket(url);

      this.socket.onopen = (event) => {
        console.log('连接成功!');
        this.addLogToMessages({ content: '连接成功', styleClass: 'warn' });
      };

      this.socket.onmessage = (event) => {
        this.addLogToMessages(`<p>${event.data}</p>`);
      };

      this.socket.onclose = (event) => {
        console.log('连接断开,3秒后重新连接');
        this.addLogToMessages({ content: '连接断开', styleClass: 'warn' });
        setTimeout(this.connectWebSocket, 3000);
      };
    },

    addLogToMessages(message) {
      this.messageList.push(message);
      this.scrollWindowToBottom();
    },

    scrollWindowToBottom() {
      setTimeout(() => {
        const messagesDiv = document.getElementById('messages');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
      });
    },

    closeWebSocket() {
      if (this.socket) {
        this.socket.close();
        this.addLogToMessages({ content: '手动断开连接, 不会重新连接', styleClass: 'headClose' });
      }
    },

    clearScreen() {
      this.messageList = [];
    },
  },
};
</script>

<style scoped>
h1 {
  color: #369;
}

.messages {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #666;
  border-radius: 5px;
  max-height: 300px;
  overflow-y: auto;
}

.messages p {
  margin: 5px 0;
  padding: 5px;
  border-bottom: 1px solid #666;
}

.headClose {
  color: red;
}

.warn {
  color: rgb(3, 1, 94);
}
</style>

<style>
.my-body {
  background-color: #1a1a1a;
  color: #b3b3b3;
}
</style>