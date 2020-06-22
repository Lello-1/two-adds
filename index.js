
// Two adds (20 mins)

// Write a function that adds from two invocations.
// For example: twoAdds(3)(4) -> 7

function twoAdds (num) {
  return function (num1) {
    return num + num1;
  };
}

module.exports = twoAdds;
