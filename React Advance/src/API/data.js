import { useEffect, useState } from "react";

function data(cur) {
  let [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}.json`
    )
      .then((res) => res.json())
      .then((res) =>
        setdata(res[cur]));
  }, [cur]);
  return data;
}
export default data;