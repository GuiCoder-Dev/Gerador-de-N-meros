let max;
let min;
let lista = [];
let listaSemRepeticao


//1° parte: Pegar um número entre 6 e 9
let numberVerificar = prompt("Digite un número de 6 a 9");
    if(numberVerificar === ""){
        console.log("digite algo");
    }
    if(numberVerificar < 6 || numberVerificar > 9){
        const arrayVazio = [];
        console.log(`${arrayVazio} [] não é possivel utilizar este número`);
    } 
    else {
        let number;
        number = Number(numberVerificar);1
        pegaNumero(number);
    }

    
    
//gera uma lista de números aleatórios com a qntd q o usuário digitar
function pegaNumero(number) {
  max = 60;
  min = 1;

   for(i = 0; i < number; i++){
   aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
   lista.push(aleatorio);
   }


   //impede a repetição e coloca outro número no lugar
   listaSemRepeticao = new Set(lista);
   
   while(listaSemRepeticao.size < number) {
   aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
   lista.push(aleatorio);
   listaSemRepeticao = new Set(lista);
   } 

   console.log(listaSemRepeticao);

}












