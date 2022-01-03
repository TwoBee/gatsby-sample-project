import * as React from "react";
import "../../dist/output.css";
import "../tailwind.css";

// markup
const Impressum = () => {
  return (
    <React.Fragment>
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Tobias Zimmer
        <br />
        H&uuml;ttersdorfer Str. 18
        <br />
        66701 Beckingen
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 (0) 170 4892269
        <br />
        E-Mail: mail@tobiaszimmer.dev
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </React.Fragment>
  );
};

export default Impressum;
