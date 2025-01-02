import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useCountUp } from '@/hooks/useCountUp';

const Page: NextPage = () => {
  const { count, onClickCountUp } = useCountUp();
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="カウントアップ" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <h2 className="mb-6 flex justify-center text-6xl">{count}</h2>
                <Button onClick={onClickCountUp} label="カウントアップ" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
