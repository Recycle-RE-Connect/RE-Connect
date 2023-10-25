document.addEventListener("DOMContentLoaded", function () {
  // btn_member 요소를 찾습니다.
  var btnMember = document.querySelector(".btn_member");

  // layer_member 요소를 찾습니다.
  var layerMember = document.querySelector(".layer_member");

  // btn_member를 클릭할 때 말풍선을 토글합니다.
  btnMember.addEventListener("click", function () {
    layerMember.style.display =
      layerMember.style.display === "block" ? "none" : "block";
  });
});

// 토글 버튼과 네비게이션 메뉴 요소를 선택합니다.
const sidebar = document.querySelector(".nav");
// const menus = document.querySelectorAll(".menu-btn");
const toggleBtn = document.querySelector(".nav-icon");

// 토글 버튼을 클릭할 때마다 네비게이션 메뉴를 숨기거나 보이게 만듭니다.
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  dimLayer.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

// 프로필이미지
function toggleEditMenu() {
  var editMenu = document.getElementById("edit_menu");
  editMenu.style.display =
    editMenu.style.display === "block" ? "none" : "block";
}

function deleteProfilePhoto() {
  var profileImage = document
    .getElementById("myhome_profile_photo")
    .getElementsByTagName("img")[0];
  profileImage.src = "default-profile-image.jpg";
  toggleEditMenu();
}

var profilePictureInput = document.getElementById("profile_picture_input");
profilePictureInput.addEventListener("change", function () {
  var file = profilePictureInput.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var profileImage = document
        .getElementById("myhome_profile_photo")
        .getElementsByTagName("img")[0];
      profileImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
    toggleEditMenu();
  }
});

// 기본세션
// ===========================================================================================


// 입력 필드에 숫자만 입력되도록 하고, 입력이 끝났을 때 "세"를 추가하는 코드
var userAgeInput = document.getElementById("user_age");

userAgeInput.addEventListener("input", function () {
  var inputValue = userAgeInput.value;

  // 입력 값에서 숫자만 추출
  var numericValue = inputValue.replace(/\D/g, "");

  // 입력 값이 숫자가 아니라면 빈 문자열로 처리
  if (isNaN(numericValue)) {
    numericValue = "";
  }

  // 숫자만 입력된 값에 "세"를 추가
  userAgeInput.value = numericValue + "세";
});

// 입력 필드를 떠날 때 "세"를 추가 (입력이 끝났을 때)
userAgeInput.addEventListener("blur", function () {
  var inputValue = userAgeInput.value;

  // 입력 값에서 숫자만 추출
  var numericValue = inputValue.replace(/\D/g, "");

  // 입력 값이 숫자가 아니라면 빈 문자열로 처리
  if (isNaN(numericValue)) {
    numericValue = "";
  }

  // 숫자만 입력된 값에 "세"를 추가
  userAgeInput.value = numericValue + "세";
});

// 키세션

var userHightInput = document.getElementById("user_hight");

userHightInput.addEventListener("input", function () {
  var inputValue = userHightInput.value;

  // 입력 값에서 숫자만 추출
  var numericValue = inputValue.replace(/\D/g, "");

  // 입력 값이 숫자가 아니라면 빈 문자열로 처리
  if (isNaN(numericValue)) {
    numericValue = "";
  }

  // 숫자만 입력된 값에 "cm"을 추가
  userHightInput.value = numericValue + "cm";
});

// 입력 필드를 떠날 때 "cm"을 추가 (입력이 끝났을 때)
userHightInput.addEventListener("blur", function () {
  var inputValue = userHightInput.value;

  // 입력 값에서 숫자만 추출
  var numericValue = inputValue.replace(/\D/g, "");

  // 입력 값이 숫자가 아니라면 빈 문자열로 처리
  if (isNaN(numericValue)) {
    numericValue = "";
  }

  // 숫자만 입력된 값에 "cm"을 추가
  userHightInput.value = numericValue + "cm";
});

// 자녀수 필드

// 라디오 버튼에 이벤트 리스너 추가
var hasChildrenRadio = document.getElementById("has_children");
var noChildrenRadio = document.getElementById("no_children");
var childCountContainer = document.getElementById("child_count_container");

hasChildrenRadio.addEventListener("change", function () {
  // "베베있음" 선택 시 자녀수 선택 창 표시
  if (hasChildrenRadio.checked) {
    childCountContainer.style.display = "block";
  } else {
    childCountContainer.style.display = "none";
  }
});

