import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useTodoApp } from '@/hooks/useTodoApp';

const Page: NextPage = () => {
  const {
    taskLabel,
    taskList,
    handleChangeTaskLabel,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
  } = useTodoApp();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="ToDoアプリ" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                {/* 入力フォーム */}
                <div>
                  <input
                    className="rounded-md border px-3 py-2 outline-none"
                    type="text"
                    placeholder="タスクを入力"
                    onChange={handleChangeTaskLabel}
                    value={taskLabel}
                  />
                  <Button onClick={handleAddTask} variant="primary" label="追加" className="mt-4" />
                </div>

                {/* タスクの表示 */}
                <ul className="mt-4">
                  {taskList.map((task, index) => (
                    <li
                      key={index}
                      className={`border-grey-200 flex items-center justify-between border-b py-2 ${task.completed ? 'line-through' : ''}`}
                    >
                      {task.label}
                      <div className="flex gap-x-2">
                        <Button
                          onClick={() => handleCompleteTask(index)}
                          label="完了"
                          variant="secondary"
                        />
                        <Button
                          onClick={() => handleDeleteTask(index)}
                          label="削除"
                          variant="error-secondary"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
