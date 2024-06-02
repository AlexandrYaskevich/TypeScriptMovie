import Buyable from "./buyabel"

export default class Movie implements Buyable{
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly englishName: string;
  readonly years: number;
  readonly country: string;
  readonly slogan: string;
  readonly genre: string;
  readonly time: number;
        constructor(id: number, name: string, price: number, englishName: string, years: number, country: string, slogan: string, genre: string, time: number){
            this.id = id;
            this.name = name;
            this.price = price;
            this.englishName = englishName;
            this.years = years;
            this.country = country;
            this.slogan = slogan;
            this.genre =genre;
            this.time: time;  
    }
}