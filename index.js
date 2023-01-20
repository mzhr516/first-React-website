function app() {
  return [
    React.createElement(h1),
    React.createElement(h2),
    React.createElement(h3),
    React.createElement(h4),
    React.createElement(h5),
    React.createElement(h6),
    React.createElement(list),
  ];
}
function h1() {
  return React.createElement(
    "h1",
    { class: "main" },
    "this is my first react element"
  );
}
function h2() {
  return React.createElement("h2", { id: "h2" }, "this is h2 tag");
}
function h3() {
  return React.createElement("h3", { id: "h3" }, "this is h3 tag");
}
function h4() {
  return React.createElement("h4", { id: "h4" }, "this is h4 tag");
}
function h5() {
  return React.createElement("h5", { id: "h5" }, "this is h5 tag");
}
function h6() {
  return React.createElement("h6", { id: "h6" }, "this is h6 tag");
}

function list() {
  return React.createElement("div",{ class: "fuitsList" },
      React.createElement(
        "ul",
        {},
        React.createElement("li", {}, "mango"),
        React.createElement("li", {}, "apple"),
        React.createElement("li", {}, "orange"),
        React.createElement("li",{},"banana")
      )
    )
  
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(app)
);

// React.createElement("h2", { id: "h2" }, "this is h2 tag"),
// React.createElement("h3",{},"this is h3 tag"),
// React.createElement("h4",{},"this is h4 tag"),
// React.createElement("h5",{},"this is h5 tag"),
// React.createElement("h6",{},"this is h6 tag")
