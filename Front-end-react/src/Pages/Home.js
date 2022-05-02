import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const res = await axios.get("http://localhost:5001/users");
    if (res.status === 200) {
      setData(res.data);
    }
  };
  console.log("data:", data);
  return (
    <>
      <Table striped bordered hover style={{ marginTop: "3rem" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.cno}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <Button style={{ margin: "2px" }} variant="primary">
                        Edit
                      </Button>
                    </Link>
                    <Link  to={`/view/${item.id}`}>
                      <Button style={{ margin: "2px" }} variant="primary">
                        View
                      </Button>
                    </Link>
              
                      <Button style={{ margin: "2px" }} variant="primary">
                        Delete
                      </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}

export default Home;