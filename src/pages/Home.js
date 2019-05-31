import React, { useState, useEffect } from "react";
import Posts from "../components/Posts/";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  // React Hooks https://reactjs.org/docs/hooks-intro.html
  useEffect(() => {
    setLoading(true);
    // ES8 Async/Await https://alligator.io/js/async-functions/
    async function fetchAll() {
      const result = await axios("https://www.reddit.com/r/all.json");

      // This is work guys :)
      result.data.data.children = result.data.data.children.filter(
        ele => !ele.data.over_18
      );

      setData(d => ({
        ...d,
        all: result.data.data
      }));

      setLoading(false);
    }
    fetchAll();
  }, ["https://www.reddit.com/r/all.json"]);

  //<> </> is React Fragments https://reactjs.org/docs/fragments.html#short-syntax
  return (
    <>
      <div style={{ margin: "0 5%" }}>
        <h2>{"/r/all"}</h2>
        {loading && <h2>Loading...</h2>}
      </div>
      {data.all && data.all.children.length > 0 && <Posts posts={data.all.children} />}
    </>
  );
}

export default Home;
