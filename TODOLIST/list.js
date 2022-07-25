const cosasNuevas$$ = document.querySelector(".nuevo_input");
const añadir$$ = document.querySelector(".boton");
const lista$$ = document.querySelector(".listado_general");

const añadir_tarea = () => {

    const borrar_tarea = () => {
        creaLi$$.remove();
      };


  const creaLi$$ = document.createElement("li");
  const creaP$$ = document.createElement("p");
  const botoncito$$ = document.createElement("button");

  creaP$$.textContent = cosasNuevas$$.value;
  botoncito$$.textContent = "Hecho";
  botoncito$$.addEventListener("click", borrar_tarea);

  creaLi$$.appendChild(creaP$$);
  creaLi$$.appendChild(botoncito$$);
  lista$$.appendChild(creaLi$$);

  cosasNuevas$$.value=``

};



//document.body.appendChild(lista$$)
