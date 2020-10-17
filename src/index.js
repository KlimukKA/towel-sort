
// You should implement your task here.

module.exports = function towelSort (matrix)  {
   let result = [];
  if (arguments.length === 0) {
    return result;
  }
  for (let index = 0; index < matrix.length; index++) {
    let innerArray = matrix[index];
    if (index % 2 === 0) {
      result.push(innerArray);
    } else {
      result.push(innerArray.reverse())
    }    
  }

  return result.flat();
}
