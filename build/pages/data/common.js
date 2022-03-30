"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor() {
        this.npmVersion = "6.3.6";
        this.manifestUrl = 'fins://cdn.openfin.co/workspace/' + this.npmVersion + '/studio/app.json';
        this.studioUrl = 'https://cdn.openfin.co/workspace/' + this.npmVersion + '/studio/index.html';
        this.browserUrl = 'https://cdn.openfin.co/workspace/' + this.npmVersion + '/browser/';
        this.modifedLaunchPageJSON = `{
        "pageId": "Page by Studio",
        "title": "Custom Page Title",
        "layout": {
          "content": [
            {
              "type": "stack",
              "content": [
                {
                  "type": "component",
                  "componentName": "view",
                  "componentState": {
                    "identity": {
                      "uuid": "workspace-api-studio",
                      "name": "component_X1"
                    },
                    "url": "https://www.yahoo.co"
                  }
                },
                {
                  "type": "component",
                  "componentName": "view",
                  "componentState": {
                    "identity": {
                      "uuid": "workspace-api-studio",
                      "name": "component_Y1"
                    },
                    "url": "http://google.com"
                  }
                }
              ]
            }
          ]
        }
    }`;
    }
}
exports.default = new Data();
