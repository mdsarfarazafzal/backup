export default {
  install: (app, options) => {
    app.provide("logger", {
      logStyle:
        "font-size:20px; font-weight:bold; background: #000000; padding: 5px; border-radius: 10px; margin: 5px",

      success(msg) {
        console.log(`%c${msg}`, `color:#27F52E; ${this.logStyle}`);
      },
      error(msg) {
        console.log(`%c${msg}`, `color:#E50B0B; ${this.logStyle}`);
      },
      table(obj) {
        console.table(obj);
      },
      info(msg) {
        console.log(`%c${msg}`, `color:#0B78E5; ${this.logStyle}`);
      },
      warn(msg) {
        console.log(`%c${msg}`, `color:#E5E10B; ${this.logStyle}`);
      },
    });
  },
};
