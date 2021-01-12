/* Fonction pour Toggle la sidebar */
var mini = true;

function toggleSidebar() {
    if (document.getElementById("wtSidebar").classList.contains("wtDisableNone")) {
        document.getElementById("wtMain").style.marginLeft = "0px";

    } else {
        if (mini) {
            console.log("opening sidebar");
            document.getElementById("wtSidebar").style.width = "250px";
            document.getElementById("wtMain").style.marginLeft = "250px";
            document.getElementById("wtMenuSidebar").classList.remove("wtDisableNoneTitles");
            document.getElementById("wtAboutSidebar").classList.remove("wtDisableNoneTitles");
            document.getElementById("wtContactSidebar").classList.remove("wtDisableNoneTitles");
            this.mini = false;
        } else {
            console.log("closing sidebar");
            document.getElementById("wtSidebar").style.width = "100px";
            document.getElementById("wtMain").style.marginLeft = "100px";
            document.getElementById("wtMenuSidebar").classList.add("wtDisableNoneTitles");
            document.getElementById("wtAboutSidebar").classList.add("wtDisableNoneTitles");
            document.getElementById("wtContactSidebar").classList.add("wtDisableNoneTitles");
            this.mini = true;
        }
    }
};

// Fonction pour faire apparaitre la sidebar en scrollant 
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
// RAZ
$(document).on('click', '.ndRaz', function () {
    document.getElementById("ndFormLastName").value = null;
    document.getElementById("ndFormFirstName").value = null;
    document.getElementById("ndFormMail").value = null;
    document.getElementById("ndFormNumber").value = null;
    document.getElementById("ndTextArea").value = "";
});


//declaration d'une variable contante pour tout le doc pour recupere l'ensemble des inputs du formulaire qui on la classe inputSelector
const inputInscription = document.querySelectorAll(".ndInputSelect");


//test général pour les inputs vide
inputInscription.forEach(element => element.addEventListener("blur", function(){
    testVide(element);
    ndDisableButton(element);
}, true));

//Fonction global pour mettre en rouge le champ incorrect
function testVide(element){
    if(! element.value.match(/^([a-zA-Z]+)$/)){
        element.classList.add("border-danger");
    }else{
        element.classList.remove("border-danger");
    };
    
}
function ndDisableButton(element) {
    console.log(document.getElementById("ndTextArea").value);
    if(document.getElementById("ndFormLastName").value != "" && document.getElementById("ndFormFirstName").value != "" && document.getElementById("ndFormMail").value != "" &&
        document.getElementById("ndFormNumber").value != "" && document.getElementById("ndTextArea").value != ""){
            document.getElementById("ndSendForm").disabled = false;
        }else{
            document.getElementById("ndSendForm").disabled = true;
        }
}





