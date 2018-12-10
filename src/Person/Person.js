import React from "react";

const Person = props => {
  return (
    <div>
      <p>I'm a Person</p>
      <p>{props.children}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
