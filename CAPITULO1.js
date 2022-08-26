var dineroRoberto;
dineroRoberto = prompt("Roberto, Cuanto dinero tenes?");

var dineroPedro;
dineroPedro = prompt("Pedro, Cuanto dinero tenes?");

var dineroCofla;
dineroCofla = prompt("Cofla, Cuanto dinero tenes?");

//Roberto
if (dineroRoberto>=2.9) {
    alert ("Compra potecito de helado con confites o Pote de 1/4 KG");
}
else if (dineroRoberto>=1.8) {
    alert ("Compra Helardo");
}
else if (dineroRoberto>=1.7) {
    alert ("Compra Helardovich");
}
else if (dineroRoberto>=1.6) {
    alert ("Compra Heladix");
}
else if (dineroRoberto>=1) {
    alert ("Compra Helado de crema");
}
else if (dineroRoberto>=0.6) {
    alert ("Compra Helado de agua");
}
else {
    alert ("No te alcanza para nada, POBRE");
}

//Pedro
if (dineroPedro>=2.9) {
alert ("Compra potecito de helado con confites o Pote de 1/4 KG");
}
else if (dineroPedro>=1.8) {
    alert ("Compra Helardo");
}
else if (dineroPedro>=1.7) {
    alert ("Compra Helardovich");
}
else if (dineroPedro>=1.6) {
    alert ("Compra Heladix");
}
else if (dineroPedro>=1) {
    alert ("Compra Helado de crema");
}
else if (dineroPedro>=0.6) {
    alert ("Compra Helado de agua");
}
else {
    alert ("No te alcanza para nada, POBRE");
}

//Cofla
if (dineroCofla>=2.9) {
    alert ("Compra potecito de helado con confites o Pote de 1/4 KG");
    let vuelto = dineroCofla-2.9;
    alert ("Te sobra "+vuelto);
}
else if (dineroCofla>=1.8) {
    alert ("Compra Helardo");
    let vuelto = dineroCofla-1.8;
    alert ("Te sobra "+vuelto);
}
else if (dineroCofla>=1.7) {
    alert ("Compra Helardovich");
    let vuelto = dineroCofla-1.7;
    alert ("Te sobra "+vuelto);
}
else if (dineroCofla>=1.6) {
    alert ("Compra Heladix");
    let vuelto = dineroCofla-1.6;
    alert ("Te sobra "+vuelto);
}
else if (dineroCofla>=1) {
    alert ("Compra Helado de crema");
    let vuelto = dineroCofla-1;
    alert ("Te sobra "+vuelto);
}
else if (dineroCofla>=0.6) {
    alert ("Compra Helado de agua");
    let vuelto = dineroCofla-0.6;
    alert ("Te sobra "+vuelto);
}
else {
    alert ("No te alcanza para nada, POBRE");
}


