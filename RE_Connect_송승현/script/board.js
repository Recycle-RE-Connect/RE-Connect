document.addEventListener("DOMContentLoaded", function () {
  const postForm = document.getElementById("post-form");
  const postTitle = document.getElementById("post-title");
  const postContent = document.getElementById("post-content");
  const postList = document.getElementById("post-list");

  postForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const title = postTitle.value;
      const content = postContent.value;

      if (title && content) {
          // 여기서 서버로 데이터를 보내고 게시글을 저장하는 코드를 추가해야 합니다.
          // 이 예제에서는 서버와 데이터베이스를 다루지 않습니다.
          // 그대신 게시글을 화면에 표시합니다.
          const postItem = document.createElement("div");
          postItem.classList.add("post-item");
          postItem.innerHTML = `
              <h2>${title}</h2>
              <p>${content}</p>
          `;
          postList.appendChild(postItem);

          postTitle.value = "";
          postContent.value = "";
      } else {
          alert("제목과 내용을 입력하세요.");
      }
  });
});
