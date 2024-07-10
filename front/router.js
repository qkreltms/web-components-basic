const route = {
  // /
  "/^/$/": "<page-root></page-root>",
  // /[:id]
  "/^/d+$/": "<page-todo-detail></page-todo-detail>",
  // /[:id]/edit
  "/^/d+/edit$/": "<page-todo-edit></page-todo-edit>",
  "/^404$/": "<page-404></page-404>",
};

window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );

  const root = window.document.getElementById("app");
  const page = Object.entries(route).filter(([regex, elementString]) => {
    if (regex.test(document.location.pathname)) {
      return elementString;
    }
  })[0];

  if (page) {
    root.innerHTML = page;
  } else {
    root.innerHTML = '<page-404></page-404>';
  }
});
