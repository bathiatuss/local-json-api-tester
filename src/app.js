// const Logger = require("./utils/logger");
const Server = require("./server/server");

const server = new Server();

// const logger = new Logger();
// logger.on("messageLogged", (arg) => {
//   console.log("Arguments called:", arg);
// });

// logger.logMemory();
// logger.logMessage("this is a parameter");

//-------------------------------------------
//Server proccess down here

server.start(3003, "https://dummyjson.com/products");
// Enter port as a parameter
// Enter api link as a parameter
