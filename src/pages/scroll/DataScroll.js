import { useState, useCallback, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";
import NavBar2 from "../../components/Navbar2";

function DataScroll() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const controllerRef = useRef(null);

  const handleInput = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const renderItem = useCallback(({ title }, key, ref) => (
    <div ref={ref} key={key}>
      {title}
    </div>
  ));

  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
      try {
        if (controllerRef.current) controllerRef.current.abort();
        controllerRef.current = new AbortController();

        const promise = await fetch(
          "https://openlibrary.org/search.json?" +
            new URLSearchParams({
              q: query,
              page: pageNumber,
            }),
          { signal: controllerRef.current.signal }
        );
        const data = await promise.json();
        console.log(data);
        resolve();
        setData((prevData) => [...prevData, ...data.docs]);
      } catch (e) {
        reject();
      }
    });
  }, []);
  return (
    <>
      <NavBar2 />
      <input type="text" value={query} onChange={handleInput} />

      <InfiniteScroll
        renderListItem={renderItem}
        getData={getData}
        listData={data}
        query={query}
      />
    </>
  );
}

export default DataScroll;
