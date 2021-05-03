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

function App() {
  return (
    <div>
      <Header />
      {/* <Quotes /> */}
      {/* <Animation /> */}
      {/* <Gradient/> */}
      {/* <Border /> */}
      {/* <BorderRadius /> */}
      {/* <Opacity /> */}
      {/* <Outine /> */}
      {/* <Blur /> */}
      {/* <Brightness /> */}
      {/* <Contrast /> */}
      {/* <Dropshadow /> */}
      {/* <Grayscale /> */}
      <HueRotate />
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
