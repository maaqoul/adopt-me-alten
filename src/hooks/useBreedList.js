import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("Loading");
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setStatus("loading");
      setBreedList([]);

      const res = await fetch(`http://localhost:3000/pets?animal=${animal}`);
      const pets = await res.json();

      localCache[animal] = pets.map((pet) => pet.breed) || [];

      setBreedList(localCache[animal]);
      setStatus("done");
    }
  }, [animal]);

  return [breedList, status];
}
