import { pool } from "../db.js";
import { sujeto, adjetivo, random, fetchLorem } from "./SeedTaskController.js";


export const seedTask = async function(max){
  let n=0
  while (n < max) {
    n++;
    const loremresponse = await fetchLorem()
    const title =
      sujeto[random(sujeto.length)] +
      adjetivo[random(adjetivo.length)];
  
    const [post] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES(?,?)",
      [title, loremresponse]
    );
  
    console.log(`grabaste la tarea: ${title}`);
  }
  console.log("operacioon terminada");
}



