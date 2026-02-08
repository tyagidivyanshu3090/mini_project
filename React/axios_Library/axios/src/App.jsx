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
  };

  async function fetchData() {
    const response = await axios(config);
    console.log(response.data);
  }

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
export default App;
