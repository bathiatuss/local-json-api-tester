const DataFetcher = require("./data-fetcher");
const JSONDataFormatter = require("../utils/apiDataFormatter");

class ApiHandler {
  constructor() {
    this.dataFetcher = new DataFetcher();
    this.data = null;
    this.formatter = new JSONDataFormatter();
  }

  async handleRequest(req, res) {
    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write(
        `Server working well.<br>
        To see API data, <a href="http://localhost:3003/api">http://localhost:3003/api</a><br>
        To refresh API data <a href="http://localhost:3003/api/refresh">http://localhost:3003/api/refresh</a>`
      );
      res.end();
    } else if (req.url === "/api") {
      if (!this.data) {
        try {
          this.data = await this.dataFetcher.dataFetchFromApi();
        } catch (error) {
          res.write(`Error: ${error.message}`);
          res.end();
          return;
        }
      }
      res.setHeader("Content-Type", "text/html");
      res.write(this.formatter.formatApiData(this.data));
      res.end();
    } else if (req.url === "/api/refresh") {
      try {
        this.data = await this.dataFetcher.dataFetchFromApi();
        res.setHeader("Content-Type", "text/html");
        res.write(`Data refreshed successfully.<br>
          To see API data, <a href="http://localhost:3003/api">http://localhost:3003/api</a>`);
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
