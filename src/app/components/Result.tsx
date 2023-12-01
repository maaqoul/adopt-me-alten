import React from "react";
import { Pet as PetType } from "../../model/APIResponseTypes";

import Animal from "./Animal";

const Result = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets?.length ? (
        <h1> no pets found</h1>
      ) : (
        pets.map((pet) => (
          <Animal
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={pet.location}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Result;
