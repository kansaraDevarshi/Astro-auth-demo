import { gql } from "@apollo/client/core";

const QUERY_TODO_LIST = gql`
  query getSingleUser($userId: String!) {
    getUserTodo(userId: $userId) {
      status
      title
    }
  }
`;

const ADD_TODO = gql`
  mutation UpdateTodoList($input: UpdateTodoList!) {
    updateTodoList(input: $input) {
      id
      status
      title
      userId
    }
  }
`;

export {
  QUERY_TODO_LIST,
  ADD_TODO,
};
