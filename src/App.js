import Quotes from "./pages/Quotes";
import Animation from "./pages/Animation";
import Header from "./component/Header";
import "./App.css";
import Nav from "./component/Nav";
import Gradient from "./pages/Gradient";
import Border from "./pages/Border";
import BorderRadius from "./pages/BorderRadius";
import Opacity from "./pages/Opacity";
import Outine from "./pages/Outine";
import Blur from "./pages/filter/Blur";
import Brightness from "./pages/filter/Brightness";
import Contrast from "./pages/filter/Contrast";
import Dropshadow from "./pages/filter/Dropshadow";
import Grayscale from "./pages/filter/Grayscale";
import HueRotate from "./pages/filter/HueRotate";
import Invert from "./pages/filter/Invert";
import Saturation from "./pages/filter/Saturation";
import Sepia from "./pages/filter/Sepia";
import DashboardButton from "./component/DashboardButton";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nlp from "./pages/nlp/Nlp";

function App() {
  return (
    <div>
      {/* <Nlp /> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/background" component={Animation} />
          <Route path="/gradient" component={Gradient} />
          <Route path="/border" component={Border} />
          <Route path="/borderRadius" component={BorderRadius} />
          <Route path="/opacity" component={Opacity} />
          <Route path="/outline" component={Outine} />
          <Route path="/blur" component={Blur} />
          <Route path="/brightness" component={Brightness} />
          <Route path="/contrast" component={Contrast} />
          <Route path="/dropshadow" component={Dropshadow} />
          <Route path="/grayscale" component={Grayscale} />
          <Route path="/hueRotate" component={HueRotate} />
          <Route path="/Invert" component={Invert} />
          <Route path="/Saturate" component={Saturation} />
          <Route path="/sepia" component={Sepia} />
        </Switch>
      </BrowserRouter>
    </div>
    // <div className="grid-container">
    //   <div className="header">
    //     <Header />
    //   </div>

    //   <div className="nav">
    //     <Nav />
    //   </div>
    //   <div className="footer">
    //     <Header />
    //   </div>
    //   <div className="content">
    //     {/* <Animation /> */}
    //     {/* <Gradient /> */}
    //     <Border />
    //   </div>
    // </div>
  );
}

export default App;
