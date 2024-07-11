const route = {
  // /
  "^/$": "<page-todo></page-todo>",
  // /[:id]
  "^/d+$": "<page-todo-read></page-todo-read>",
  // /[:id]/edit
  "^/d+/edit$": "<page-todo-edit></page-todo-edit>",
  "^404$": "<page-404></page-404>",
};

const root = window.document.getElementById("app");
const renderPage = () => {
  const page = Object.entries(route).filter(([regex, elementString]) =>
    new RegExp(regex).test(document.location.pathname)
  )[0][1];

  if (page) {
    root.innerHTML = page;
  } else {
    root.innerHTML = "<page-404></page-404>";
  }
};

window.onload = () => {
  renderPage();
};

window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
  renderHTML(pathName);
});

const navigate = (pathName, data = {}) => {
  window.history.pushState(data, "", window.location.origin + pathName);
  renderHTML(pathName);
};

// TODO: 브라우저에 http://127.0.0.1:8080/#404 다음과 같이 이동시 대응 구현