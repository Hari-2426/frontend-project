function addHoverEffect(id, stateName, imageFile) {
    let el = document.getElementById(id);

    el.addEventListener('mouseover', () => {
        el.style.background = "white";
        el.innerHTML = "Click Here";
        el.style.color = "black";
        el.style.fontSize = "30px";
        
    });

    el.addEventListener('mouseout', () => {
        el.style.backgroundImage = `url('${imageFile}')`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
        el.innerHTML = `<h3>${stateName}</h3>`;
        el.style.color = "white";
        el.style.fontSize = "20px";
    });
}
// let newId=document.getElementById("ap");
// newId.addEventListener("click",function(){
//     window.location.href="Andhra.html"
// })

function onClicking(id,url)
{
    let element=document.getElementById(id);
    element.addEventListener("click",function(){
        window.location.href=url;
    }
)}

// Call the function for click navigation
onClicking("ap","Andhra.html");
onClicking("ts","Telangana.html");
onClicking("ka","Karnataka.html");
onClicking("tn","TamilNadu.html");
onClicking("kl","Kerala.html");
onClicking("jk","JammuAndKashmir.html");
onClicking("hp","HimachalPradesh.html");
onClicking("up","UttarPradesh.html");
onClicking("uk","Uttarakhand.html");
onClicking("rj","Rajasthan.html");



// Call the function for all states
addHoverEffect("ap", "Andhra Pradesh", "Pictures/ap.jpg");
addHoverEffect("ts", "Telangana", "Pictures/TLE.jpg");
addHoverEffect("ka", "Karnataka", "Pictures/KN.jpg");
addHoverEffect("tn", "Tamil Nadu", "Pictures/TN.jpg");
addHoverEffect("kl", "Kerala", "Pictures/KE.jpeg"); 
addHoverEffect("jk", "Jammu & Kashmir", "Pictures/JK.jpeg");
addHoverEffect("hp", "Himachal Pradesh", "Pictures/HP.png");
addHoverEffect("up", "Uttar Pradesh", "Pictures/UP.jpg");
addHoverEffect("uk", "Uttarakhand", "Pictures/UK.jpg");
addHoverEffect("rj", "Rajasthan", "Pictures/RJ.png");

