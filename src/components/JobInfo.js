import React, { useState } from "react";

const JobInfo = () => {
  const removeJob = (key) => {
    setJobs(
      jobs => jobs.filter((el) => {
        return el.key !== key;
      })
    );
  };
  const [jobKey, setJobKey] = useState(1);
  const [jobs, setJobs] = useState([
    <Job
      key="job0"
      ident="job0"
      company="Parker Aerospace"
      title="Intern"
      tasks="Aircraft Modeling"
      date="Summer 2018"
      showForm={false}
      removeJob={removeJob}
    />,
  ]);

  const handleClick = () => {
    setJobs(
      jobs.concat([
        <Job
          showForm={true}
          key={`job${jobKey}`}
          ident={`job${jobKey}`}
          removeJob={removeJob}
        />,
      ])
    );
    setJobKey(jobKey => jobKey + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Job</button>
      {jobs.map((job) => job)}
    </div>
  );
};

const Job = (props) => {
  const company = useState(props.company);
  const title = useState(props.title);
  const tasks = useState(props.tasks);
  const date = useState(props.date);
  const [showForm, setShowForm] = React.useState(props.showForm);

  return (
    <div className="fillScreen">
      {showForm ? (
        <JobInfoForm
          company={company}
          title={title}
          tasks={tasks}
          date={date}
          setShowForm={setShowForm}
        />
      ) : (
        <div>
          <ul>
            <li>Company: {company[0]}</li>
            <li>Title: {title[0]}</li>
            <li>Tasks: {tasks[0]}</li>
            <li>Dates Worked: {date[0]}</li>
          </ul>
          <button onClick={() => setShowForm(!showForm)}>Edit Job Info</button>
          <button
            onClick={() => {
              props.removeJob(props.ident);
            }}
          >
            Remove Job
          </button>
        </div>
      )}
    </div>
  );
};

const JobInfoForm = (props) => {
  const changeCompany = useState(props.company[0]);
  const changeTitle = useState(props.title[0]);
  const changeTasks = useState(props.tasks[0]);
  const changeDate = useState(props.date[0]);

  const handleSubmit = (event) => {
    if (changeCompany[0] !== "") props.company[1](changeCompany[0]);
    changeCompany[1]("");
    if (changeTitle[0] !== "") props.title[1](changeTitle[0]);
    changeTitle[1]("");
    if (changeTasks[0] !== "") props.tasks[1](changeTasks[0]);
    changeTasks[1]("");
    if (changeDate[0] !== "") props.date[1](changeDate[0]);
    changeDate[1]("");
    props.setShowForm(false);
    event.preventDefault();
  };

  const handleCompanyChange = (event) => {
    changeCompany[1](event.target.value);
  };

  const handleTitleChange = (event) => {
    changeTitle[1](event.target.value);
  };

  const handleTasksChange = (event) => {
    changeTasks[1](event.target.value);
  };

  const handleDateChange = (event) => {
    changeDate[1](event.target.value);
  };
  return (
    <form className="genInfoForm" onSubmit={handleSubmit}>
      <label htmlFor="company">Company:</label>
      <input
        id="company"
        type="text"
        key="companybox"
        defaultValue={changeCompany[0]}
        onChange={handleCompanyChange}
      />
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        key="titlebox"
        defaultValue={changeTitle[0]}
        onChange={handleTitleChange}
      />
      <label htmlFor="tasks">Tasks:</label>
      <input
        id="tasks"
        type="text"
        key="tasksbox"
        defaultValue={changeTasks[0]}
        onChange={handleTasksChange}
      />
      <label htmlFor="date">Dates Worked:</label>
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

export default JobInfo;
