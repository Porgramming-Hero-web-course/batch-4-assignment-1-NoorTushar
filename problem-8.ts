function validateKeys<T extends object>(obj: T, keys: (keyof T)[]) {
   let allKeysFound = true;

   keys.forEach((key) => {
      if (!(key in obj)) {
         allKeysFound = false;
      }
   });

   return allKeysFound;
}
