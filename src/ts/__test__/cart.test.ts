import Cart from "../cart";
import Movie from "../movie";

test('test new cart add', () => {
    const addMovie =  Cart.add(Movie);
    expect(addMovie.includes("Movie")).toBe(true);
});