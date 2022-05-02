import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "./AddEdit.css";
const initialState = {
  name: "",
  email: "",
  cno: "",
};
const AddEdit = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { name, email, cno } = initialState;

  const handleSubmit = (e) => {
    e.preventDefault();    
    // if (!name || !email || !cno) {
    //   toast.error("Please fill correct details");
    // } else {
      addContact(state);
      navigate("/");
    // }
  };
  const addContact = async (data) => {
    const res = await axios.post("http://localhost:5001/user", data);
    if (res.status === 200) {
      toast.success(res.data);
      // console.log(res.data);
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div
      className="container mt-4"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <Form
        style={{
          border: "2px solid gray",
          borderRadius: "2rem",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "25%",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group
          className="mb-3"
          style={{ width: "50%", marginLeft: "20%" }}
          controlId="formBasicEmail"
        >
          <h1
            className="text-center mt-4"
            style={{
              marginLeft: "3rem",
              marginBottom: "2rem",
            }}
          >
            User Data
          </h1>
          <Form.Control
            type="text"
            value={state.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          style={{ width: "50%", marginLeft: "20%" }}
        >
          <Form.Control
            type="text"
            value={state.email}
            onChange={handleInputChange}
            name="email"
            placeholder=" Email"
          />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ width: "50%", marginLeft: "20%" }}
          >
          <Form.Control
            type="text"
            value={state.cno}
            onChange={handleInputChange}
            name="cno"
            placeholder="Enter contact"
          />
        </Form.Group>
        <br />

        <Button
          variant="dark"
          size="lg"
          type="submit"
          style={{ marginLeft: "30%", marginBottom: "2rem", width: "30%" }}
        >
          Add
        </Button>
      </Form>
    </div>

   
  );
};

export default AddEdit;
