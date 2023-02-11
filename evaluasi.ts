// no 1
for (let k = 0; k <= 10; k++) {
    for (let t = 0; t <= 10; t++) {
        if (k <= t) {
            document.write(" + ");
        }
        else {
            document.write(" * ");
        }
    }
    document.write("<br>");
}
// no2
document.write("<br>");
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if (j + i <= 10 || i <= j) {
            document.write(" * ");
        }
        else {
            document.write(" + ");
        }
    }
    document.write("<br>");
}
// no3
document.write("<br>");
for (let x = 5; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
        if (x >= y + 6 || x + y >= 16  ) {
            document.write(" * ");
        }
        else {
            document.write(" + ");
        }
    }
    document.write("<br>");
}
for (let i = 6; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        if (j + i < 10 || i < j) {
            document.write(" * ");
        }
        else {
            document.write(" + ");
        }
    }
    document.write("<br>");
}


// methood array no 4
let animals:any[] = ["lion","elephant","squirrel","eagle","zebra","tiger"]
animals.pop()
animals.shift()
console.log(animals)

// method array no 5
let santri:any[] = ['yusuf','Fatih',  'Fajar','El Ghifari', 'Faqih', 'Ramdhan', 'David', 'Juhadi', 'A Faqih', 'Hilmi', 'Rafi']
santri.sort()
console.log(santri);

// no 6
let mobile:any[] = ['A Faqih', 'David', 'El Ghifari', 'Fajar','Faqih'];

let backend:any[] = ['Arga', 'Ramdhan', 'Luqman', 'Andaru','Aldimas'];

let gabunga:any = mobile.concat(backend)
console.log(gabunga);

// 7
const fruits:any[]=["Banana", "Orange", "Apple", "Mango"];
fruits.toString()
console.log(fruits);
// 8
let animals2:any[] = ["lion", "elephant", "squirrel ", "eagle", "zebra", "tiger"]
animals2.splice(2,3,4)
console.log(animals2);