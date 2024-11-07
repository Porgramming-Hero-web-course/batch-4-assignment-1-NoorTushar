const removeDuplicates = (numbers: number[]): number[] => {
   let uniqueArray: number[] = [];

   numbers.forEach((number: number): void => {
      if (!uniqueArray.includes(number)) {
         uniqueArray.push(number);
      }
   });

   return uniqueArray;
};
