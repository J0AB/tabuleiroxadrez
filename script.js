let size = parseInt(prompt("Qual o tamanho do Tabuleiro?"));

let string = ""
for (let i = 1; i <= size; i++) {
  for(let j = 1; j <= size; j++) {
    if((i + j) % 2 === 0) {
      string += " ";
    } else {
      string += "#";
    }
  } 
  string += "\n"
}

console.log(string)