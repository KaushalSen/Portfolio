import Layout from "./components/Layouts/Layout";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Education from "./components/pages/Education/Education";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div>
      
        <Layout/>
          <About/>
          <Contact/>
          <Education/>
          <ScrollToTop/>
        </div>
    </>
  );
}

export default App;
