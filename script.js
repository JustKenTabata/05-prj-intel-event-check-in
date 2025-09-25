// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Count attendance
let count = 0;
const maxCount = 50;

//Handle Form Submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  // Increment Conut
  count++;
  console.log("Total Chech-ins:", count);

  //Update the progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log("Progress:", percentage);

  const teamCounter = document.getElementById(team + 'Count');
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const message = document.getElementById("greeting");
  message.textContent = `Welcome ${name} from ${teamName}!`;

  form.reset();
})