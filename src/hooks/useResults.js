import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  //for search
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      // console.log(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  //call searchApi when component
  //is first rendered, BadCode!!
  //searchApi('pasta');
  useEffect(() => {
    searchApi("roma-menlo-park");
  }, []);
  return [searchApi, results, errorMessage];
};
