const names = document.getElementById("name").value;
document.getElementById("result").innerText = names;
const age = document.getElementById("age").value;

function getHour() {
  const hour = new Date();
  const newHour = hour.getHours();
  //   console.log(newHour);
  if (newHour < 12) {
    document.getElementById("result").innerText =
      "Good morning " +
      names +
      "," +
      "We are on " +
      newHour +
      " AM and You're Approaching to the SunSet.";
  } else if (newHour > 12 && newHour < 18) {
    document.getElementById("result").innerText =
      "Good afternoon " +
      names +
      "," +
      "We are on " +
      newHour +
      " PM and You're Approaching to go back at home.";
  } else {
    document.getElementById("result").innerText =
      "Good evening " +
      names +
      "," +
      "We are on " +
      newHour +
      " PM and You're Approaching to the time of sleeping.";
  }
}
getHour();
