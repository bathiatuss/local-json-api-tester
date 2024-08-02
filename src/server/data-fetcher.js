const https = require("https");

class DataFetcher {
  constructor() {
    this.url = "https://randomuser.me/api";
    this.data = null;
  }

  dataFetchFromApi() {
    return new Promise((resolve, reject) => {
      https
        .get(this.url, (response) => {
          let data = "";

          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            try {
              const parsedData = JSON.parse(data);
              const results = parsedData.results[0];
              // const nameData = results[0].name;
              // const ImageData = results[0].picture;

              // const title = nameData.title;
              // const firstName = nameData.first;
              // const lastName = nameData.last;
              // const largeImage = ImageData.large;

              this.data = results;
              console.log(this.data);
              resolve(this.data);
            } catch (error) {
              reject(error);
              console.log(error);
            }
          });
        })
        .on("error", (err) => {
          console.log("Error: " + err.message);
        });
    });
  }
}

module.exports = DataFetcher;
