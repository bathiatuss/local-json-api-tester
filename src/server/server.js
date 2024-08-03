const http = require("http");
const ApiHandler = require("./api-handler");

class Server {
  constructor() {
    this.apiHandler = new ApiHandler();
  }

  start(PORT, API_URL) {
    const server = http.createServer(async (req, res) => {
      // CORS HEADERS
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");

      await this.apiHandler.handleRequest(req, res, API_URL);
    });
    server.listen(PORT, () => {
      console.log(`START | [${API_URL}] API listening on port ${PORT}...`);
    });
  }
}

module.exports = Server;
