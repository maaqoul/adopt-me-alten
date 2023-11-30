import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import fetchPet from "../../api/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Info = () => {
  const { id } = useParams();

  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⌛</h2>
      </div>
    );
  }

  const { name, animal, breed, location, images } = results.data[0];

  return (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location} `}</h2>
        <button>Adopt {name}</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam
          rerum nemo, porro ullam necessitatibus repellat unde quidem pariatur
          recusandae perferendis sed in corporis quis reiciendis. Officia
          obcaecati adipisci praesentium?
        </p>
      </div>
    </div>
  );
};

export default function InfoWithError(props) {
  return (
    <ErrorBoundary>
      <Info {...props} />
    </ErrorBoundary>
  );
}
