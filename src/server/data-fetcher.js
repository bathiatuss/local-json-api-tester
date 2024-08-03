const https = require("https");

class DataFetcher {
  constructor() {
    this.data = null;
  }

  dataFetchFromApi(API_URL) {
    return new Promise((resolve, reject) => {
      const options = {
        rejectUnauthorized: false, // Sertifika doğrulamasını devre dışı bırak
      };
      https
        .get(API_URL, options, (response) => {
          let data = "";

          response.on("data", (chunk) => {
            data += chunk;
          });

          response.on("end", () => {
            try {
              // JSON verisini doğrudan ayrıştırıyoruz
              const parsedData = JSON.parse(data);

              // Bu noktada veriyi ekrana yazdırıyoruz
              this.data = parsedData;
              console.log(this.data);

              // Bu veriyi resolve ederek döndürüyoruz
              resolve(this.data);
            } catch (error) {
              // JSON ayrıştırma hatasını yakalıyoruz
              reject(error);
              console.log(error);
            }
          });
        })
        .on("error", (error) => {
          console.log("Error: " + error.message);
        });
    });
  }
}

module.exports = DataFetcher;
