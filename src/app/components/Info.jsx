import { useParams } from "react-router";

const Info = () => {
  const { id } = useParams();
  return <h1>{id}</h1>;
};

export default Info;
