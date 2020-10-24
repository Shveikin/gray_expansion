document.getElementById('site').onclick = function(){
	let val = document.getElementById('val').value
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          {code: `setGrayScale98j31n8nd('site',${val})`});
    });
}

document.getElementById('page').onclick = function(){
	let val = document.getElementById('val').value
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          {code: `setGrayScale98j31n8nd('page',${val})`});
    });
}