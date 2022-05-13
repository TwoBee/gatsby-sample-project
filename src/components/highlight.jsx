import * as React from "react";

// markup
const Highlight = ({ content }) => {
  return (
    <React.Fragment>
        <span className="bg-gradient-to-br from-teal-400 to-indigo-600 mb-16 bg-clip-text text-transparent">
           {" "} { content } {" "}
        </span>
    </React.Fragment>
  );
};

export default Highlight;
