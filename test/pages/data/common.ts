class Data {

    npmVersion = "6.3.6";

    manifestUrl = 'fins://cdn.openfin.co/workspace/' + this.npmVersion + '/studio/app.json';
    studioUrl = 'https://cdn.openfin.co/workspace/'+ this.npmVersion + '/studio/index.html';
    browserUrl = 'https://cdn.openfin.co/workspace/' + this.npmVersion + '/browser/';
    homeURL = 'https://cdn.openfin.co/workspace/'+ this.npmVersion +'/home/'


    modifedLaunchPageJSON = 
    `{
      "pageId": "Page by Studio",
      "title": "Sample Page",
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
                  "url": "https://www.yahoo.com"
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

export default new Data();

