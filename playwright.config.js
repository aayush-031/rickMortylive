const config = {
  // Configuration for the test runner
  use: {
    headless: true,
  },
  // Configuration for test result reporters
  reporter: [
    ["json", { outputFile: "./test/json/result.json" }],
    ["html", { outputFolder: "./test/html" }],
  ],
  timeout: 10000,
};

export default config;
