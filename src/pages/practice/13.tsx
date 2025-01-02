import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useTimer } from '@/hooks/useTimer';

const Page: NextPage = () => {
  const { seconds, isActive, handleClickToggle, handleClickReset } = useTimer();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="タイマー" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <h3 className="text-center text-2xl">時間： {seconds}秒</h3>
                <div className="mt-4 flex gap-x-2">
                  <Button
                    onClick={handleClickToggle}
                    label={!isActive ? '開始' : '停止'}
                    variant="primary"
                  />
                  <Button onClick={handleClickReset} label="リセット" variant="secondary" />
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
