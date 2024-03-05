// import { useMutation } from '@apollo/client/react/hooks';
import { useState } from 'react';
import { ADD_TODO } from '../services/todos';

interface ILists {
  lists: Record<string, unknown>[];
  userId: string;
}

const DisplayData: React.FC<ILists> = ({ lists, userId }) => {
  console.log('Here...');
  const [todos, setTodos] = useState(lists);
  const [input, setInput] = useState('');

  // const [addingTodo, { data, loading, error }] = useMutation(ADD_TODO);

  const addTodo = async () => {
    try {
      // const res = await addingTodo({
      //   variables: {
      //     input: { title: input, userId },
      //   },
      // });
      setInput('');
      // setTodos(res.data.updateTodoList);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleChange = (e: any) => setInput(e.target.value);

  return (
    <div>
      <input type='text' placeholder='Ex: Play Footboll' value={input} onChange={handleChange} />
      <button onClick={addTodo}>ADD</button>

      <ul>
        {todos.map((t: any, idx: number) => (
          <li key={idx}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;
