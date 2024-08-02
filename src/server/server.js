const http = require("http");
const ApiHandler = require("./api-handler");

class Server {
  constructor() {
    this.apiHandler = new ApiHandler();
  }

  start(PORT) {
    const server = http.createServer(async (req, res) => {
      // CORS HEADERS
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");

      await this.apiHandler.handleRequest(req, res);
    });
    server.listen(PORT, () => {
      console.log("Listening on port 3003...");
    });
  }
}

module.exports = Server;
