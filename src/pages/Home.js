import React, { useState, useEffect } from "react";
import Posts from "../components/Posts/";
import axios from "axios";

import { useStateValue } from "../providers/Context";

const Home = () => {
  // const [loading, setLoading] = useState(false);
  const [{ search }] = useStateValue();
  const [state, setState] = useState({
    loading: false,
    data: {}
  });

  // React Hooks https://reactjs.org/docs/hooks-intro.html
  useEffect(() => {
    setState(s => ({ ...s, loading: true }));
    // ES8 Async/Await https://alligator.io/js/async-functions/
    async function fetchAll() {
      const result = await axios(`https://www.reddit.com/r/${search}.json`);

      // You know why this is important ;)
      result.data.data.children = result.data.data.children.filter(
        ele => !ele.data.over_18
      );

      setState(d => ({
        ...d,
        data: {...d.data, [search]: result.data.data }
      }));

      setState((e) => ({ ...e, loading: false }));
    }
    fetchAll();
  }, [search]);

  //<> </> is React Fragments https://reactjs.org/docs/fragments.html#short-syntax
  return (
    <>
      <div style={{ margin: "0 5%" }}>
        <h2>{`/r/${search}`}</h2>
        {state.loading && <h2>Loading...</h2>}
      </div>
      {state.data[search] && state.data[search].children.length > 0 && <Posts posts={state.data[search].children} />}
    </>
  );
}

export default Home;
