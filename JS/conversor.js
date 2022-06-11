class Guitarra{
    constructor(marca, modelo, año, precio, codigo){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.codigo = codigo;
    }

    mostrarDatos(){
        console.log("Marca: " + this.marca + "\nModelo: " + this.modelo + "\nAño: " + this.año + "\nPrecio: " + this.precio + "Codigo: " + this.codigo);
    }
}

function calcularTotal(codigo){

    if (codigo == 1){
        return (guitarra1.precio + guitarra1.precio*0.21); 
    }
    else if(codigo == 2){
        return (guitarra2.precio + guitarra2.precio*0.21);
    }
    else{
        return(guitarra3.precio + guitarra3.precio*0.21);
    }

}

const guitarra1 = new Guitarra("Gibson", "LesPaul", 1984, 1000, 1);
const guitarra2 = new Guitarra("Gibson", "SG", 1978, 1200, 2);
const guitarra3 = new Guitarra("Fender", "Telecaster", 1965, 1900, 3);

let nombre = prompt("Hola, bienvenido! Por favor, ingresa tu nombre: ");
alert = (nombre + ", es un placer que nos elijas");
let eleccion = (prompt("Indicanos en que podemos ayudarte:\n1)Compras\n2)Consultas\n3)Clases\n")).toLowerCase();

if(eleccion == 1 || eleccion == "compras"){
    //En un futuro, envio directo a la seccion de la pagina de productos

    let guitarraElegida = prompt("Ingresa el codigo de la guitarra que elijas!\nGuitarras disponibles:\n\n" + guitarra1.marca + " " + guitarra1.modelo + "\nAño: " + guitarra1.año + "\nPrecio: " + guitarra1.precio + "\nCodigo: " + guitarra1.codigo + "\n\n" + guitarra2.marca + " " + guitarra2.modelo + "\nAño: " + guitarra2.año + "\nPrecio: " + guitarra2.precio +  "\nCodigo: " + guitarra2.codigo + "\n\n" + guitarra3.marca + " " + guitarra3.modelo + "\nAño: " + guitarra3.año + "\nPrecio: " + guitarra3.precio + "\nCodigo: " + guitarra3.codigo + "\n");

    console.log(guitarraElegida);

    let total = calcularTotal(guitarraElegida);
    console.log("El precio total sumados los impuestos es de: U$$" + total);
}
else if(eleccion == 2 || eleccion == "consultas"){
    alert("Para consultas, comunicate directamente a guitarbrand@gmail.com");
}
else if(eleccion == 2 || eleccion == "clases"){
    alert("Proximamente tendremo informacion sobre los dias y horarios de nuestras clases!");
}
else{
    alert("Esa opcion no figura en el menu");
}