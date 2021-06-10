import React from "react";
import "../Components.scss";
import Map from "./Map";
import Form from "./Form";
import ContactDescription from "./ContactDescription";

export default function Contact() {
  return (
    <div>
      <Map />
      <Form />
      <ContactDescription />
    </div>
  );
}