noChildrenRadio.addEventListener("change", function () {
  // "베베없음" 선택 시 자녀수 선택 창 숨김
  if (noChildrenRadio.checked) {
    childCountContainer.style.display = "none";
  }
});

// 페이지 전환
function showPage(pageId) {
  if (pageId === "basic_info") {
    document.getElementById("basic_info").style.display = "block";
    document.getElementById("detailed_info").style.display = "none";
    document.getElementById("additional_info1").style.display = "none";
    document.getElementById("additional_info2").style.display = "none";
  } else if (pageId === "detailed_info") {
    document.getElementById("basic_info").style.display = "none";
    document.getElementById("detailed_info").style.display = "block";
    document.getElementById("additional_info1").style.display = "none";
    document.getElementById("additional_info2").style.display = "none";
  } else if (pageId === "additional_info1") {
    document.getElementById("basic_info").style.display = "none";
    document.getElementById("detailed_info").style.display = "none";
    document.getElementById("additional_info1").style.display = "block";
    document.getElementById("additional_info2").style.display = "none";
  } else if (pageId === "additional_info2") {
    document.getElementById("basic_info").style.display = "none";
    document.getElementById("detailed_info").style.display = "none";
    document.getElementById("additional_info1").style.display = "none";
    document.getElementById("additional_info2").style.display = "block";
  }
}

// 최대 선택가능한 개수 제한
// 관심사

const maxHobbySelections = 3; // 최대 선택 가능한 관심사 개수
const hobbyCheckboxes = document.querySelectorAll(
  ".info-hobby input[type='checkbox']"
);
const hobbySelectionLimitText = document.getElementById("selectionLimit");

// 체크박스 상태가 변경될 때마다 선택된 관심사 목록 업데이트
hobbyCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedCount = Array.from(hobbyCheckboxes).filter(
      (cb) => cb.checked
    ).length;

    if (selectedCount > maxHobbySelections) {
      // 최대 선택 개수를 초과한 경우 체크 해제
      checkbox.checked = false;
    }

    updateHobbySelectionLimit(selectedCount);
  });
});

// 선택 제한 텍스트 업데이트
function updateHobbySelectionLimit(selectedCount) {
  const remainingSelections = maxHobbySelections - selectedCount;
  hobbySelectionLimitText.textContent = `최대 3개 선택가능 (${
    remainingSelections >= 0 ? remainingSelections : 0
  }/${maxHobbySelections})`;
}

// <!-- 성격 -->

const maxPersonalitySelections = 3; // 최대 선택 가능한 성격 개수
const personalityCheckboxes = document.querySelectorAll(
  ".info-personality input[type='checkbox']"
);
const personalitySelectionLimitText = document.getElementById(
  "personalitySelectionLimit"
);

// 체크박스 상태가 변경될 때마다 선택된 성격 목록 업데이트
personalityCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedCount = Array.from(personalityCheckboxes).filter(
      (cb) => cb.checked
    ).length;

    if (selectedCount > maxPersonalitySelections) {
      // 최대 선택 개수를 초과한 경우 체크 해제
      checkbox.checked = false;
    }

    updatePersonalitySelectionLimit(selectedCount);
  });
});

// 선택 제한 텍스트 업데이트
function updatePersonalitySelectionLimit(selectedCount) {
  const remainingSelections = maxPersonalitySelections - selectedCount;
  personalitySelectionLimitText.textContent = `최대 ${maxPersonalitySelections}개 선택가능 (${
    remainingSelections >= 0 ? remainingSelections : 0
  }/${maxPersonalitySelections})`;
}

// 결혼가치관

const maxMarriageSelections = 5; // 최대 선택 가능한 결혼가치관 개수
const marriageCheckboxes = document.querySelectorAll(
  ".info_marriage input[type='checkbox']"
);
const marriageSelectionLimitText = document.getElementById("marriageSelectionLimit");

// 체크박스 상태가 변경될 때마다 선택된 결혼가치관 목록 업데이트
marriageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedCount = Array.from(marriageCheckboxes).filter(
      (cb) => cb.checked
    ).length;

    if (selectedCount > maxMarriageSelections) {
      // 최대 선택 개수를 초과한 경우 체크 해제
      checkbox.checked = false;
    }

    updateMarriageSelectionLimit(selectedCount);
  });
});

// 선택 제한 텍스트 업데이트
function updateMarriageSelectionLimit(selectedCount) {
  const remainingSelections = maxMarriageSelections - selectedCount;
  marriageSelectionLimitText.textContent = `최대 ${maxMarriageSelections}개 선택가능 (${
    remainingSelections >= 0 ? remainingSelections : 0
  }/${maxMarriageSelections})`;
}