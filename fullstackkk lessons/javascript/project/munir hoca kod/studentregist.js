var table = document.getElementById("myTable");

let myArray = ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']



for (let index = 0; index < myArray.length; index++) {
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


    cell1.innerHTML = myArray[index].split(" ")[0];
    cell2.innerHTML = myArray[index].split(" ")[2];
    cell3.innerHTML = myArray[index].split(" ")[3];
    cell4.innerHTML = myArray[index].split(" ")[4];
    cell5.innerHTML = myArray[index].split(" ")[5];

    
}