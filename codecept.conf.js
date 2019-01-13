exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      chrome:{
        args: ["--no-sandbox"]
      },
      url: 'http://www.sahibinden.com',
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/Home.js',
    detailedSearchPage: './pages/DetailedSearch.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {},
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  },
  tests: './tests/*_test.js',
  name: 'sahibinden'
};