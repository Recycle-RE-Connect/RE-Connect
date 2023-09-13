document.addEventListener("DOMContentLoaded", function () {
  // btn_member 요소를 찾습니다.
  var btnMember = document.querySelector(".btn_member");
  
  // layer_member 요소를 찾습니다.
  var layerMember = document.querySelector(".layer_member");

  // btn_member를 클릭할 때 말풍선을 토글합니다.
  btnMember.addEventListener("click", function () {
    layerMember.style.display = (layerMember.style.display === "block") ? "none" : "block";
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


function previewImage() {
  const input = document.getElementById("profile-picture");
  const preview = document.getElementById("image-preview");
  
  if (input.files && input.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function (e) {
          preview.innerHTML = `<img src="${e.target.result}" alt="프로필 사진">`;
      }
      
      reader.readAsDataURL(input.files[0]);
  } else {
      preview.innerHTML = "";
  }
}