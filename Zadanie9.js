
let obiekt1 = {
    nazwa: "Lenovo IdeaPad Slim 3",
    waga: 1620,
    cena: 2500
};

let obiekt2 = {
    nazwa: "Samsung Galaxy S24",
    waga: 167,
    cena: 3000
};

document.write("Obiekt numer 1 nosi nazwę: " + obiekt1.nazwa + "<br>");
document.write("Obiekt numer 2 nosi nazwę: " + obiekt2.nazwa + "<br>");

document.write("Oba obiekty w sumie ważą: " + (obiekt1.waga + obiekt2.waga) + " g" + "<br>");

if (obiekt1.cena > obiekt2.cena) {
    document.write("Droższym z nich jest obiekt nr: 1");
} else {
    document.write("Droższym z nich jest obiekt nr: 2");
}
