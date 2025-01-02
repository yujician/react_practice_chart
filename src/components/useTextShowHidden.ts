import { useState } from 'react';

type useTextShowHidden = () => {
  isHidden: boolean;
  handleClickIndicate: () => void;
  handleClickHidden: () => void;
};

export const useTextShowHidden: useTextShowHidden = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClickIndicate = () => {
    setIsHidden(false);
  };

  const handleClickHidden = () => {
    setIsHidden(true);
  };

  return { isHidden, handleClickIndicate, handleClickHidden };
};
