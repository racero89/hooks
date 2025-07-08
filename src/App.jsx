import "./App.css";
import useCustomHook from "./hooks/useCustomHook";

function App() {
  const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1";
  const urlRick = "https://rickandmortyapi.com/api/character/1";

  const { data: dataPokemon, loading: loadingPokemon } =
    useCustomHook(urlPokemon);
  const { data: dataRick, loading: loadingRick } = useCustomHook(urlRick);

  if (loadingPokemon || loadingRick) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h2>Personaje Pokémon</h2>
      <p>{dataPokemon.name}</p>
      <img src={dataPokemon.sprites.front_default} alt={dataPokemon.name} />

      <h2>Personaje Rick and Morty</h2>
      <p>{dataRick.name}</p>
      <img src={dataRick.image} alt={dataRick.name} />
    </>
  );
}

export default App;
