import pokeImg from "./images/bulbasaur.jpg";
import "./App.css";

const favPokemon = "Bulbasaur";
const pokeCharacteristics = {
  type: "Grass",
  move: "Vine Whip"
};

function Showcase() {
  return (
    <div className="background">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img alt={favPokemon} src={pokeImg} />
      <h2>
        Bulbasaur's type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
