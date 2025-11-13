let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: "Rodolfo", number: "(19) 99589-6092" },
  { name: "Paulo", number: "(19) 99579-6092" },
  { name: "Aline", number: "(19) 99559-6092" },
  { name: "Maria", number: "(19) 99549-6092" },
];

function search() {
  for (let i = 0; i < contacts.length; i++) {
    if (input.value.toLocaleLowerCase() === contacts[i].name.toLowerCase()) {
      p.innerHTML = `Contato encontrado - Nome: ${contacts[i].name} tel: ${contacts[i].number}`;
      break;
    } else {
      p.innerHTML = "Contato não encontrado, tente novamente";
    }
  }
}
