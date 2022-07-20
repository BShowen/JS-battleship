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

describe("The 'all' method", () => {
  let list;
  beforeEach(() => {
    list = coordinateList([
      [0, 0],
      [1, 1],
      [2, 2],
    ]);
  });

  test("The 'all' method returns an array with all values", () => {
    const expected = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    expect(list.all()).toEqual(expected);
  });

  test("You cannot change the internal state from the returned list", () => {
    expect(list.contains([[0, 0]])).toBeTruthy();
    const coords = list.all();
    coords[0] = null;
    expect(list.contains([[0, 0]])).toBeTruthy();
  });
});

describe("The length of the list", () => {
  let list;
  beforeEach(() => {
    list = coordinateList();
  });

  test("The length is initialized to zero", () => {
    expect(coordinateList().length()).toBe(0);
  });

  test("length is initialize to length of provided coordinate list", () => {
    expect(
      coordinateList([
        [0, 0],
        [0, 1],
      ]).length()
    ).toBe(2);
  });

  test("The length of the list gets updated after adding coords", () => {
    list.add([[0, 0]]);
    expect(list.length()).toBe(1);
    list.add([[0, 1]]);
    expect(list.length()).toBe(2);
  });

  test("We can add multiple coords at once and length is correct", () => {
    list.add([
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
    expect(list.length()).toBe(3);
  });

  test("The length of the list get updated after removing coords", () => {
    list.add([
      [0, 0],
      [0, 1],
    ]);
    list.remove([0, 0]);
    expect(list.length()).toBe(1);
  });
});
