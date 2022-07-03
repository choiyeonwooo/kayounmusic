import { useEffect, useReducer } from "react";
import config from "../config";

export const useCachedFetch = (url, useCache = true) => {
  const expiry = useCache ? config.CACHE_EXPIRY_HOURS * 60 * 60 : 0;

  const initialState = {
    loading: true,
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return { ...initialState, loading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, loading: false, error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      let cached = localStorage.getItem(url);
      let ts = localStorage.getItem(url + ":ts");

      if (!!cached && !!ts && (Date.now() - ts) / 1000 < expiry) {
        dispatch({ type: "FETCH_SUCCESS", payload: JSON.parse(cached) });
      } else {
        localStorage.removeItem(url);
        localStorage.removeItem(url + ":ts");
        try {
          const response = await fetch(url);
          const data = await response.json();
          localStorage.setItem(url, JSON.stringify(data));
          localStorage.setItem(url + ":ts", Date.now());
          if (cancelRequest) return;
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [expiry, url]);

  return state;
};
