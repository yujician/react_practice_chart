import { ChangeEvent, useState } from 'react';

type Task = {
  label: string;
  completed: boolean;
};

type UseTodoApp = () => {
  taskLabel: string;
  taskList: Task[];
  handleChangeTaskLabel: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
  handleCompleteTask: (index: number) => void;
  handleDeleteTask: (index: number) => void;
};

export const useTodoApp: UseTodoApp = () => {
  const [taskLabel, setTaskLabel] = useState('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleChangeTaskLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskLabel(e.target.value);
  };

  const handleAddTask = () => {
    if (!taskLabel) {
      return; // 何もしない
    }
    setTaskList((prevState) => [...prevState, { label: taskLabel, completed: false }]);
    setTaskLabel('');
  };

  const handleCompleteTask = (index: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((prevTask, i) =>
        i === index ? { ...prevTask, completed: !prevTask.completed } : prevTask,
      ),
    );
  };

  const handleDeleteTask = (index: number) => {
    setTaskList((prevTaskList) => prevTaskList.filter((prevTask, i) => i !== index));
  };

  return {
    taskLabel,
    taskList,
    handleChangeTaskLabel,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  };
};
