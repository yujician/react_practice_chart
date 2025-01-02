import { useState } from 'react';

export const QUESTION = 'Reactはどうようなものですか？';
export const CHOICE_LIST = ['ライブラリ', 'フレームワーク', '言語', 'データベース'];
export const CORRECT_ANSWER = 'ライブラリ';

type UseQuiz = () => {
  userChoice: string;
  result: string;
  handleChoice: (choice: string) => void;
  handleSubmit: () => void;
};

export const useQuiz: UseQuiz = () => {
  const [userChoice, setUserChoice] = useState('');
  const [result, setResult] = useState('');
  const handleChoice = (choice: string) => {
    setUserChoice(choice);
  };

  const handleSubmit = () => {
    if (userChoice === CORRECT_ANSWER) {
      setResult('正解!');
    } else {
      setResult('不正解...');
    }
  };

  return { userChoice, result, handleChoice, handleSubmit };
};
