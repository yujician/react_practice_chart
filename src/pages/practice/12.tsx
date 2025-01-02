import { NextPage } from 'next';

import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useTrafficLight } from '@/hooks/useTrafficLight';

const Page: NextPage = () => {
  const { light } = useTrafficLight();
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="信号機（緑→黄→赤）" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center gap-x-2">
              <div
                className={`size-12 rounded-full ${light === 'green' ? 'bg-green-600' : 'bg-gray-700'}`}
              />
              <div
                className={`size-12 rounded-full ${light === 'yellow' ? 'bg-yellow-600' : 'bg-gray-700'}`}
              />
              <div
                className={`size-12 rounded-full ${light === 'red' ? 'bg-red-600' : 'bg-gray-700'}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
