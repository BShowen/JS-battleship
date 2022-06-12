import coordinateList from "./coordinateList";

describe("Creating a list", () => {
  test("We can add items to the list", () => {
    const list = coordinateList();
    const coordinates = [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ];
    expect(list.add(coordinates)).toBeTruthy();
  });

  test("The constructor accepts a list", () => {
    const coords = [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ];
    expect(coordinateList(coords)).toBeTruthy();
  });
});

describe("The 'contains' method", () => {
  let list;
  beforeEach(() => {
    const coords = [
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
    ];
    list = coordinateList(coords);
  });

  test("The list can find coordinates", () => {
    expect(list.contains([[1, 1]])).toBeTruthy();
  });

  test("The list returns false when it doesn't contain coords", () => {
    expect(list.contains([[9, 9]])).not.toBeTruthy();
  });
});

describe("The 'add' method", () => {
  let list;
  beforeEach(() => {
    list = coordinateList();
  });

  test("We can add a single pair of coordinates using the 'add' method", () => {
    list.add([[0, 0]]);
    expect(list.contains([[0, 0]])).toBeTruthy();
  });

  test("We can add multiple coordinates at once", () => {
    list.add([
      [0, 0],
      [1, 1],
    ]);
    expect(list.contains([[0, 0]])).toBeTruthy();
    expect(list.contains([[1, 1]])).toBeTruthy();
  });
});

describe("The 'remove' method", () => {
  let list;
  beforeEach(() => {
    list = coordinateList([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
  });

  test("We can remove a single set of coords", () => {
    expect(list.remove([0, 0])).toBeTruthy();
    expect(list.contains([[0, 0]])).not.toBeTruthy();
  });
});
