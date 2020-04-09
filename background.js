'use strict';

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    let headers = []
    for (var i = 0; i < details.responseHeaders.length; i++) {
      let name  = details.responseHeaders[i].name
      let value = details.responseHeaders[i].value
      switch (name) {
        case 'Content-Type':
          headers.push({name: name, value: 'application/pdf'});
          break;
        case 'Content-Disposition':
          break;
        default:
          headers.push({name: name, value: value});
          break;
      }
    }
    return {responseHeaders: headers}
  },
  {urls: ['*://*/*.pdf']},
  ["responseHeaders", "blocking", "extraHeaders"]
);

