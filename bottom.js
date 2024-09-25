// This script will display a reminder message on the website
document.addEventListener("DOMContentLoaded", (event) => {
  // Create a div element for the reminder message
  let reminderDiv = document.createElement("div");
  reminderDiv.style.position = "fixed";
  reminderDiv.style.top = "0";
  reminderDiv.style.left = "0";
  reminderDiv.style.width = "100%";
  reminderDiv.style.backgroundColor = "#ffcc00";
  reminderDiv.style.color = "#000";
  reminderDiv.style.textAlign = "center";
  reminderDiv.style.padding = "10px";
  reminderDiv.style.zIndex = "10000";
  reminderDiv.innerHTML =
    "Reminder: Payment for the website development is pending. Please settle the invoice at your earliest convenience.";

  // Append the reminder message to the body
  document.body.appendChild(reminderDiv);
});
/*// This script will display a reminder message at the bottom of the website when the user scrolls to the bottom
document.addEventListener("DOMContentLoaded", (event) => {
  // Create a div element for the reminder message
  let reminderDiv = document.createElement("div");
  reminderDiv.style.position = "fixed";
  reminderDiv.style.bottom = "0";
  reminderDiv.style.left = "0";
  reminderDiv.style.width = "100%";
  reminderDiv.style.backgroundColor = "#ffcc00";
  reminderDiv.style.color = "#000";
  reminderDiv.style.textAlign = "center";
  reminderDiv.style.padding = "10px";
  reminderDiv.style.zIndex = "10000";
  reminderDiv.style.display = "none"; // Initially hidden
  reminderDiv.innerHTML =
    "Reminder: Payment for the website development is pending. Please settle the invoice at your earliest convenience.";

  // Append the reminder message to the body
  document.body.appendChild(reminderDiv);

  // Function to check if the user has scrolled to the bottom
  function checkScrollPosition() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // User has scrolled to the bottom, show the reminder
      reminderDiv.style.display = "block";
    } else {
      // User is not at the bottom, hide the reminder
      reminderDiv.style.display = "none";
    }
  }

  // Add a scroll event listener to check the scroll position
  window.addEventListener("scroll", checkScrollPosition);
});
*/
