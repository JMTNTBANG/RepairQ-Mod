const labels = document.getElementsByClassName("label");
const pendNotif = document.getElementsByClassName("pending_notification");
const pendApprov = document.getElementsByClassName("pending_approval");
const dropdowns = document.getElementById("TicketForm_status");

const extensionVersion = 0.5

if (pendNotif) {
  for (i = 0; i < pendNotif.length; i++) {
    pendNotif[i].innerText = "Waiting for Customer Device";
  }
}

if (pendApprov) {
  for (i = 0; i < pendApprov.length; i++) {
    pendApprov[i].innerText = "On Hold";
    pendApprov[i].style.background = "#999";
    pendApprov[i].style.borderColor = "#999";
  }
}

if (labels) {
  for (i = 0; i < labels.length; i++) {
    if (labels[i].innerText == "Pending Notification") {
      labels[i].innerText = "Waiting for Customer Device";
    } else if (labels[i].innerText == "Pending Approval") {
      labels[i].innerText = "On Hold";
      labels[i].style.background = "#999";
      if (labels[i].classList.contains("label-new")) {
        labels[i].style.color = "#BBBDC0";
      }
    }
  }
}

if (dropdowns) {
  for (i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].innerText == "Pending Notification")
      dropdowns[i].innerText = "Waiting for Customer Device";
    else if (dropdowns[i].innerText == "Pending Approval")
      dropdowns[i].innerText = "On Hold";
  }
}

const popup_container = document.getElementById("growl-alert-container");

if (popup_container) {
  popup_container.style.top = "revert";
  popup_container.style.bottom = "30px";
}

if (window.location.pathname.startsWith("/ticket/printLabel/")) {
  document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > img").style.width = "200px"
  const ticketInfo = new URLSearchParams(window.location.search);
  const table = document.querySelector("body > div > table")
  table.style.width = "202px"
  table.insertRow(4).insertCell(0).innerHTML = ticketInfo.get('deviceName')
  table.insertRow(8).insertCell(0).innerHTML = `<strong>Issue</strong><br>${ticketInfo.get('deviceDiagnostic')}`
  table.insertRow(11).insertCell(0).innerHTML = `<strong>Current Balance</strong><br>${ticketInfo.get('customerBalance')}`
}

const observer = new MutationObserver((mutations, mutationInstance) => {
  if (document.querySelector("#note_note_ifr")) {
    const date = new Date()
    setTimeout(() => {
      let textbox = document.querySelector("#note_note_ifr").contentWindow.document.querySelector("#tinymce")
      textbox.innerHTML = `<p>${date.toLocaleDateString()} ${date.toLocaleTimeString()}\n\n</p>`
    }, 1000)
    mutationInstance.disconnect()
  }
})

observer.observe(document, {
    childList: true,
    subtree:   true
});

const receiptButton = document.querySelector("#ticket > div:nth-child(3) > div > div > div.span8 > ul > li:nth-child(3) > a")
const devicename = document.querySelector("#devices > div.block-content > div > table > tbody:nth-child(2) > tr > td:nth-child(1)").innerText;
const devicediag = document.querySelector("#devices > div.block-content > div > table > tbody:nth-child(4) > tr > td").innerText;
const customerbalance = document.querySelector("#totals > div.block-content > div.remaining > span").innerText;
receiptButton.href += `?deviceName=${devicename}&deviceDiagnostic=${devicediag}&customerBalance=${customerbalance}`

const nav = document.querySelector("body > div.no-print-block.navbar.navbar-fixed-top.navbar-inverse > div > div > ul:nth-child(4)")
nav.innerHTML += `<li class=" hover-menu"><p style="padding-top: 10px; padding-left: 20px"><a style="color:#666; padding-left: 0; padding-right: 0;" href="https://github.com/JMTNTBANG/RepairQ-Mod">RepairQ Mod v${extensionVersion}</a> by <a style="color:#666;  padding-left: 0; padding-right: 0;" href="https://github.com/JMTNTBANG">JMTNTBANG</a></p></li>`;
