const emailList = document.querySelector("#email-list");
const email = document.querySelector("#email");

emailList.addEventListener("change", (event) => {
  if (event.target.value !== "type") {
    email.value = event.target.value;
    email.disabled = true;
  } else {
    email.value = "";
    email.disabled = false;
  }
});
