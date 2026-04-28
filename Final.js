function valid() {
  const name = document.getElementById("nam").value.trim();
  const vehicle = document.getElementById("veh").value;
  const depart = document.getElementById("depart").value;
  const arrive = document.getElementById("arrive").value;
  const cause = document.getElementById("cause").value;
  const date1 = document.getElementById("date1").value;
  const date2 = document.getElementById("date2").value;
  const mail = document.getElementById("mail").value.trim();
  const confirm = document.getElementById("confirm").checked;

  // Check if any field is empty or still "Choose"
  if (
    name === "" ||
    vehicle === "Choose" ||
    depart === "Choose" ||
    arrive === "Choose" ||
    cause === "Choose" ||
    date1 === "" ||
    date2 === "" ||
    mail === "" ||
    !confirm
  ) {
    alert("⚠️ Please fill up all the fields before booking.");
    return false;
  }

  // Check if departure and arrival are the same
  if (depart === arrive) {
    alert("⚠️ Departure and arrival locations cannot be the same.");
    return false;
  }

  return true; // allow form submission
}
