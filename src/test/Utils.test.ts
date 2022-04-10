import { Utils } from "../app/Utils";

describe("utils test suite", () => {
  test("first test", () => {
    const abc = Utils.toUpperCase("teste");
    expect(abc).toEqual("TESTE");
  });
});
