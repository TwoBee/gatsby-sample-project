import * as React from "react";
import "../../dist/output.css";
import "../tailwind.css";
import Introcard from "../components/introcard";
import Timeline from "../components/timeline";
import Divider from "../components/divider";
import Knowledge from "../components/knowledge";
import About from "../components/about";

// markup
const IndexPage = () => {
  return (
    <body class="bg-zinc-700 py-11">
      <Introcard />
      <Divider />
      <Timeline />
      <Knowledge />
      <About />
    </body>
  );
};

export default IndexPage;
