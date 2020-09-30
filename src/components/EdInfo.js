import React, { useState } from "react";

const EdInfo = (props) => {
  const school = useState("University of California - San Diego");
  const title = useState("B.S. Computer Science");
  const date = useState("Graduation Date: May 2023");
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="fillScreen">
      {showForm ? (
        <EdInfoForm
          school={school}
          title={title}
          date={date}
          setShowForm={setShowForm}
        />
      ) : (
        <div>
          <ul>
            <li>School: {school[0]}</li>
            <li>Title of Study: {title[0]}</li>
            <li>Date of Study: {date[0]}</li>
          </ul>
          <button onClick={() => setShowForm(!showForm)}>Edit Section</button>
        </div>
      )}
    </div>
  );
};

const EdInfoForm = (props) => {
  const changeSchool = useState(props.school[0]);
  const changeTitle = useState(props.title[0]);
  const changeDate = useState(props.date[0]);

  const handleSubmit = (event) => {
    if (changeSchool[0] !== "") props.school[1](changeSchool[0]);
    changeSchool[1]("");
    if (changeTitle[0] !== "") props.title[1](changeTitle[0]);
    changeTitle[1]("");
    if (changeDate[0] !== "") props.date[1](changeDate[0]);
    changeDate[1]("");
    props.setShowForm(false);
    event.preventDefault();
  };

  const handleSchoolChange = (event) => {
    changeSchool[1](event.target.value);
  };

  const handleTitleChange = (event) => {
    changeTitle[1](event.target.value);
  };

  const handleDateChange = (event) => {
    changeDate[1](event.target.value);
  };
  return (
    <form className="genInfoForm" onSubmit={handleSubmit}>
      <label htmlFor="school">School:</label>
      <input
        id="school"
        type="text"
        key="schoolbox"
        defaultValue={changeSchool[0]}
        onChange={handleSchoolChange}
      />
      <label htmlFor="title">Title of Study:</label>
      <input
        id="title"
        type="text"
        key="titlebox"
        defaultValue={changeTitle[0]}
        onChange={handleTitleChange}
      />
      <label htmlFor="date">Date of Study:</label>
      <input
        id="date"
        type="text"
        key="datebox"
        defaultValue={changeDate[0]}
        onChange={handleDateChange}
      />
      <input id="InfoFormSubmit" type="submit" value="Submit" />
    </form>
  );
};

export default EdInfo;
