import { pool } from "../db.js";

const sujeto = [
  "el palo ",
  "el gallo ",
  "el perro ",
  "el mamut ",
  "el polocho ",
  "el pato ",
  "el mico ",
  "el enfermo ",
  "el cuaderno ",
  "el paisa ",
];
const adjetivo = [
  "negro",
  "mamon",
  "que caga",
  "se fue a la guerra",
  "bailarin",
  "que habla",
  "que llora",
  "de tu papá",
  "traga piñas",
  "soplete",
];
const description = "trabaloooo";
let n = 0;
while (n < 10) {
  n++;
  const title =
    sujeto[Math.floor(Math.random() * 11)] +
    adjetivo[Math.floor(Math.random() * 11)];

  const [post] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES(?,?)",
    [title, description]
  );

  console.log(`grabaste la tarea: ${title}`);
}

console.log("operacioon terminada");
