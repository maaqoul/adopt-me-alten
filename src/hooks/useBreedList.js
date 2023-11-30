import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../api/fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results.data?.map((pet) => pet.breed) ?? [], results.status];
}
