import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1> no pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            image={pet.image}
            location={pet.location}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Result;
