function change(e) {
    if (localStorage.getItem("theme") == null || localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark")

    } else {
        localStorage.setItem("theme", "light")
    }
    e.preventDefault();
    themecontrol()

}
function themecontrol() {
    var theme = localStorage.getItem("theme")
    if (theme === null || theme === "dark") {
        document.body.setAttribute("class", "bg-light")
        document.getElementById("navbar").className = "container navbar navbar-expand-lg navbar-light bg-light shadow-lg sticky-top"
        document.querySelectorAll("i").forEach((i)=>{
            i.style.color = "black";
            i.style.transitionDuration="3s"
        })
        document.querySelectorAll("p").forEach((item)=>{
            item.style.color = "black"
            item.style.transitionDuration="3s"
        })
        document.querySelectorAll(".card").forEach((item)=>{
            item.className = "card bg-light"
            item.style.transitionDuration="3s"  
        })
        document.querySelectorAll("span").forEach((item)=>{
            item.style.color = "black"
            item.style.transitionDuration="5s" 
        })
        document.querySelectorAll("h5").forEach(item => item.style.color = "black")
        document.querySelectorAll("h6").forEach(item => item.style.color = "black")
        document.querySelectorAll("h2").forEach(item => item.style.color = "black")
        document.querySelector(".offcanvas").className="offcanvas offcanvas-start bg-light"
    } else {
        document.body.setAttribute("class", "bg-dark")
        document.getElementById("navbar").className = "container navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top"
        document.querySelectorAll("i").forEach(i => i.style.color = "white")
        document.querySelectorAll("p").forEach(item => item.style.color = "white")
        document.querySelectorAll(".card").forEach(item => item.className = "card bg-dark")
        document.querySelectorAll("span").forEach(item => item.style.color = "white")
        document.querySelectorAll("h5").forEach(item => item.style.color = "white")
        document.querySelectorAll("h6").forEach(item => item.style.color = "white")
        document.querySelectorAll("h2").forEach(item => item.style.color = "white")
        document.querySelector(".offcanvas").className="offcanvas offcanvas-start bg-dark"
    }
    document.body.style.transitionDuration="0.8s"

}

themecontrol()