import { useParams, Route, Switch } from "react-router-dom";
function GetUrlActive() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return id;
}

export default GetUrlActive;
