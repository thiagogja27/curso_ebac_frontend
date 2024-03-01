function Veiculo(proprietario, marca, modelo){
    this.proprietario=proprietario;
    this.marca=marca;
    this.modelo = modelo;
    this.acelerar= function(){
        console.log("Acelerandoo!!");
    }
}


function Carro( proprietario){
    Veiculo.call(this,proprietario,"citroen","c3" )
}

function Moto(proprietario){
    Veiculo.call(this,proprietario,"honda", "biz")
}

const veiculo1= new  Veiculo ("thiago","citroen","c3");
const veiculo2= new  Carro ("pedro","fiat","cronos");
const veiculo3= new  Moto ("thais","honda","biz");


console.log(veiculo1);
veiculo1.acelerar();

console.log(veiculo2);
veiculo2.acelerar();

console.log(veiculo3);
veiculo3.acelerar();