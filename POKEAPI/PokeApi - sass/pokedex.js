const getPoke = async () => {
  const misPoke = [];

  for (let i = 1; i < 150; i++) {
    const carPokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const carPokeJson = await carPokeApi.json();
    misPoke.push(carPokeJson);
  }

  const datosPokemon = misPoke.map((poke) => ({
    name: poke.name,
    peso: poke.weight,
    experiencia: poke.base_experience,
    posicion: poke.order,
    tipo: poke.types[0].type.name,
    foto: poke.sprites.other.dream_world.front_default,
  }));

  const gallery$$ = document.querySelector(".principalContainer");

  for (const pokemon of datosPokemon) {
    let contenedorIndividal$$ = document.createElement("div");
    let contsuperior$$ = document.createElement("div");
    let titulo$$ = document.createElement("h2");
    let peso$$ = document.createElement("h3");
    let experiencia$$ = document.createElement("h4");
    let expe_text$$ = document.createElement("p");
    let posicion$$ = document.createElement("h3");
    let posi_text$$ = document.createElement("p");
    let tipo$$ = document.createElement("h3");
    let foto$$ = document.createElement("img");

    titulo$$.innerText = pokemon.name;
    peso$$.innerText = pokemon.peso;
    experiencia$$.innerText = pokemon.experiencia;
    expe_text$$.innerText = "Experiencia";
    posicion$$.innerText = pokemon.posicion;
    tipo$$.innerText = pokemon.tipo;

    contenedorIndividal$$.setAttribute("class", "carta");
    contsuperior$$.setAttribute("class", "superior");
    titulo$$.setAttribute("class", "tittle_card");
    experiencia$$.setAttribute("class", "experiencia");
    expe_text$$.setAttribute("class", "expe_text");
    posicion$$.setAttribute("class", "posicion");
    foto$$.src = pokemon.foto;
    foto$$.alt = pokemon.name;
    foto$$.setAttribute("class", "foto");

    contsuperior$$.appendChild(posicion$$);
    contsuperior$$.appendChild(expe_text$$);
    contsuperior$$.appendChild(experiencia$$);

    contenedorIndividal$$.appendChild(contsuperior$$);
    contenedorIndividal$$.appendChild(posi_text$$);
    contenedorIndividal$$.appendChild(tipo$$);
    contenedorIndividal$$.appendChild(foto$$);
    contenedorIndividal$$.appendChild(titulo$$);

    gallery$$.appendChild(contenedorIndividal$$);
  }
};

getPoke();
