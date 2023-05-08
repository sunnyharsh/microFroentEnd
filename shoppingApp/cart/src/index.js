import faker from "faker";

let cartString = `<div>you have ${faker.datatype.number(
  20
)} item in cart!</div>`;

document.querySelector("#cart-list").innerHTML = cartString;
