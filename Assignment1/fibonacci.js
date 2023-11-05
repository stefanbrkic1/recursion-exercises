//Iterative fibonacci function

function fibs(n) {
  // Set the default numbers sequence [ 0, 1 ]
  let sequence = [0, 1];
  // if n < 0 return error
  if (n < 0) {
    return "Invalid input";
  }
  // if n < 2 return default value up to n
  if (n < 2) {
    return sequence.slice(0, n);
  }
  // else add new fib number to sequence up to n
  while (sequence.length < n) {
    const nextFib =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextFib);
  }
  return sequence;
}

console.log(fibs(8)); // --> [ 0, 1, 1,  2, 3, 5, 8, 13 ]

//Recursive fibonacci function

//Create sequence parameter if no input set to default values
function fibsRec(n, sequence = [0, 1]) {
  // if n < 0 return error
  if (n < 0) {
    return "Invalid input";
  }
  // if n < 2 return default value up to n
  if (n < 2) {
    return sequence.slice(0, n);
  }
  // if sequence is of length n return it
  if (sequence.length === n) {
    return sequence;
  }
  //else add next fib number to sequence and pass sequence recursively
  const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextFib);
  return fibsRec(n, sequence);
}

console.log(fibsRec(8)); // --> [ 0, 1, 1, 2, 3, 5, 8, 13 ]
