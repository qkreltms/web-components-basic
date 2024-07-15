const route = {
  // /
  "^/$": { element: "<page-todo></page-todo>", paramRegex: "" },
  "^/404$": { element: "<page-404></page-404>", paramRegex: "" },
  // /[:id]
  "^/\\d+$": {
    element: "<page-todo-read></page-todo-read>",
    paramRegex: "\\d+",
  },
  // /[:id]/edit
  "^/\\d+/edit$": {
    element: "<page-todo-edit></page-todo-edit>",
    paramRegex: "\\d+",
  },
};

const root = window.document.getElementById("app");

const findRoute = () => {
  const path = document.location.hash.slice(1);
  const page = Object.entries(route).filter(([regex]) =>
    new RegExp(regex).test(path)
  )[0];

  return [page, path];
};

const renderPage = () => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );

  const [page] = findRoute();

  // web component의 disconnectedCallback가 호출되도록 함
  while (root.firstChild) {
    root.firstChild.remove();
  }

  if (page?.length) {
    root.innerHTML = page[1].element;
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
  const [page, path] = findRoute();
  const match = path.match(new RegExp(page[1].paramRegex));
  return {
    param: match[0],
  };
};
