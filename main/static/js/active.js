/*$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href;

    // passes on every "a" tag
    $(".menu a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) {
            $(this).addClass("active");
        }
    });
});
*/
window.addEventListener('load', function() {
    let menu = document.getElementsByClassName("menu-a");
    // let menu = header.getElementsByTagName("a");
    console.log(menu)
    console.log("sad")
    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i].href)
        if (menu[i].href === window.location.href) {
            menu[i].classList.add("active");
        }
    }
});