import React from "react";
import * as actions from "../../actions/index";

export interface TodoCardProps {
  id: number | null;
  task: string | null;
  completed: boolean;
}

const TodoCard = async ({ id, task, completed }: TodoCardProps) => {
  return (
    <React.Fragment>
      <article
        className={`${
          completed ? "bg-green-600 " : "bg-red-600"
        } w-72 bg-gray-700 shadow p-4 space-y-2 rounded-md hover:-translate-y-2 duration-300`}
      >
        <div className="flex justify-between items-center">
          <p className="text-xl w-full text-gray-100">{task}</p>
          <form action={actions.deleteTodo} className="flex ">
            <input type="hidden" name="todoId" value={id ?? ""} />
            <input
              type="hidden"
              name="status"
              value={(completed ?? false).toString()}
            />
            <button type="submit" className="ms-1 cursor-pointer">
              ❌
            </button>
            <button
              type="submit"
              formAction={actions.updateTodo}
              className="ms-1 cursor-pointer"
            >
              ✅
            </button>
          </form>
        </div>
      </article>
    </React.Fragment>
  );
};

export default TodoCard;
