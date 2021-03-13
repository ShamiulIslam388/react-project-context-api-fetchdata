import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext();

export default function DataProvider(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setPosts(data.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <myContext.Provider value={{ posts }}>{props.children}</myContext.Provider>
  );
}
