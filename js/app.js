var a = prompt ("Son Kirting");
let res = a % 2 == 0
console.log(res);



let num  = prompt ("Son Kirting");


if ((num <= -10 && num >= -99)|| (num >= 10 && num <= 99)){
    console.log("Son Ikki Xonali");
}else{
    console.log("Son Ikk Xonali Emas");
}




let m = prompt ("Nomingizni Kirting");

switch (m) {
    case "O'quvchi":
        console.log("O'quvchi Kirdi");
        break
    case "O'qtuvchi":
        console.log("O'qtuvchi Kirdi");
        break
        default :
        console.log("Begana Kirptyu");
}


let v = prompt("Sumangizni Kirting");


if (v <= 100 && v >= 500){
    alert ("Alisher Aka Bizda Hozir Harajatlar Kop")
}else if (v >= 500 && v <= 700) {
    alert ("Alisher Aka Bizga Hozir Yana 500$ Yetmayapti Sabir Qiling")
}else if (v >= 700 && v <= 1200){
    alert ("Alisher Aka Oq Yo'li Sizga")
}else if (v >= 1200 && v >= 1300) {
    alert ("Alisher Aka Siz Hozir 100$ Ortiqcha Berdingiz Oq yo'l")
}else{
    alert ("Alisher Aka Bizda Yetarlicha Pul Yo'q")
}


