import { NextPage } from 'next';

import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useDigitalClock } from '@/hooks/useDigitalClock';

const Page: NextPage = () => {
  const { currentTime } = useDigitalClock();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="デジタル時計表示" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <h3 className="text-center text-2xl">{currentTime || 'Loading...'}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
