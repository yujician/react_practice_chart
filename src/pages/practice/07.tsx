import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';

const Page: NextPage = () => {
  const { feedbackList, handleInputChange, handleSubmit, inputValue } = useDisplayFeedback();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="フィードバックを表示" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <textarea
                  className="rounded border px-3 py-2"
                  placeholder="フィードバッグを入力してください"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <div className="mt-4 flex justify-center">
                  <Button onClick={handleSubmit} label="送信する" variant="primary" />
                </div>
                <div className="mt-2">
                  {feedbackList.map((feedback, index) => {
                    return <li key={index}>{feedback}</li>;
                  })}
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
