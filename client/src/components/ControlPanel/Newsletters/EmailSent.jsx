import React from "react";
import Button from "@material-ui/core/Button";

const EmailSent = ({ email }) => {
  console.log(email);
  return (
    <div>
      <h3>{email._id}</h3>
    </div>
  );
};

export default EmailSent;
