function openTab(){
    
    var newTab = browser.tabs.create({
        url:"help.html",
        active:true
    })
}

browser.browserAction.onClicked.addListener(openTab)
