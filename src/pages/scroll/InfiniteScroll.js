import { useEffect, useRef, useState, useCallback } from "react";

export default function InfiniteScroll(props) {
  const { renderListItem, getData, listData, query } = props;

  const [loading, setLoading] = useState(false);

  const pageNumber = useRef(1);
  const observer = useRef(null);

  const lastElementOberver = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        pageNumber.current += 1;
        fetchData();
      }
    });
    if (node) observer.current.observe(node);
  });

  const renderList = useCallback(() => {
    return listData.map((item, index) => {
      if (index === listData.length - 1)
        return renderListItem(item, index, lastElementOberver);
      return renderListItem(item, index, null);
    });
  });

  const fetchData = useCallback(() => {
    setLoading(true);
    getData(query, pageNumber.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {renderList()}
      {loading && "LOADING"}
    </>
  );
}
