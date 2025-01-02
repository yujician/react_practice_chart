import { ChangeEvent, useState } from 'react';

type UseDisplayFeedback = () => {
  feedbackList: string[];
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  inputValue: string;
};

export const useDisplayFeedback: UseDisplayFeedback = () => {
  const [inputValue, setInputValue] = useState('');
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return; // 何もしない
    }
    setFeedbackList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };

  return { feedbackList, handleInputChange, handleSubmit, inputValue };
};
