import React from "react";
import ContactInput from "../Components/ContactInput";

const Contact = () => {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ContactInput />
    </div>
  );
};

export default Contact;
