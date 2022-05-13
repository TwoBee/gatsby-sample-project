import * as React from "react";
import "../tailwind.css";
import "../../dist/output.css";
import Intro from "../components/intro";
import Timeline from "../components/timeline";
import Divider from "../components/divider";
import Knowledge from "../components/knowledge";
import About from "../components/about";
import Highlight from "../components/highlight";

// markup
const IndexPage = () => {
  return (
    <body className="w-full h-full py-11 bg-zinc-500">
      <Intro />
      <About />
    </body>
  );
};

export default IndexPage;
