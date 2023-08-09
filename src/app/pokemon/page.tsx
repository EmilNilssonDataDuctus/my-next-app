async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

type pokemonType = {
  name: string;
  url: string;
};

export default async function About() {
  const data = await getData();
  console.log(data);

  return (
    <main>
      <h1>Hello world</h1>
      {data.results.map((pokemon: pokemonType) => (
        <p>{pokemon.name}</p>
      ))}
    </main>
  );
}
