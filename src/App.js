import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About} exact />
      </Switch>
      {/* {Footer} */}
    </div>
  );
}

export default App;
