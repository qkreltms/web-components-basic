const route = {
  // /
  "^/$": "<page-todo></page-todo>",
  "^/404$": "<page-404></page-404>",
  // /[:id]
  "^/\\d+$": "<page-todo-read></page-todo-read>",
  // /[:id]/edit
  "^/edit/\\d+$": "<page-todo-edit></page-todo-edit>",
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

  // web component의 disconnectedCallback가 호출되도록 함
  while (root.firstChild) {
    root.firstChild.remove();
  }
  
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

export const navigateTo = (path = "", state) => {
  if (typeof path === "number") {
    history.go(path);
    return;
  }
  
  history.pushState(state, "", `#${path}`);
  // pushState가 popstate를 trigger하지 않음으로 수동으로 이벤트 dispatch
  const popStateEvent = new PopStateEvent("popstate", { path, state });
  dispatchEvent(popStateEvent);
};

export const useRoute = () => {
  return {
    param: document.location.hash.split("/").pop(0),
  };
};
