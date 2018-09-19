function changeCSS()
{
    var oldLink = document.getElementsByTagName("link").item(0);
    var newLink = document.createElement("link");

    if(oldLink.getAttribute("href") == "css/stylesheet.css")
    {
        newLink.setAttribute("rel", "stylesheet");
        newLink.setAttribute("type", "text/css");
        newLink.setAttribute("href", "css/midnightStyle.css");
        localStorage.setItem("style","midnight");
        document.getElementById("midnight").innerHTML = "Daytime";
    }
    else if(oldLink.getAttribute("href") == "css/midnightStyle.css")
    {
        newLink.setAttribute("rel", "stylesheet");
        newLink.setAttribute("type", "text/css");
        newLink.setAttribute("href", "css/stylesheet.css");
        localStorage.setItem("style", "regular");
        document.getElementById("midnight").innerHTML = "Midnight";
    }
    document.getElementsByTagName("head").item(0).replaceChild(newLink, oldLink);
}

function hackathon()
{
    swal("HackUCI was a 36 hour hackathon held in Southern California near UCI.");
}

function leave(){
    return confirm("This link will take you to the google play store. Do you want to leave this page?");
}

function onLoad()
{
    if(typeof(Storage)!== "undefined")
    {
        var oldLink = document.getElementsByTagName("link").item(0);
        var temp = localStorage.getItem("style");
        if(temp === "regular" && oldLink.getAttribute("href") == "css/midnightStyle.css")
        {
            changeCSS();
        }
        else if(temp === "midnight" && oldLink.getAttribute("href") == "css/stylesheet.css")
        {
            changeCSS();
        }
    }
    else
    {
        swal("Your browser was unable to store the theme variable.");
    }
};

window.onload = onLoad;

