import React, { useEffect, useState } from "react";

const ANIMALS = ["cat", "dog", "bird"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const breeds = [];

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    let res =
      location && animal
        ? await fetch(
            `http://localhost:3000/pets?animal=${animal}&location=${location}`
          )
        : await fetch(`http://localhost:3000/pets`);
    const json = await res.json();
    console.log("json :", json);
    setPets(json);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
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
          onChange={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed, index) => (
            <option key={breed + index}>{breed}</option>
          ))}
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
