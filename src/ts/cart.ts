import Movie from "./movie";

export default class Cart {
    private items: Movie[] = [];
    add(item: Movie): void {
        this.items.push(item);
      }

}