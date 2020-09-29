import React, { useState } from "react";

const GenInfo = (prop) => {
  const name = useState("Eric Pham");
  const email = useState("erc.pham@gmail.com");
  const phoneNumber = useState("714-880-5384");

  return (
    <div>
      <ul>
        <li>Name: {name[0]}</li>
        <li>Email: {email[0]}</li>
        <li>Phone Number: {phoneNumber[0]}</li>
      </ul>
      <button>Edit Section</button>
      <InfoForm name={name} email={email} phoneNumber={phoneNumber}/>
    </div>
  );
};

const InfoForm = (prop) => {
  const changeName = useState("");
  const changePhone = useState("");
  const changeEmail = useState("");

  const handleSubmit = (event) => {
    if (changeName[0] !== "") prop.name[1](changeName[0]);
    changeName[1]("");
    if (changePhone[0] !== "") prop.phoneNumber[1](changePhone[0]);
    changePhone[1]("");
    if (changeEmail[0] !== "") prop.email[1](changeEmail[0]);
    changeEmail[1]("");
    event.preventDefault();
  }

  const handleNameChange = (event) => {
    changeName[1](event.target.value);
  }

  const handlePhoneChange = (event) => {
    changePhone[1](event.target.value);
  }

  const handleEmailChange = (event) => {
    changeEmail[1](event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" key="namebox" defaultValue={changeName[0]} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="text" key="emailbox" defaultValue={changeEmail[0]} onChange={handleEmailChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" key="phonebox" defaultValue={changePhone[0]} onChange={handlePhoneChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default GenInfo;
