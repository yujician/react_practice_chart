import { NextPage } from 'next';

import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useRealTimeText } from '@/hooks/useRealTimeText';

const Page: NextPage = () => {
  const { text, handleChangeText } = useRealTimeText();
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="入力値を同時表示" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <h2 className="mb-4 text-center text-6xl">{text}</h2>
                <div className="flex justify-center">
                  <input
                    onChange={handleChangeText}
                    className="border px-3 py-2"
                    type="text"
                    placeholder="何か入力してください"
                  />
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
