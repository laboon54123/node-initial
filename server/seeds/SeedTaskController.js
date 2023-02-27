export const sujeto = [
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
export const adjetivo = [
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

export const random = (max) => {
  return Math.floor(Math.random() * max);
};

export const fetchLorem = async function () {
  const response = await fetch(
    "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"
  );
  if (response.status === 200) {
    const res = await response.json();
    return res[0];
  } else {
    console.log("No hoy acceso al servidor")
  }
};
//export const loremresponse = await fetchLorem()
