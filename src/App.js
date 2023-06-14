import "./App.css";
import { Navbar, Brand, CTA, Feature } from "./components";
import Features from "./components/feature/Features";
import { Footer, Blog, Possibility, Header, WhatGPT3 } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
