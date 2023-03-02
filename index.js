function App() {
  return (
    <div>
      <List />

      {/* {// call the component} */}
      <H1 />
      <H2 />
      <H3 />
      <Table/>
      {/* {Table()} */}
    </div>
  );
}

// Table()
function H1() {
  return <h1 className="h1-class">hello this is h1 tag</h1>;
}
function H2() {
  return <h2>this is h2 tag</h2>;
}
function H3() {
  return <h3>this is h3</h3>;
}
// function h4() {
//   return React.createElement("h4", { id: "h4" }, "this is h4 tag");
// }
// function h5() {
//   return React.createElement("h5", { id: "h5" }, "this is h5 tag");
// }
// function h6() {
//   return React.createElement("h6", { id: "h6" }, "this is h6 tag");
// }

function List() {
  return (
    <div>
      <ul>
        <li>mango</li>
        <li>apple</li>
        <li>orange</li>
      </ul>
    </div>
  );
}

function Table() {
  return (
    <table>
      <tr>
        <th>sr. no.</th>
        <th>name</th>
        <th>roll num</th>
      </tr>
      <tr>
        <td>1</td>
        <td>teki</td>
        <td>001</td>
      </tr>
      <tr>
        <td>2</td>
        <td>mazhar</td>
        <td>002</td>
      </tr>
    </table>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
