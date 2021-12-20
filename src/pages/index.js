import * as React from "react";
import "../tailwind.css";
import Introcard from "../components/introcard";
import Timeline from "../components/timeline";
import Divider from "../components/divider";
import Knowledge from "../components/knowledge";
import About from "../components/about";

// markup
const IndexPage = () => {
  return (
    <body className="w-full h-full py-11 bg-gradient-to-br from-zinc-700 to-black">
      <Introcard />
      <Divider />
      <Timeline />
      <Knowledge />
      <About />
    </body>
  );
};

export default IndexPage;
