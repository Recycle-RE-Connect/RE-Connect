function formatPhoneNumber(inputElement) {
  // Get the input value and remove non-numeric characters
  let inputValue = inputElement.value.replace(/[^0-9]/g, "");

  // Check if the input value is empty
  if (inputValue.length === 0) {
    return;
  }

  // Format the phone number as 3 digits, 4 digits, and 4 digits
  if (inputValue.length <= 3) {
    // If the input has 3 or fewer digits, no hyphen is needed
    inputElement.value = inputValue;
  } else if (inputValue.length <= 7) {
    // If the input has 4 to 7 digits, add a hyphen after the first 3 digits
    inputElement.value = inputValue.substring(0, 3) + "-" + inputValue.substring(3);
  } else {
    // If the input has more than 7 digits, add hyphens after the first 3 and 7 digits
    inputElement.value =
      inputValue.substring(0, 3) +
      "-" +
      inputValue.substring(3, 7) +
      "-" +
      inputValue.substring(7);
  }
}