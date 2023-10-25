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

function handleSubmit() {
  var passwordInput = document.getElementById("password").value;
  // 비밀번호를 여기에서 확인하고, 비밀번호가 맞으면 메시지를 표시합니다.
  // 아래는 예시입니다. 실제로는 비밀번호 확인 로직을 구현해야 합니다.
  if (passwordInput === "qwer1234") {
    document.getElementById("result-message").innerText =
      "회원탈퇴 접수되었습니다.";
  } else {
    document.getElementById("result-message").innerText =
      "비밀번호가 올바르지 않습니다.";
  }
}
