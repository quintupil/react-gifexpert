import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //HOOK useEffect: Nos permite ejecutar efectos secundarios. Se entiende como algún proceso se requiera ejecutar cuando algo suceda.
  //useEffect: Tiene una firma diferente al useState. El useEffect recibe una función y un arreglo de dependencias.
  useEffect(() => {
    getImages(category);
  }, []);
  return {
    images,
    //images: images,
    isLoading,
    //isLoading: isLoading,
  };
};
