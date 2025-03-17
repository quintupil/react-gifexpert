//import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  //console.log({ images, isLoading });
  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>

      {/*isLoading ? <h2>Cargando...</h2> : null*/}

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {/*images.map((image) => (
          <li key={image.id}>{image.title}</li>
        ))*/}

        {/*images.map(({ id, title }) => (
          <GifItem key={id} title={title}></GifItem>
        ))*/}

        {images.map((image) => (
          <GifItem key={image.id} {...image}></GifItem>
        ))}
      </div>
    </>
  );
};
