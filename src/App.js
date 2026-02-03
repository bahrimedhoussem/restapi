import avatar from "./images/avatar.png";
import { Card } from "react-bootstrap";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Will";

const App = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
      <Card>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <p style={{ marginTop: "20px" }}>
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>

      {firstName && (
        <img
          src={avatar}
          alt="Avatar"
          style={{ width: "100px", borderRadius: "50%", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default App;
