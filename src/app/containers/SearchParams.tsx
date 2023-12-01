import React, { useContext, useState } from "react";
import useBreedList from "../../hooks/useBreedList";
import Result from "../components/Result";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../../api/fetchSearch";
import AdoptedPetContext from "../../context/AdoptPetContext";
import { Animal } from "../../model/APIResponseTypes";

const ANIMALS: Animal[] = ["cat", "dog", "bird"];
const SearchParams = () => {
  const [animal, setAnimal] = useState("" as Animal);
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const breeds = useBreedList(animal)[0];

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data;

  const [adoptedPet] = useContext(AdoptedPetContext);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          console.log("formData :", formData);
          const obj = {
            animal: formData.get("animal")?.toString() ?? "",
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
        />
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          onChange={(e) => setAnimal(e.target.value as Animal)}
          name="animal"
        >
          <option />
          {ANIMALS.map((animal, index) => (
            <option key={index + animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select id="breed" disabled={!breeds.length} name="breed">
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
