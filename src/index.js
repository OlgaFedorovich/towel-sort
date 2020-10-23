
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(matrix === undefined) return [];

  let newArray = [];

  matrix.forEach(function(array, index) {
    

    if(index % 2 !== 0) {
      array.reverse();
    }

    newArray = newArray.concat(array);
    return newArray;
  });

  //matrix.flat();
  console.log(newArray);


  return newArray;
}
