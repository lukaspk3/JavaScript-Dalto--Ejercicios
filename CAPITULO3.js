/* class celular{
    constructor(color, peso, rdp, rdc,mr){
        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=rdp;
        this.resolucionCamara=rdc;
        this.memoriaRam=mr;
        this.encender=false;
    }


prender (){
    if (this.encender==false){
        alert("celular encendido");
        this.encender=true;
    }else {
        alert("celular ya esta encendido");
    }
};

reiniciar (){
    if (this.encender==true) {
        alert("el celular se puede reiniciar");
    }else {
        alert("el celular esta apagado");
    }
};

tomarFotos (){
    alert(`foto tomada en resolucion de ${this.resolucionCamara}`);
};

grabar(){
    alert(`grabar video visualizado en pantalla de ${this.resolucionPantalla}`);
};

mostrarInfo(){
    document.write(`
    Color:${this.color}<br>
    Peso:${this.peso}<br>
    Pantalla:${this.resolucionPantalla}<br>
    Camara:${this.resolucionCamara}<br>
    Memoria Ram:${this.memoriaRam}<br>`
    )
}
}
class celularAltaGama extends celular{
    constructor(color, peso, rdp, rdc,mr,rdce){
        super(color, peso, rdp, rdc,mr);
        this.resolucionCamaraExtra = rdce;
}
grabarVideoLento(){
    alert(`estas grabando en camara lenta`);
}
reconocimientoFacial(){
    alert(`vamos a iniciar un reconocimiento facial`);
}
mostrarInfoAltaGama(){
    document.write(`
    Color:${this.color}<br>
    Peso:${this.peso}<br>
    Pantalla:${this.resolucionPantalla}<br>
    Camara:${this.resolucionCamara}<br>
    Memoria Ram:${this.memoriaRam}<br>
    Resolucion Camara Extra:${this.resolucionCamaraExtra}<br>`);
}
}

celular1=new celular("rojo", "500gr", "5in", "12Mpx", "2GB");
celular2=new celular("verde", "250gr", "5,5in", "11Mpx", "4GB");
celular3=new celular("negro", "300gr", "5,6in", "13Mpx", "1.5GB");

/* 
celular1.prender();
celular2.tomarFotos();
celular3.grabar();

celular1.mostararInfo();
document.write(`<br></br>`);
celular2.mostrarInfo(); 

celular4=new celularAltaGama("rojo", "500gr", "5in", "12Mpx", "2GB","16Mpx");
celular5=new celularAltaGama("negro", "500gr", "5.5in", "12Mpx", "1.5GB","12Mpx");

celular4.mostrarInfoAltaGama();
document.write(`<br></br>`);
celular5.mostrarInfoAltaGama(); */

//APPS

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.encender=false;
        this.reiniciar=false;
        this.instalar=false;
    }
    Abrir(){
        if (this.encender==false && this.instalar == true ) {
            this.encender=true;
            alert(`la app esta abierta`);
        }
    }
    Cerrar(){
        if(this.encender==true){
            this.encender=false;
            alert(`la app esta cerrada`);
        }
    }
    Reiniciar(){
        if(this.reiniciar==false){
            this.reiniciar=true;
            alert(`la app se reinicio`);
        }
    }
    Instalar(){
        if(this.instalar==false){
            this.instalar=true;
            alert(`la app esta instalada`);
        }
    }
    Desinstalar(){
        if(this.instalar==true){
            this.instalar=false;
            alert(`la app esta desinstalada`);
        }
    }
    AppInfo (){
        document.write(`Descargas: ${this.descargas}<br>
                        Puntuacion: ${this.puntuacion}<br>
                        Peso: ${this.peso}<br><br>
                    `)
    }
}

aplicacion1= new App("15000", "10", "1mb");
aplicacion2= new App("10000", "5", "2mb");
aplicacion3= new App("1000", "9", "1.5mb");
aplicacion4= new App("100", "10", "3mb");
aplicacion5= new App("50", "4", "1mb");
aplicacion6= new App("40", "1", "0.5mb");
aplicacion7= new App("30", "2", "1.4mb");





aplicacion1.Instalar();
aplicacion1.Reiniciar();
aplicacion1.Abrir();
aplicacion1.Cerrar();
aplicacion1.Desinstalar();
aplicacion1.AppInfo();
aplicacion2.AppInfo();
aplicacion3.AppInfo();
aplicacion4.AppInfo();
aplicacion5.AppInfo();
aplicacion6.AppInfo();
aplicacion7.AppInfo();