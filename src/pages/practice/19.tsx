import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useUsers } from '@/hooks/useUsers';

const Page: NextPage = () => {
  const {
    userName,
    userAge,
    query,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQuery,
    handleAddUser,
    filteredUsers,
  } = useUsers();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="ユーザー検索アプリ" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div className="w-80">
                <h2 className="text-2xl font-bold">ユーザー検索アプリ</h2>

                {/* ユーザー追加フォーム */}
                <div className="mt-8">
                  <h3 className="text-base">ユーザー追加フォーム</h3>
                  <input
                    value={userName}
                    onChange={handleChangeUserName}
                    type="text"
                    placeholder="名前"
                    className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                  />
                  <input
                    value={userAge}
                    onChange={handleChangeUserAge}
                    type="text"
                    placeholder="年齢"
                    className="mt-2 w-full rounded-md border px-3 py-2 outline-none"
                  />
                  <Button
                    onClick={handleAddUser}
                    variant="primary"
                    label="ユーザ－追加"
                    className="mt-2"
                  />
                </div>

                {/* ユーザー検索フォーム */}
                <div className="mt-12">
                  <h3 className="text-base">検索フィルター</h3>
                  <input
                    type="text"
                    placeholder="ユーザー検索"
                    className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                    onChange={handleChangeQuery}
                    value={query}
                  />

                  {/* ユーザー一覧 */}
                  <ul className="mt-4">
                    {filteredUsers.map((user, index) => (
                      <li key={index} className="flex justify-between border-b p-4 text-sm">
                        <span>{user.name}</span>
                        <span>{user.age} 才</span>
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
