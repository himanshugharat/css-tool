import Quotes from "./pages/Quotes";
import Animation from "./pages/Animation";
import Header from "./component/Header";
import "./App.css";
import Nav from "./component/Nav";
import Gradient from "./pages/Gradient";
import Border from "./pages/Border";

function App() {
  return (
    <div>
      <Header />
      {/* <Quotes /> */}
      {/* <Animation /> */}
      {/* <Gradient/> */}
      <Border />
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
