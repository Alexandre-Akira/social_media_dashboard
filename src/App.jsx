import "./App.css";
import Header from "./components/Header/header";

function App() {
  let total = 23004;
  return (
    <div className="app">
      <div className="app__top-background">
        <div className="app__template">
          <Header title="Social Media Dashboard" subtitle={"Total Followers: " + total} />
        </div>
      </div>
      <div className="app__background"></div>
    </div>
  );
}

export default App;
