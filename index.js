// alert('haha');

console.log('hols');

chrome.tabs.query({active: true}, function (tabs) {
    var tab = tabs[0];

    var script = "console.log('injected')";

    chrome.tabs.executeScript(tab.id, {code:script}, function () {
        console.log("injected2");
    });
    console.log(JSON.stringify(tabs[0]));
});
