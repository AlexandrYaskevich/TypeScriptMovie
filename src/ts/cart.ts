import Movie from "./movie";
import Buyable from "./buyabel";

export default class Cart {
    private _items: Buyable[] = [];
    add(item: Buyable): void {
        this._items.push(item);
      }

    get items() : Buyable[] {
      return [...this._items];
    }

    getCoast(): number {
      const totalSum = this.items.reduce((acc, prev) => acc + prev.price, 0);
      return totalSum;
    }

    getCoastDiscont(discount: number): number {
      const totalSum = this.items.reduce((acc, prev) => acc + (prev.price * (discount / 100)), 0);
      return totalSum;
    }

    getItem(id: number): Buyable | undefined {
      return this._items.find((currItem) => currItem.id === id);
  }
    delItem(id: number): void {
      const targetItem = this.getItem(id);
      if (targetItem) {
        this._items.splice(this._items.findIndex((item) => item.id === id) , 1);
      }
  }
}