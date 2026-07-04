function evenOrOdd(num) {
     return num % 2 === 0 ? "even" : "odd";
   }

   for (let i = 1; i <= 10; i++) {
     console.log(`${i} is ${evenOrOdd(i)}`);
   }
