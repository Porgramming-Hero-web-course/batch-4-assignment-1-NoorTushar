class Car {
   constructor(
      public make: string,
      public model: string,
      public year: number
   ) {}

   getCarAge(): number {
      return new Date().getFullYear() - this.year;
   }
}
