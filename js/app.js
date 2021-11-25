function openModal(){
    document.getElementById("direct-modal").style.height = "100%"
}

function closeModal(){
    document.getElementById("direct-modal").style.height = "0%"
}

function openDetailsModal(){
    document.getElementById("det-modal").style.height = "100%"
}

var acc = document.getElementsByClassName("modal-head");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function closeDet(){
    let modal = document.getElementById("det-modal");

    modal.style.height = '0'
}