import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useTextShowHidden } from '@/components/useTextShowHidden';

const Page: NextPage = () => {
  const { isHidden, handleClickIndicate, handleClickHidden } = useTextShowHidden();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="表示／非表示の切り替え" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="flex justify-center">
              <div>
                {!isHidden && <h2 className="mb-4 text-6xl">こんにちは</h2>}
                <div className="flex justify-center gap-x-4">
                  <Button onClick={handleClickIndicate} label="表示" variant="primary" />
                  <Button onClick={handleClickHidden} label="非表示" variant="primary" />
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
