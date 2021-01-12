/* FOnction pour Toggle la sidebar */
var mini = true;

function toggleSidebar() {
    if (document.getElementById("wtSidebar").classList.contains("wtDisableNone")) {
        document.getElementById("wtMain").style.marginLeft = "0px";

    } else {
        if (mini) {
            console.log("opening sidebar");
            document.getElementById("wtSidebar").style.width = "250px";
            document.getElementById("wtMain").style.marginLeft = "250px";
            this.mini = false;
        } else {
            console.log("closing sidebar");
            document.getElementById("wtSidebar").style.width = "100px";
            document.getElementById("wtMain").style.marginLeft = "100px";
            this.mini = true;
        }
    }
};

/* Fonction pour faire apparaitre la sidebar en scrollant */
var up = false;
var newscroll;

$(window).scroll(function () {
    newscroll = $(window).scrollTop();
    console.log(newscroll);
    if (newscroll >= 640 && !up) {
        $('#wtNavbar').addClass("wtDisableNone");
        $('#wtSidebar').removeClass("wtDisableNone");
        document.getElementById("wtMain").style.marginLeft = "100px";

        up = !up;
        console.log(up);

    } else if (newscroll <= 640 && up) {
        $('#wtNavbar').removeClass("wtDisableNone");
        $('#wtSidebar').addClass("wtDisableNone");
        document.getElementById("wtMain").style.marginLeft = "0px";

        up = !up;
    }
    newscroll = $(window).scrollTop();
});
