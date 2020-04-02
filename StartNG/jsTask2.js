let data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 }
];

let interestData = data.map(interestCalculator => {
  let newData = {};

  newData.principal = interestCalculator.principal;
  newData.time = interestCalculator.time;

  if (
    interestCalculator.principal >= 2500 &&
    interestCalculator.time > 1 &&
    interestCalculator.time < 3
  ) {
    newData.rate = 3;
  } else if (
    interestCalculator.principal >= 2500 &&
    interestCalculator.time >= 3
  ) {
    newData.rate = 4;
  } else if (
    interestCalculator.principal < 2500 ||
    interestCalculator.time <= 1
  ) {
    newData.rate = 1;
  }

  newData.interest =
    (interestCalculator.principal * interestCalculator.time * newData.rate) /
    100;
  return newData;
});

console.log(interestData);
