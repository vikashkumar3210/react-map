import React from "react";
import emojipedia from "../emojipedia.js";
import Card from "./emojiCard.jsx";
function createEmoji(x) {
  return <Card key={x.id} emoji={x.emoji} name={x.name} meaning={x.meaning} />;
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
