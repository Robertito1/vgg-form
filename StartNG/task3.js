let array = [];
compile = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      array.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      array.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      array.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      array.push("gi-oh");
    } else if (i % 2 === 0) {
      array.push("yu");
    } else if (i % 3 === 0) {
      array.push("gi");
    } else if (i % 5 === 0) {
      array.push("oh");
    } else array.push(i);
  }
  return array;
};
compile(100);
console.log(array);

// need to empty arrays in order to call second parameter
array = [];
compile(40);
console.log(array);
