import React, { useEffect, useState } from "react";
import Pet from "../components/Pet";
import useBreedList from "../../hooks/useBreedList";
import Result from "../components/Result";

const ANIMALS = ["cat", "dog", "bird"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const breeds = useBreedList(animal)[0];

  useEffect(() => {
    fetchPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPets() {
    let res =
      location && animal
        ? await fetch(
            `http://localhost:3000/pets?animal=${animal}&location=${location}`
          )
        : await fetch(`http://localhost:3000/pets`);
    const fetchedPets = await res.json();

    setPets(fetchedPets);
  }

  function sanitizeInput(query) {
    return query.trim().toLowerCase();
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(sanitizeInput(e.target.value))}
        />
        <label htmlFor="animal">Animal</label>
        <select id="animal" onChange={(e) => setAnimal(e.target.value)}>
          <option />
          {ANIMALS.map((animal, index) => (
            <option key={index + animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={!breeds.length}
          onChange={(e) => setBreed(sanitizeInput(e.target.value))}
        >
          <option />
          {breeds.map((breed, index) => (
            <option key={breed + index}>{breed}</option>
          ))}
        </select>
        <button>submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
