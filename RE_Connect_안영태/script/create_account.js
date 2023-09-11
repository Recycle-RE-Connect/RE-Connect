// 아이디 검증
function checkDuplicate() {
  const userIdInput = document.getElementById("user_id");
  const userId = userIdInput.value;
  const idExplan = document.getElementById("id-explan");

  // 실제 서버로 중복 확인 요청을 보내는 코드를 여기에 추가해야 합니다.
  // 여기에서는 간단한 예시로 아이디가 "testuser"일 때 중복 아이디로 처리합니다.
  if (userId === "testuser") {
    idExplan.textContent = "이 아이디는 이미 사용 중입니다.";
    idExplan.style.color = "red";
  } else {
    idExplan.textContent = "이 아이디는 사용 가능합니다.";
    idExplan.style.color = "green";
  }
}

// 비밀번호 검증
function validatePassword() {
  const pwInput = document.getElementById("user_pw");
  const pwConfirmInput = document.getElementById("user_pw_confirm");
  const pwMatchMessage = document.getElementById("pw-match-message");
  const pwExplan = document.querySelector(".pw-explan"); // <span class="pw-explan">

  const pw = pwInput.value;
  const pwConfirm = pwConfirmInput.value;

  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  if (pw === pwConfirm) {
    pwMatchMessage.textContent = "비밀번호가 일치합니다.";
    pwMatchMessage.style.color = "green";
  } else {
    pwMatchMessage.textContent = "비밀번호가 일치하지 않습니다.";
    pwMatchMessage.style.color = "red";
  }

  // 확인 입력란이 비어있으면 메시지를 숨김
  if (!pwConfirm) {
    pwMatchMessage.textContent = "";
  }

  // 비밀번호 입력란이 비어있을 때 <span class="pw-explan"> 내용을 다시 보여줌
  if (!pw) {
    pwExplan.style.display = "inline"; // 보이도록 함
  } else {
    pwExplan.style.display = "none"; // 숨김
  }
}

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

// 문자인증 필드
function formatPhoneNumber(inputElement) {
  // 입력 필드에서 숫자만 추출
  let inputValue = inputElement.value.replace(/[^0-9]/g, '');

  // 8자리 숫자인 경우 뒤에 "-" 추가
  if (inputValue.length === 8) {
    inputValue = inputValue.substring(0, 4) + "-" + inputValue.substring(4);
  }

  // 입력 필드에 형식을 적용한 값을 설정
  inputElement.value = inputValue;

  // 입력 필드에서 공백을 제거하여 길이를 확인
  const inputText = inputValue.replace(/\s/g, ''); // 공백 제거
  const isValid = inputText.length === 9; // 하이픈 포함 길이

  // "인증번호 받기" 버튼 활성화/비활성화 설정
  const sendVerificationButton = document.getElementById('sendVerificationButton');
  sendVerificationButton.disabled = !isValid;
}

function sendVerificationCode() {
  // 여기에 인증번호를 전송하는 로직을 추가하세요.
  // 예를 들어, AJAX 요청을 사용하여 서버에 요청을 보내고
  // 서버에서 인증번호를 생성하고 전송할 수 있습니다.

  // 아래는 간단한 예시입니다.
  alert("인증번호를 전송했습니다."); // 실제로는 이 부분을 서버와 통신하여 대체해야 합니다.

  // "인증번호 입력" 필드와 "인증번호 확인" 버튼을 표시하고 활성화
  const verificationCodeDiv = document.querySelector('.verification-code');
  verificationCodeDiv.style.display = 'block';

  const verificationCodeInput = document.getElementById('verificationCode');
  const verifyButton = document.getElementById('verifyButton');
  verificationCodeInput.removeAttribute('disabled');
  verifyButton.removeAttribute('disabled');
}

function checkVerificationCode() {
  const verificationCodeInput = document.getElementById('verificationCode');
  const verifyButton = document.getElementById('verifyButton');

  // 입력 필드에서 공백을 제거하여 길이를 확인
  const inputText = verificationCodeInput.value.replace(/\s/g, ''); // 공백 제거
  const isValid = inputText.length === 6; // 인증번호 길이


  // "인증번호 확인" 버튼 활성화/비활성화 설정
  verifyButton.disabled = !isValid;
}

function verifyCode() {
  // 여기에서 사용자가 입력한 인증번호를 확인하는 로직을 추가하세요.
  // 인증이 성공하면 적절한 조치를 취하십시오.

  // 아래는 간단한 예시입니다.
  alert("인증번호가 확인되었습니다."); // 실제로는 이 부분을 인증 로직에 대체해야 합니다.
}





// 동의하기 버튼 부분
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the 'agree_all', 'chk1', 'chk2', and 'chk3' checkboxes
  var agreeAllCheckbox = document.querySelector("#agree_all");
  var chk1Checkbox = document.querySelector("#agree_chk1");
  var chk2Checkbox = document.querySelector("#agree_chk2");
  var chk3Checkbox = document.querySelector("#agree_chk3");

  // Function to check 'agree_all' when all 'chk1', 'chk2', and 'chk3' are checked
  function updateAgreeAllCheckbox() {
    agreeAllCheckbox.checked =
      chk1Checkbox.checked && chk2Checkbox.checked && chk3Checkbox.checked;
  }

  // Add click event listeners to 'chk1', 'chk2', and 'chk3' checkboxes
  chk1Checkbox.addEventListener("click", updateAgreeAllCheckbox);
  chk2Checkbox.addEventListener("click", updateAgreeAllCheckbox);
  chk3Checkbox.addEventListener("click", updateAgreeAllCheckbox);

  // Add click event listener to 'agree_all' checkbox
  agreeAllCheckbox.addEventListener("click", function () {
    // Set 'chk1', 'chk2', and 'chk3' checkboxes to the same state as 'agree_all'
    chk1Checkbox.checked = agreeAllCheckbox.checked;
    chk2Checkbox.checked = agreeAllCheckbox.checked;
    chk3Checkbox.checked = agreeAllCheckbox.checked;
  });
});
