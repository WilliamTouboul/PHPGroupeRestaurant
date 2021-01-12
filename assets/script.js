$(document).on('mouseover', '.ndContentImage', function (e) {
    $('img', this).toggleClass('ndContentImageHover');
});

$(document).on('mouseout', '.ndContentImage', function (e) {
    $('img', this).toggleClass('ndContentImageHover');
});

$(document).on('click', '.ndRaz', function () {
    document.getElementById("ndFormLastName").value = null;
    document.getElementById("ndFormFirstName").value = null;
    document.getElementById("ndFormMail").value = null;
    document.getElementById("ndFormNumber").value = null;
    document.getElementById("ndTextArea").value = "";
});







//declaration d'un variable contante pour tout le doc pour recupere l'ensemble des inputs du formulaire qui on la classe inputSelector
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

function ndRaz() {
      

    
  }