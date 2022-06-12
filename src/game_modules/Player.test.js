import Player from "./Player";

test("A player has a name", () => {
  const player = new Player("FooBar");
  expect(player.getName()).toBe("FooBar");
});
