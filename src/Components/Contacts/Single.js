import React, { Component } from "react";
import "./styles.css";
import male from "./icons/mars.png";
import female from "./icons/femenine.png";
import unknown from "./icons/question-mark.png";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

const Single = (props) => {
  const currentContact = contacts.find(
    (cont) => cont.firstName === props.match.params.firstName
  );

  let gender = "";
  console.log(currentContact.gender);
  if (currentContact.gender === "male") {
    gender = "чоловіча";
  } else {
    if (currentContact.gender === "female") {
      gender = "жіноча";
    } else {
      gender = "невідома";
    }
  }
  return (
    <div className="card">
      <p className="card__name">Ім'я: {currentContact.firstName}</p>
      <p className="card__name">Прізвище: {currentContact.lastName}</p>
      <p className="card__name">Стать: {gender}</p>
      <p className="card__name">телефон: {currentContact.phone}</p>
    </div>
  );
};

export default Single;
