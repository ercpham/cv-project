import React, { useState } from "react";

const GenInfo = (props) => {
  const name = useState("Eric Pham");
  const email = useState("erc.pham@gmail.com");
  const phoneNumber = useState("714-880-5384");
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="fillScreen">
      {showForm ? (
        <GenInfoForm
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          setShowForm={setShowForm}
        />
      ) : (
        <div>
          <ul>
            <li>Name: {name[0]}</li>
            <li>Email: {email[0]}</li>
            <li>Phone Number: {phoneNumber[0]}</li>
          </ul>
          <button onClick={() => setShowForm(!showForm)}>Edit Section</button>
        </div>
      )}
    </div>
  );
};

const GenInfoForm = (props) => {
  const changeName = useState(props.name[0]);
  const changePhone = useState(props.phoneNumber[0]);
  const changeEmail = useState(props.email[0]);

  const handleSubmit = (event) => {
    if (changeName[0] !== "") props.name[1](changeName[0]);
    changeName[1]("");
    if (changePhone[0] !== "") props.phoneNumber[1](changePhone[0]);
    changePhone[1]("");
    if (changeEmail[0] !== "") props.email[1](changeEmail[0]);
    changeEmail[1]("");
    props.setShowForm(false);
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    changeName[1](event.target.value);
  };

  const handlePhoneChange = (event) => {
    changePhone[1](event.target.value);
  };

  const handleEmailChange = (event) => {
    changeEmail[1](event.target.value);
  };
  return (
    <form className="genInfoForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        key="namebox"
        defaultValue={changeName[0]}
        onChange={handleNameChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        key="emailbox"
        defaultValue={changeEmail[0]}
        onChange={handleEmailChange}
      />
      <label htmlFor="number">Phone Number:</label>
      <input
        id="number"
        type="text"
        key="phonebox"
        defaultValue={changePhone[0]}
        onChange={handlePhoneChange}
      />
      <input id="genInfoFormSubmit" type="submit" value="Submit" />
    </form>
  );
};

export default GenInfo;
