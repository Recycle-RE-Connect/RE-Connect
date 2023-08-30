document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("post-form");
  const board = document.getElementById("post-board");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = form.title.value;
    const content = form.content.value;
    const postElement = createPostElement(title, content);

    board.appendChild(postElement);

    form.reset();
  });

  function createPostElement(title, content) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const contentElement = document.createElement("p");
    contentElement.textContent = content;

    postDiv.appendChild(titleElement);
    postDiv.appendChild(contentElement);

    return postDiv;
  }
});