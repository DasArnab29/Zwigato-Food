import React from "react";
import { useEffect } from "react";
function Body() {
  useEffect(() => {
    getCardDetails();
  }, []);

  async function getCardDetails() {
    let fetchInfo = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9068768&lng=77.5296963&carousel=true&third_party_vendor=1"
    )
      .then((resp) => resp.json())
      .then((resp) => resp)
      .catch((err) => alert("Something went wrong " + err));

    console.log(fetchInfo);

    return fetchInfo;
  }

  return <div>Hello Body</div>;
}

export default Body;
