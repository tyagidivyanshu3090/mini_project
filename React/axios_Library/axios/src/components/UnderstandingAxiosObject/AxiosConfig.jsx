import React from "react";
import axios from "axios";

const AxiosConfig = () => {
  const config = {
    method: "get",
    url: "/posts",
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 1000,
  };

  async function fetchData() {
    const response = await axios(config);
    console.log("data", response.data);
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default AxiosConfig;
