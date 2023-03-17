import React from "react";
import troll_face from "../img/troll-face.png"

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src={troll_face} alt="Troll Face" />
        <h1>MemeGenerator</h1>
        </div>

        <h2>React Course - Project3</h2>
    </header>
  )
}