import { NextPage } from 'next';

import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import ThreeBoxContent from '@/components/ThreeBoxContent';

const Page: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="3列配置" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-10 max-w-4xl">
            <ThreeBoxContent
              title1="これはタイトル1です。"
              content1="これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。これはコンテンツ1です。"
              title2="これはタイトル2です。"
              content2="これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。これはコンテンツ2です。"
              title3="これはタイトル3です。"
              content3="これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。これはコンテンツ3です。"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
