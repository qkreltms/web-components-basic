const route = {
  // /
  "^/$": "<page-todo></page-todo>",
  "^/404$": "<page-404></page-404>",
  // /[:id]
  "^/\\d+$": "<page-todo-read></page-todo-read>",
  // /[:id]/edit
  "^/\\d+/edit$": "<page-todo-edit></page-todo-edit>",
};

const root = window.document.getElementById("app");
const renderPage = () => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );

  const path = document.location.hash.slice(1);
  const page = Object.entries(route).filter(([regex]) =>
    new RegExp(regex).test(path)
  )[0];

  if (page?.length) {
    root.innerHTML = page[1];
  } else {
    root.innerHTML = "<page-404></page-404>";
  }
};

window.addEventListener("load", () => {
  renderPage();
});

window.addEventListener("popstate", (event) => {
  renderPage();
});

export const navigateTo = (path = '', data = {}) => {
  history.pushState(data, "", `#/${path}`);
}