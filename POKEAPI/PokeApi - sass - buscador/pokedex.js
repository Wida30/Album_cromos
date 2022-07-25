
const misPoke = [];

const getPoke = async () => { 
  for (let i = 1; i < 150; i++) {
    const carPokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const carPokeJson = await carPokeApi.json();
    misPoke.push(carPokeJson); 
    pintarcartas(misPoke)
    
  }
 
    
};



const misPokeMapeados = (misPoke) => {

  const DatosPoke = misPoke.map((pokemon) => ({
    nombre: pokemon.name,
    orden: pokemon.order,

    
  }));
  console.log(DatosPoke)
  //pintarcartas(DatosPoke)

};



// const todoCartas$$ = document.querySelector(".principalContainer")

// const pintarcartas = (array) =>{

//   for (const poke of array) {

    
//    const misCartas$$="";
   
//    misCartas$$.innerHTML = `

//     <div class ="proximamente">
//       <h2>${poke.name}</h2>

//      <img src ="${poke.orden}" class = "img_prox" id ="${poke.name}"/> 
//     </div>
  
//   `;
//   todoCartas$$.appendChild(misCartas$$);
    
//   }

// }




getPoke();

