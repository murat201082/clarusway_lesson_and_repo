//conditions
/* let score = +prompt('lütfen notunuzu giriniz');

let grade = score >= 50; 
if (grade) {
    console.log("tebrikler geçtiniz");
    document.write('Tebrikler geçtiniz :)')
    
}
else{
    console.log('kaldınız');
    document.write('Ne yazık ki Kaldınız :(')
} */
/*  let score = +prompt('lütfen notunuzu giriniz');
if (score>80) {
    console.log('Tebrikler çok başarılı bir öğrencisiniz');
    document.write('Tebrikler çok başarılı bir öğrencisiniz')
}
else if (score>=50) {
    console.log('Geçtiniz');
    document.write('Geçtiniz')
}
else{
    console.log('Üzgünüm Kaldınız');
    document.write('Üzgünüm Kaldınız')
} */ 

/* let score = +prompt('lütfen notunuzu giriniz');

if (score>=50)     

    if (80 < score ) {
        console.log('Tebrikler very good geçtiniz');
        document.write('Tebrikler very good geçtiniz');
    }
    else{
        console.log('geçtiniz');
        document.write('geçtiniz');
    }
else{
    console.log('kaldınız');
    document.write('kaldınız')
}
   
 */
/* let score = 56
score >51 ? console.log('tebrikler') : console.log('kaldınız'); */
/* let score = 30;
score >=80 ? console.log('tebrikler'): (score>=50 ? console.log('good'): (score >=20 ? console.log('heyyo') : console.log('beyyo')));
 */   

//ternary if
/* var score = 51;
score >= 50 ? console.log('Tebrikler geçtiniz'): console.log('Üzgünüm Kaldınız'); */
/* var score = 80;
score >= 80 ? console.log('Tebrikler çok başarılı bir öğrencisiniz') :
(score >= 50 ? console.log('Tebrikler geçtiniz'): console.log('Üzgünüm Kaldınız')); */
//? soru işareti if statements ı temsil ediyor.

/* var text;
var fruits = 'APPLE';
switch (fruits.toLowerCase()) {
    case "banana":
        text = "Banana is good"
     break;
    case "lime":
    case "lemon":
    case "orange":
        text = "I am not a fan of orange.";
    break;
    case "apple":
        text = "How you like them apples?";
    break;
    default:
        text = "I have never heard of that fruit...";
        break;
}
console.log(text);
 */
//pazartesi ,çarşamba ve perşembe in class, salı cuma workshop, pazar tatil default yanlış gün ismi girildi.
/* var text ;
var gun =prompt('Lütfen hangi günde olduğunuzu seçiniz');
switch (gun.toLowerCase()) {
    case "pazartesi":
        text = "İn Class"
     break;
   
    case "salı":
        text = "Workshop";
    break;
    case "carsamba":
        text = "İn Class";
    break;
    
    case "persembe":
        text = "İn Class";
    break;
    
    case "cuma":
        text = "Workshop";
    break;
   
    case "cumartesi":
        text = "İn Class";
    break;
      
    default:
        text = "I have never heard of that day :)";
        break;
} */
/* console.log(text); */

/* var text ;
var days = prompt('Enter day :')
switch (days.toLowerCase()) {
    case "monday":
    case "wednesday" :
    case "thursday" :
    case "saturday" :
        text ="in-class" ;
        break;
    case "tuesday" :
    case "friday" :
        text = "team work" ;
        break;
    case "sunday" :
        text = "sunday is empty day";
    default :
        text= "wrong day" ;
        break;
}
console.log(text);
 */
/* var year = 2159;
var month = 2;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}
console.log(dayCount); // 29 */
/* let text;
let meyve = prompt('lütfen meyve giriniz')
switch (meyve.toLowerCase()) {
    case 'muz':
        text = 'bildin';
        
        break;
    case 'armut':
        text='evet armut suludur ';
        
        break;
    case 'vişne':
        text='vişne suyu güzeldir';
        
        break;
    case 'şeftali':
        text='nektarini de olur';
        
        break;
            

    default:
        text='bunlardan hiçbirisi değil';
        break;
}
console.log(text); */
/* let gun ;
let sayı = prompt('lütfen hangi gün giriniz')
switch (sayı.toLowerCase()) {
    case 'pazartesi':
        gun='pazartesi giydim fesi';
        
        break;
    case 'salı':
        gun='sallanır';
        break;
    case 'çarşamba':
        gun= 'çarşafa dolanır';
        break;
    case 'perşembe':
        gun='perperdir';
        break;
    case 'cuma':
        gun = 'mübarek gün';
        break
    case 'cumartesi':
    case 'pazar':
        gun = 'tatil';
        break
    default:
        gun= 'böyle bir gün yok';
        break;
}
document.write(gun) */