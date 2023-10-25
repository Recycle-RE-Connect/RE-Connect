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

function checkSelectAll(checkbox)  {
  const selectall 
    = document.querySelector('input[name="selectall"]');
  
  if(checkbox.checked === false)  {
    selectall.checked = false;
  }
}

function selectAll(selectAll) {
  const checkboxes
    = document.getElementsByName('check');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}
