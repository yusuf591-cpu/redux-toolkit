import { SelectTodos } from "../selector";

describe("Select Todos", () => {
  it("should select todos from selector", () => {
    const todos = [{ id: 123, title: "Redux", completed: false }];
    const result = SelectTodos({ todos });
    expect(result).toEqual(todos);
  });
});
