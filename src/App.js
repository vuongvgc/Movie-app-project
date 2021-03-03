import logo from "./logo.svg";
import "./App.css";
// import axios from "./utils/axiosClient";
function App() {
  // Test AXIOS
  // axios.get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01").then((result) => {
  //   console.log(result);
  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
