function getArrayParams(...arr){
  let max = Math.max(...arr);
  let min =  Math.min(...arr);
  let avg = 0;
  for (const arg of arr) {
    avg += arg;
  }
  avg = avg / arr.length;
  avg = Number(avg.toFixed(2));
  let sum = {
    min: min,
    max: max,
    avg: avg
  }
  return sum;
}

function summElementsWorker(...arr) {
  let avg = 0;
  for (const arg of arr) {
    avg += arg;
  }
  return avg;
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length > 0) { return 0; }
  let max = Math.max(...arr); 
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length > 0) { return 0; }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length > 0) { return 0; }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  } 
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if(maxWorkResult < max){
      maxWorkResult = max;
    }
  }
  return maxWorkResult;
}
