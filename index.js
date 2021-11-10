"use strict";
const { Reporter } = require("@parcel/plugin");
const fs = require("fs");
const path = require("path");

const assets = "staticAssets";

const staticCopyPlugin = new Reporter({
  async report({ event, options }) {
    if (event.type === "buildSuccess") {
      let config = Object.assign({}, getSettings(options.projectRoot));
      console.log(config);
    }
  },
});


const getSettings = (projectRoot) => {
  let packageJson = JSON.parse(
    fs.readFileSync(path.join(projectRoot, "package.json"))
  );
  return Object.assign({}, packageJson[assets]);
};

exports.default = staticCopyPlugin;
