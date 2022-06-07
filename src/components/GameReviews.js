import { useContext } from "react";
import { GameDataContext } from "../context/gameDataContext";

function GameReview() {
  const gameData = useContext(GameDataContext);
  console.log("Game data", gameData);

  console.log(gameData);

  const display = gameData.map((item, i) => {
    return (
      <div
        style={{
          background: "black",
          overflowY: "scroll",
          width: "280px",
          height: "200px",
          overflow: "scroll",
          margin: "20px",
          textAlign: "center",
          display: "inline-table",
          position: "static",
          border: "2px solid red",
          backgroundColor: "black",
          borderBottomColor: "blue",
          borderTopColor: "blue",
          color: "red",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <h3 key={i}>{item.title}</h3>
        <img key={i} src={item.gameImage}></img>
        <h3 key={i}>
          <a href="/gameDetail">{item.title}</a>
        </h3>
      </div>
    );
  });

  return (
    <div
      id="home-cart"
      style={{
        border: "20px solid black",
      }}
    >
      <h5>Games: {display} </h5>
    </div>
  );
}

export default GameReview;
