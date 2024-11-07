class Car {
   public make: string;
   public model: string;
   public year: number;

   constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
   }

   getCarAge(): number {
      return new Date().getFullYear() - this.year;
   }
}
