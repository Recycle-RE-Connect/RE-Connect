// 이메일입력필드
function checkEmailAddy() {
  const emailSelect = document.querySelector(".email-select");
  const customEmailField = document.querySelector(".text-email");

  if (emailSelect.value === "1") {
    // 직접 입력을 선택한 경우
    customEmailField.readOnly = false; // 입력 필드 편집 가능으로 설정
    customEmailField.value = ""; // 입력 필드 내용 초기화
    customEmailField.focus(); // 입력 필드에 포커스
  } else {
    // 이메일 선택한 경우
    customEmailField.readOnly = true; // 입력 필드 읽기 전용으로 설정
    customEmailField.value = emailSelect.value; // 선택한 이메일로 값 설정
  }
}
// 이메일입력필드

// 동의하기 버튼 부분
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the 'agree_all', 'chk1', 'chk2', and 'chk3' checkboxes
  var agreeAllCheckbox = document.querySelector('#agree_all');
  var chk1Checkbox = document.querySelector('#agree_chk1');
  var chk2Checkbox = document.querySelector('#agree_chk2');
  var chk3Checkbox = document.querySelector('#agree_chk3');

  // Function to check 'agree_all' when all 'chk1', 'chk2', and 'chk3' are checked
  function updateAgreeAllCheckbox() {
      agreeAllCheckbox.checked = chk1Checkbox.checked && chk2Checkbox.checked && chk3Checkbox.checked;
  }

  // Add click event listeners to 'chk1', 'chk2', and 'chk3' checkboxes
  chk1Checkbox.addEventListener('click', updateAgreeAllCheckbox);
  chk2Checkbox.addEventListener('click', updateAgreeAllCheckbox);
  chk3Checkbox.addEventListener('click', updateAgreeAllCheckbox);

  // Add click event listener to 'agree_all' checkbox
  agreeAllCheckbox.addEventListener('click', function() {
      // Set 'chk1', 'chk2', and 'chk3' checkboxes to the same state as 'agree_all'
      chk1Checkbox.checked = agreeAllCheckbox.checked;
      chk2Checkbox.checked = agreeAllCheckbox.checked;
      chk3Checkbox.checked = agreeAllCheckbox.checked;
  });
});