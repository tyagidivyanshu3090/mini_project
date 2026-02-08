import "./App.css";
import axios from "axios";

function App() {
  async function fetchData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(response.data);
  }

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
export default App;
