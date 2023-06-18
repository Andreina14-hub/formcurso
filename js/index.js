const showitems = () => {
  const name = document.getElementById("nombre").value;
  const select = document.getElementById("curso").value;
  const cursos = [
    { name: "html", precio: 1000 },
    { name: "css", precio: 2000 },
    { name: "javascript", precio: 3000 },
    { name: "php", precio: 4000 },
  ];
  const result = cursos.find((curso) => curso.name === select);
  alert(
    `hola! ${name} tu curso ${result.name} tiene un costo de ${result.precio}€`
  );
};
const show = () => {
  const name = document.getElementById("nombre").value;
  const select = document.getElementById("curso").value;
  const phone = document.getElementById("phone").value;
  const cursos = [
    { name: "html", precio: 1000 },
    { name: "css", precio: 2000 },
    { name: "javascript", precio: 3000 },
    { name: "php", precio: 4000 },
  ];
  const result = cursos.find((curso) => curso.name === select);
  const msgValidation = validar(name, phone, result);
  if (msgValidation) {
    alert(msgValidation);
  } else {
    alert(
      ` hola! ${name} tu curso ${result.name} tiene un costo de ${result.precio}€`
    );
  }
};

const validar = (name, phone, curso) => {
  let msg = "";
  if (name == "" || phone == "") {
    msg = "Complete name o phone";
  }
  if (!parseInt(phone)) {
    msg = "el telefono no puede estar en blanco";
  }
  return msg;
};
