import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div class="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://upload.wikimedia.org/wikipedia/commons/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png"
      tel="+919066488409"
      email="b@beyonce.com"
    />
    <Card
      name="Enrique Iglesias"
      img="data:image/jpeg;base64,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"
      tel="9066488409"
      email="ei@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
