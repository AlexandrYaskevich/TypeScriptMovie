import Cart from "../cart";
import Movie from "../movie";

test('test new cart add', () => {
    const cart =  new Cart;
    const movie = new Movie(
        234,
       'The Avengers',
        1000,
        'The Avengers',
        2012,
        'USA',
        'Avengers Assemble!',
        'приключения',
        137
      );
      cart.add(movie);
      expect(cart.items).toEqual([movie]);
});

test('test get coast', () => {
    const cart =  new Cart;
    const movie = new Movie(
        234,
       'The Avengers',
        1000,
        'The Avengers',
        2012,
        'USA',
        'Avengers Assemble!',
        'приключения',
        137
      );
      cart.add(movie);
      expect(cart.getCoast()).toBe(1000);
});

test('test get item', () => {
    const cart =  new Cart;
    const movie = new Movie(
        234,
       'The Avengers',
        1000,
        'The Avengers',
        2012,
        'USA',
        'Avengers Assemble!',
        'приключения',
        137
      );
      cart.add(movie);
      expect(cart.getItem(234)).toBe(234);
});

test('test delet item', () => {
    const cart =  new Cart;
    const movie = new Movie(
        234,
       'The Avengers',
        1000,
        'The Avengers',
        2012,
        'USA',
        'Avengers Assemble!',
        'приключения',
        137
      );
      cart.add(movie);
      cart.delItem(234)
      expect(cart.items.length).toBe(0);
});