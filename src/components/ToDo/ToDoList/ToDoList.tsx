import ToDoItem from "./ToDoItem";
import styled from "styled-components";
import { servicesApi } from "../../../services";
import Loading from "../../UI/Loading/Loading";

const ToDoList = (props) => {
  const { data: todoList = [], isLoading, error } = servicesApi.useGetTodosQuery("");

  if (isLoading) return <Loading />;

  if (error) return <div>{error && "Произошла ошибка"}</div>;

  return (
    <List length={todoList.length}>
      {todoList.map((item: any) => (
        <ToDoItem key={item.id} id={item.id} title={item.title} description={item.description} done={item.done} />
      ))}
    </List>
  );
};

export default ToDoList;

const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  padding-top: 5rem;
  grid-gap: 2rem;

  @media (min-width: 60rem) {
    grid-template-columns: repeat(${({ length }) => (length < 2 ? length : 2)}, 1fr);
  }

  @media (min-width: 90rem) {
    grid-template-columns: repeat(${({ length }) => (length < 3 ? length : 3)}, 1fr);
  }
`;
