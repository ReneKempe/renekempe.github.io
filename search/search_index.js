const local_index = {"config":{"indexing":"full","lang":["en"],"min_search_length":3,"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"index.html","text":"NFC Reader # General # Background Web NFC aims to provide sites the ability to read and write to NFC tags when they are brought in close proximity to the user\u2019s device (usually 5-10 cm, 2-4 inches). The current scope is limited to NDEF, a lightweight binary message format. Low-level I/O operations (e.g. ISO-DEP, NFC-A/B, NFC-F) and Host-based Card Emulation (HCE) are not supported within the current scope. Scan Write Make Read-Only var ChromeSamples = { log: function() { var line = Array.prototype.slice.call(arguments).map(function(argument) { return typeof argument === 'string' ? argument : JSON.stringify(argument); }).join(' '); document.querySelector('#log').textContent += line + '\\n'; }, clearLog: function() { document.querySelector('#log').textContent = ''; }, setStatus: function(status) { document.querySelector('#status').textContent = status; }, setContent: function(newContent) { var content = document.querySelector('#content'); while(content.hasChildNodes()) { content.removeChild(content.lastChild); } content.appendChild(newContent); } }; Live Output if (/Chrome\\/(\\d+\\.\\d+.\\d+.\\d+)/.test(navigator.userAgent)){ // Let's log a warning if the sample is not supposed to execute on this // version of Chrome. if (89 > parseInt(RegExp.$1)) { ChromeSamples.setStatus('Warning! Keep in mind this sample has been tested with Chrome ' + 89 + '.'); } } log = ChromeSamples.log; if (!(\"NDEFReader\" in window)) ChromeSamples.setStatus(\"Web NFC is not available. Use Chrome on Android.\");","title":"read NFC"},{"location":"index.html#nfc-reader","text":"","title":"NFC Reader"},{"location":"index.html#general","text":"","title":"General"}]}; var __search = { index: Promise.resolve(local_index) }