function toggle() {
    var x = document.getElementById("firearm_transfers");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function alertMessage() {
    var alerted = localStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
        alert("We are still adding to the site. Check back for new content or call us if you have questions.");
        localStorage.setItem('alerted', 'yes');
    }
}