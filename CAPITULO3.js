class celular{
    constructor( color, peso, rdp, rdc,mr){
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

mostararInfo(){
    document.write(`
    Color:${this.color}<br>
    Peso:${this.peso}<br>
    Pantalla:${this.resolucionPantalla}<br>
    Camara:${this.resolucionCamara}<br>
    Memoria Ram:${this.memoriaRam}<br>`
    )
}

}

celular1=new celular("rojo", "500gr", "5in", "12Mpx", "2GB");
celular2=new celular("verde", "250gr", "5,5in", "11Mpx", "4GB");
celular3=new celular("negro", "300gr", "5,6in", "13Mpx", "1.5GB");

celular1.prender();
celular2.tomarFotos();
celular3.grabar();

celular1.mostararInfo();