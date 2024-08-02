class JSONDataFormatter {
  formatApiData(data) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>API Data</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            pre {
              background-color: #f4f4f4;
              border: 1px solid #ddd;
              padding: 10px;
              border-radius: 5px;
              overflow-x: auto;
              white-space: pre-wrap;
            }
            h1 {
              color: #333;
            }
            button {
              margin-top: 10px;
              padding: 10px;
              border: none;
              background-color: #007bff;
              color: white;
              border-radius: 5px;
              cursor: pointer;
            }
            button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <div>
            <h1>API Data</h1>
            <pre>${JSON.stringify(data, null, 2)}</pre>
          </div>
        </body>
        </html>
      `;
  }
}

module.exports = JSONDataFormatter;
