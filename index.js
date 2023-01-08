// let arr = [5, 4, 3];

// function pythagoras(values) {
//   let newArr = values.sort(function (a, b) {
//     return a - b;
//   });

//   if (newArr[0] ** 2 + newArr[1] ** 2 === newArr[2] ** 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(pythagoras(arr));

// ------------------------------------------------------

// function barTriang(p1, p2, p3) {
//   //your code here
//   // console.log((p1[0]+p2[0]+p3[0])/3,(p1[1]+p2[1]+p3[1])/3)

//   return [(p1[0] + p2[0] + p3[0]) / 3, (p1[1] + p2[1] + p3[1]) / 3];
// }

// console.log(barTriang([4, 2], [12, 2], [6, 10]).length);

// ------------------------------------------------------

// let arr = [1, 4, 5];

// const b = arr.filter((item) => item > 5);

// console.log("🚀 ~ b", b);

// [1, 2, 3, 4].reduce((a, b) => {
//   console.log(a * b, "------a-----");
// //   console.log(b, "------b------");
// });

// let x = [3, 2, 1];

// console.log(x.reduce((a, b) => a / b));

// function grow(x) {
//   return x.reduce((a, b) => a * b);
// }
// console.log(grow([3, 2, 1]));

// function arrayRemove(arr, value) {
//   return arr.filter(function (ele) {
//     return ele != value;
//   });
// }

// // console.log(arrayRemove([1, 2, 3], 2));

function arrayDiff(a, b) {
  var unique = [...new Set(a)];
  console.log(`unique`,unique)

  for (let j = 0; j < b.length; j++) {
    console.log(b[j]);
    // console.log(unique.includes(b[j]), "---------------");
    // console.log(unique.indexOf(b[j]));
    // if (unique.includes(b[j])) {
    //   // return unique.splice(unique.indexOf(b[j]));
    // }
    arrayRemove(unique, 1);

  }
}

console.log(arrayDiff([1, 2, 2, 2, 3], [1, 3]), "======");
// arrayDiff([1, 2, 2, 2, 3], [1, 3]);

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase();
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let index = alphabet.indexOf(char);
    if (index > -1) {
      result += index + 1 + " ";
    }
  }

  return result.trim();
}

const result = alphabetPosition("The sunset sets at twelve o'clock.");
console.log("🚀 ~ result", result);
