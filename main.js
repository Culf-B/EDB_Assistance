console.log("Extension running!")
banner = document.getElementById("banner")

li = document.createElement("li")

helpButton = document.createElement("a")
helpButton.className = "nav-link"
helpButton.innerHTML = "Hjælp"
helpButton.href = `${browser.runtime.getURL("help.html")}`

li.appendChild(helpButton)


document.getElementsByClassName("navbar-nav")[0].prepend(li)
