const labels = document.getElementsByClassName("label");
const pendNotif = document.getElementsByClassName("pending_notification");
const pendApprov = document.getElementsByClassName("pending_approval");
const dropdowns = document.getElementById("TicketForm_status");

if (pendNotif) {
  for (i = 0; i < pendNotif.length; i++) {
    pendNotif[i].innerText = "Waiting for Customer Device";
  }
}

if (pendApprov) {
  for (i = 0; i < pendApprov.length; i++) {
    pendApprov[i].innerText = "On Hold"
    pendApprov[i].style.background = "#999"
    pendApprov[i].style.borderColor = "#999"
  }
}

if (labels) {
  for (i = 0; i < labels.length; i++) {
    if (labels[i].innerText == "Pending Notification") {
      labels[i].innerText = "Waiting for Customer Device";
    } else if (labels[i].innerText == "Pending Approval") {
      labels[i].innerText = "On Hold"
      labels[i].style.background = "#999"
      if (labels[i].classList.contains("label-new")) {
        labels[i].style.color = "#BBBDC0"
      }
    }
  }
}

if (dropdowns) {
  for (i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].innerText == "Pending Notification")
      dropdowns[i].innerText = "Waiting for Customer Device";
    else if (dropdowns[i].innerText == "Pending Approval")
      dropdowns[i].innerText = "On Hold"
  }
}

const popup_container = document.getElementById("growl-alert-container");

if (popup_container) {
  popup_container.style.top = "revert";
  popup_container.style.bottom = "30px";
}

const nav = document.getElementsByClassName("nav")

nav[1].innerHTML += `<li class=" hover-menu"><p style="padding-top: 10px; padding-left: 20px"><a style="color:#666; padding-left: 0; padding-right: 0;" href="https://github.com/JMTNTBANG/RepairQ-Mod">RepairQ Mod v0.3</a> by <a style="color:#666;  padding-left: 0; padding-right: 0;" href="https://github.com/JMTNTBANG">JMTNTBANG</a></p></li>`