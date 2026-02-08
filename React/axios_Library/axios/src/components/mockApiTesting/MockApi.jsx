import React from "react";
import axios from "axios";

const MockApi = () => {
  const [data, setData] = React.useState([]);
  const [formDetails, setFormDetails] = React.useState({
    name: "",
    age: "",
  });

  const config = {
    baseURL: "https://6988bfcd780e8375a6891398.mockapi.io",
    url: "/user",
    method: "get",
  };

  async function fetchData() {
    const response = await axios(config);
    console.log(response.data);
    setData(response.data);
  }

  async function postData() {
    const response = await axios({
      method: "post",
      url: "https://6988bfcd780e8375a6891398.mockapi.io/user",
      data: {
        name: "Divyanshu",
        age: 20,
      },
    });
    console.log(response.data);
  }

  return (
    <>
      <div>
        <h1>Form Details</h1>
        <form>
          <input type="text" placeholder="Enter Name" />
          <input type="number" placeholder="Enter Age" />
        </form>
      </div>
      <div>
        <h1>Mock Api Testing</h1>
        <button onClick={fetchData}>Fetch Data</button>
        <button onClick={postData}>Post Data</button>
      </div>

      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              margin: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p>{item.name}</p>
            <p>{item.age}</p>
          </div>
        );
      })}
    </>
  );
};

export default MockApi;
