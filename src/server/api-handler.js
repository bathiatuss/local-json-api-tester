const DataFetcher = require("./data-fetcher");
const JSONDataFormatter = require("../utils/apiDataFormatter");

class ApiHandler {
  constructor() {
    this.dataFetcher = new DataFetcher();
    this.data = null;
    this.formatter = new JSONDataFormatter();
  }

  async handleRequest(req, res, API_URL) {
    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write(
        `Server working well.<br>
        To see API data, <a href="http://localhost:3003/api">http://localhost:3003/api</a><br>
        For more information: <a href="https://github.com/bathiatuss/my-node-app">my-node-app by Bathiatuss</a>`
      );
      res.end();
    } else if (req.url === "/api") {
      try {
        this.data = await this.dataFetcher.dataFetchFromApi(API_URL);
        res.setHeader("Content-Type", "text/html");
        res.write(this.formatter.formatApiData(this.data));
      } catch (error) {
        res.write(`Error: ${error.message}`);
      }
      res.end();
    } else {
      res.statusCode = 404;
      res.write("Status Code: 404 Not Found");
      res.end();
    }
  }
}

module.exports = ApiHandler;
