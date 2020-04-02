let data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 }
];

let interestData = data.map(run => {
  let newData = {};

  newData.principal = run.principal;
  newData.time = run.time;

  if (run.principal >= 2500 && run.time > 1 && run.time < 3) {
    newData.rate = 3;
  } else if (run.principal >= 2500 && run.time >= 3) {
    newData.rate = 4;
  } else if (run.principal < 2500 || run.time <= 1) {
    newData.rate = 1;
  }

  newData.interest = (run.principal * run.time * newData.rate) / 100;
  return newData;
});

console.log(interestData);
