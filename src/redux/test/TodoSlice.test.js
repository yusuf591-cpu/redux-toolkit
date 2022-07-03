import todoSlice, {
  createTodo,
  removeTodo,
  toggleComplete,
} from "../addtodo_reducer";

describe("TodoSlice test", () => {
  it("should return default value when passed empty", () => {
    const result = todoSlice(undefined, { type: "" });
    expect(result).toEqual({ error: null, status: null, todos: [] });
  });

  it("should Create Todo", () => {
    const todo = { title: "Redux", userId: "qwe", completed: false, id: 201 };
    const result = createTodo(todo);
    expect(result.payload.completed).toEqual(false);
    expect(result.payload.title).toEqual("Redux");
    expect(result.payload.userId).toEqual("qwe")
    expect(result.payload.id).toEqual(201)
  });

  it('should remove Todo', () => {
    const todos = [{ id: 1234, title: "Redux", completed: false }]

    const action = { payload: { id: 1234 }, type: removeTodo }
    // const result = todoSlice(todos, action)
    // const result = removeTodo(action)
    // expect(result).toEqual({})
  });

});
