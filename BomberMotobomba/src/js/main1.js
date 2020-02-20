var bomberos = [];
var motobombas = [];
var idisB = [];
var idisM = [];
var idbomba = 0;
var idmoto = 1111;
var conte1 = document.getElementById("conte1");
var conte2 = document.getElementById("conte2");


document.getElementById("agregarBombero")
    .addEventListener("click", function() {
        document.getElementById("conte1").innerHTML = "";
        idisB = [];
        let nom = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;
        if (nom === "") {
            alert("Debe ingresar un nombre");
        } else if (fecha === "") {
            alert("Debe ingresar una fecha");
        } else if (fecha === "" && nom === "") {
            alert("Debe ingresar un nombre y una fecha");
        } else {
            let bomber = new Bombero(nom, fecha);
            bomberos.push(bomber);
            document.getElementById("nombre").value = "";
            document.getElementById("fecha").value = "";
        }
        dibujarBombero();
        marcarVariosBomberos();
    });

document.getElementById("agregarMotobomba")
    .addEventListener("click", function() {
        document.getElementById("conte2").innerHTML = "";
        idisM = [];
        let codigo = document.getElementById("codigo").value;
        if (codigo === "") {
            alert("Debe ingresar un código");
        } else {
            let motobomb = new Motobomba(codigo);
            motobombas.push(motobomb);
            document.getElementById("codigo").value = "";
        }
        dibujarMotobomba();
        marcarVariasMotobombas();
    });

document.getElementById("btnaso")
    .addEventListener("click", function() {
        console.log("holas");
        asociar();

    });
dibujarBombero = () => {
    for (let i = 0; i < bomberos.length; i++) {
        let celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = idbomba;
        idisB.push(celda.id);
        idbomba++;
        celda.appendChild(document.createTextNode(bomberos[i].nombre));

        conte1.appendChild(celda);

    }
}


dibujarMotobomba = () => {
    for (let j = 0; j < motobombas.length; j++) {
        let celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = idmoto;
        idisM.push(celda.id);
        idmoto++;
        celda.appendChild(document.createTextNode(motobombas[j].codigo));
        conte2.appendChild(celda);

    }
}

marcarVariosBomberos = () => {
    for (let d = 0; d < idisB.length; d++) {
        marcaNumeroB(d);
    }

}

marcaNumeroB = (d) => {
    let no = document.getElementById(idisB[d]);
    let f = document.getElementById(idisB[d]).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function() {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "green";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") {} else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}
marcarVariasMotobombas = () => {
    for (let c = 0; c < idisM.length; c++) {
        marcaNumeroM(c);
    }

}

marcaNumeroM = (c) => {
    let no = document.getElementById(idisM[c]);
    let f = document.getElementById(idisM[c]).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function() {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "green";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") {} else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}
asociar = () => {
    console.log("entro");
    for (let i = 0; i < idisM.length; i++) {
        if (idisM[i].style.backgroundColor === "green") {
            for (let j = 0; j < idisB.length; j++) {
                if (idisB[j].style.backgroundColor === "green") {
                    motobombas[i].bombero.push(bomberos[j]);
                }
            }
        }

    }
}