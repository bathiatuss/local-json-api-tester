const EventEmitter = require("events");
const os = require("os");

const url = "https://randomuser.me/api";

class Logger extends EventEmitter {
  logMessage(message) {
    console.log(message);

    this.emit("messageLogged", { id: 1, url: url });
  }

  logMemory() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    console.log("Total Memory", totalMemory);
    console.log("Free Memory", freeMemory);
  }
}

module.exports = Logger;
