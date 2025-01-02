import { ChangeEvent, useMemo, useState } from 'react';

type Entry = {
  title: string;
  content: string;
  date: Date;
};

type UseEntry = () => {
  title: string;
  content: string;
  handleChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleAddEntry: () => void;
  handleChangeFilterDate: (e: ChangeEvent<HTMLInputElement>) => void;
  filteredEntryList: Entry[];
};

export const useEntry: UseEntry = () => {
  const [entryList, setEntryList] = useState<Entry[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [filterDate, setFilterDate] = useState<Date | null>(null);

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleChangeFilterDate = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterDate(new Date(e.target.value));
  };

  const handleAddEntry = () => {
    if (!title || !content) {
      return; // 何もしない
    }

    const newEntry = {
      title,
      content,
      date: new Date(),
    };
    setEntryList((prevState) => [...prevState, newEntry]);
    setTitle('');
    setContent('');
  };

  const filteredEntryList = useMemo(() => {
    return filterDate
      ? entryList.filter(
          (entry) => entry.date.toLocaleDateString() === filterDate.toLocaleDateString(),
        )
      : entryList;
  }, [entryList, filterDate]);

  return {
    title,
    content,
    handleChangeTitle,
    handleChangeContent,
    handleAddEntry,
    handleChangeFilterDate,
    filteredEntryList,
  };
};
