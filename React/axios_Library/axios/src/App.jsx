import "./App.css";
import axios from "axios";

function App() {
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
    console.log("status", response.status);
    console.log("headers", response.headers);
    console.log("config", response.config);
    console.log("request", response.request);
  }

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
export default App;
