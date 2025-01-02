import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useEntry } from '@/hooks/useEntry';

const Page: NextPage = () => {
  const {
    title,
    content,
    handleChangeTitle,
    handleChangeContent,
    handleAddEntry,
    handleChangeFilterDate,
    filteredEntryList,
  } = useEntry();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="日記アプリ" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div className="w-80">
                <h2 className="text-2xl font-bold">日記アプリ</h2>

                {/* タイトル・コンテンツの入力フォーム */}
                <div>
                  <input
                    type="text"
                    placeholder="タイトル"
                    className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                    onChange={handleChangeTitle}
                    value={title}
                  />
                  <textarea
                    placeholder="内容"
                    className="mt-6 w-full rounded-md border px-3 py-2 outline-none"
                    onChange={handleChangeContent}
                    value={content}
                  />
                  <Button
                    onClick={handleAddEntry}
                    label="追加"
                    variant="primary"
                    className="mt-4"
                  />
                </div>

                {/* 日付フィルター */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-base">日付フィルター</span>
                  <input
                    onChange={handleChangeFilterDate}
                    className="rounded-md border px-3 py-2 outline-none"
                    type="date"
                  />
                </div>

                {/* 日記一覧 */}
                <div className="mt-7">
                  <h2 className="text-xl font-bold">日記一覧</h2>
                  <ul>
                    {filteredEntryList.map((entry, index) => (
                      <li key={index} className="mt-4 rounded-md border p-4">
                        <h3>{entry.title}</h3>
                        <p>{entry.content}</p>
                        <p>{entry.date.toLocaleDateString()}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
