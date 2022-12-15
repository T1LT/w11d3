import { Route } from "react-router-dom";
import './App.css';
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import Survey from "./components/survey";
import SensoryPreferences from "./components/sensory_preferences";
import Report from "./components/report";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/survey"} component={Survey} />
        <Route exact path={"/report"} component={Report} />
        <Route exact path={"/sensory"} component={SensoryPreferences} />
      <Footer />
    </>
  );
}

export default App;
