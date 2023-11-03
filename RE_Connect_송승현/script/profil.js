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

      // 워드클라우드 데이터 생성
      var data = [
        { x: "유세나", value: 13},
        { x: "여행", value: 1},
        { x: "반려동물", value: 1},
        { x: "캠핑", value: 1},
        { x: "AB형", value: 1},
        { x: "ISTJ", value: 1},
        { x: "무교", value: 1},
        { x: "비음주", value: 2},
        { x: "비흡연", value: 2},
        { x: "내향성", value: 3},
        { x: "고집", value: 3},
        { x: "솔직함", value: 3},
        { x: "정직", value: 3},
        { x: "경제적안정", value: 3},
        { x: "신뢰", value: 3},
        { x: "유며감각", value: 3},
        { x: "자유", value: 3},
      ];

      // 워드클라우드 생성
      anychart.onDocumentReady(function () {
        anychart.theme("default"); // 테마 선택
        var chart = anychart.tagCloud(data);
        chart.tooltip().format("{%word}");
        chart.angles([0]);
        chart.container("wordcloud-container"); // 워드클라우드가 표시될 요소 선택
        chart.draw();
      });
      
      // function getRandomColor() {
      //   // 랜덤 RGB 색상 생성
      //   var r = Math.floor(Math.random() * 256);
      //   var g = Math.floor(Math.random() * 256);
      //   var b = Math.floor(Math.random() * 256);
      //   return "rgb(" + r + "," + g + "," + b + ")";
      // }