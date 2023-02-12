  let countFibonaci:number = 10
    let firstNumb: number = 0
    let secondNumb: number = 1
    let sum:number;
    let rs:number = 1;
    let Rs = (index:number):number =>{
        for (let j = 0; j < index-2; j++) {
            sum = firstNumb + secondNumb;
            firstNumb = secondNumb;
            secondNumb = sum;
            rs +=sum
        }
        return rs;
    }
    Rs(countFibonaci);
  console.log(rs);
