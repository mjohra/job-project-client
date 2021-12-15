import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [information, setInformation] = useState([]);
  const [sub, setSub] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  console.log(user);

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/profile", data).then(function (response) {
      if (response.data.insertedId) {
        alert("added successfully");
        reset();
        setSub(!sub);
      }
    });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/profile?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, [user.email,sub]);
  console.log(information);
  console.log(user.email);
  return (
    <div>
      <div className="container profile">
        <div className="row mt-5">
          <div className="col-md-7 col-12 pt-5">
            <h1 className="p-5 text-center main-title text-black">
              Updated Profile Information
            </h1>
            {/* {
                information.map(info=>
                    <h1>{info.name}</h1>
                )
            } */}
            <Table className="information" responsive="lg">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Institution</th>
                  <th>Expired Date</th>
                  <th>CGPA/GPA</th>
                  <th>Major</th>
                </tr>
              </thead>
              {information.map((info) => (
                <tbody>
                  {/* console.log(info.name); */}
                  <tr>
                    <td>{info.name}</td>

                    <td>{info.email}</td>
                    <td>{info?.institution}</td>
                    <td>{info.pass}</td>
                    <td>{info.marks}</td>
                    <td>{info.subject}</td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
          <div className="col-md-5 col-12 pt-5 service">
            <h1 className="p-5 text-center main-title text-black">
              Add Profile Information
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                defaultValue={user.displayName}
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="Name"
              />
              <input
                type="email"
                defaultValue={user.email}
                {...register("email", { required: true })}
                placeholder="Email"
              />
              <input
                type="text"
                {...register("institution", { required: true, maxLength: 20 })}
                placeholder="School/College"
              />
              <input
                {...register("pass", { required: true })}
                placeholder="Date Of passing (dd/mm/yyyy)"
              />
              <input
                type="decimal"
                {...register("marks")}
                placeholder="CGPA/GPA"
              />
              <input type="text" {...register("subject")} placeholder="Major" />
              <input
                className="btn-submit fs-5 border-0 rounded-1 fw-bold"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
