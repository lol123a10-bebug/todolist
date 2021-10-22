import { useAppSelector } from "../../../hooks/useApp";
import ToDoItem from "./ToDoItem";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  padding-top: 5rem;
  grid-gap: 2rem;

  @media (min-width: 60rem) {
    grid-template-columns: repeat(
      ${({ length }) => (length < 2 ? length : 2)},
      1fr
    );
  }

  @media (min-width: 90rem) {
    grid-template-columns: repeat(
      ${({ length }) => (length < 3 ? length : 3)},
      1fr
    );
  }
`;

const ToDoList = (props) => {
  const { todoList } = useAppSelector((state) => state.todo);

  return (
    <List length={todoList.length}>
      {todoList.map((item: any) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          done={item.done}
        />
      ))}
    </List>
  );
};

export default ToDoList;
