const countWordOccurrences = (sentence: string, searchWord: string): number => {
   const sentenceArr: string[] = sentence.toLowerCase().split(" ");

   console.log({ sentenceArr });

   let count: number = 0;

   sentenceArr.forEach((word: string): void => {
      if (word === searchWord.toLowerCase()) {
         count++;
      }
   });

   return count;
};
