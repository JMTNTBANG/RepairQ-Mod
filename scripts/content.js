const labels = document.getElementsByClassName("label");
const buttons = document.getElementsByClassName("pending_notification");
const dropdowns = document.getElementById("TicketForm_status");

if (labels) {
  for (i = 0; i < labels.length; i++) {
    if (labels[i].innerText == "Pending Notification") {
      labels[i].innerText = "Waiting for Customer Device";
    }
  }
}

if (buttons) {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].innerText = "Waiting for Customer Device";
  }
}

if (dropdowns) {
  for (i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].innerText == "Pending Notification")
      dropdowns[i].innerText = "Waiting for Customer Device";
  }
}

const popup_container = document.getElementById("growl-alert-container");

if (popup_container) {
  popup_container.style.top = "revert";
  popup_container.style.bottom = "30px";
}
