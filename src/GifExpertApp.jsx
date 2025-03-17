//Desde versión 17 ya no es necesario importar react
//import React from "react";

//Hook useState si es necesario importarlos
import { useState } from "react";
//import { AddCategory } from "./component/AddCategory";
//import { GifGrid } from "./component/GifGrid";
import { AddCategory, GifGrid } from "./component";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    //Tenemos que usar setCategories si queremos cambiar las categorias.
    //setCategories([...categories, "Naruto"]);

    //setCategories(["Naruto", ...categories]);

    //setCategories((cat) => [...cat, "Naruto"]);

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* <AddCategory onNewCategory={onAddCategory} /> */}

      {/*<AddCategory setCategories={setCategories}/> Vamos a mejorar esta implementación*/}

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* <ol> */}
      {/* {categories.map((category) => (
          <div key={category}>
            <h3 key={category}>{category}</h3>;
            <li key={category}>{category}</li>;
          </div>
        ))} */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* </ol> */}
      {/* Gif Item */}
    </>
  );
};
