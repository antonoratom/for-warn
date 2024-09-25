// This script will display a reminder message on the website
document.addEventListener("DOMContentLoaded", (event) => {
  // Create a div element for the reminder message
  let reminderDiv = document.createElement("div");
  reminderDiv.style.position = "fixed";
  reminderDiv.style.top = "0";
  reminderDiv.style.left = "0";
  reminderDiv.style.width = "100%";
  reminderDiv.style.height = "100%";
  reminderDiv.style.backgroundColor = "#ffcc00";
  reminderDiv.style.color = "#000";
  reminderDiv.style.textAlign = "center";
  reminderDiv.style.fontSize = "2rem";
  reminderDiv.style.flexWrap = "wrap";
  reminderDiv.style.display = "flex";
  reminderDiv.style.justifyContent = "center";
  reminderDiv.style.alignContent = "center";
  reminderDiv.style.padding = "5rem";
  reminderDiv.style.zIndex = "10000";
  reminderDiv.innerHTML =
    "Reminder: Payment for the website development is pending. Please settle the invoice at your earliest convenience.";

  // Append the reminder message to the body
  document.body.appendChild(reminderDiv);
});
