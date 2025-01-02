import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { COLORS, useChangeBgColor } from '@/hooks/useChangeBgColor';

const Page: NextPage = () => {
  const { changeColor, currentColorIndex } = useChangeBgColor();
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="背景色を変更" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="h-screen pt-8" style={{ backgroundColor: COLORS[currentColorIndex] }}>
            <div className="flex justify-center">
              <Button onClick={changeColor} label="色を変更" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
