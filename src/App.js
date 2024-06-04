// src/App.js
import React from "react";
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/ImageUrl";
import "./App.css";

const App = () => {
  const firstName = "";
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
