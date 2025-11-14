let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: "Rodolfo", number: "(19) 99589-6092" },
  { name: "Paulo", number: "(19) 99579-6092" },
  { name: "Aline", number: "(19) 99559-6092" },
  { name: "Maria", number: "(19) 99549-6092" },
];

function search() {
  //   for (let i = 0; i < contacts.length; i++) {
  for (const contatos of contacts) {
    if (input.value.toLocaleLowerCase() === contatos.name.toLowerCase()) {
      p.innerHTML = `Contato encontrado - Nome: ${contatos.name} tel: ${contatos.number}`;
      break;
    } else {
      p.innerHTML = "Contato não encontrado, tente novamente";
    }
  }
}
