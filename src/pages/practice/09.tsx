import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { CHOICE_LIST, QUESTION, useQuiz } from '@/hooks/useQuiz';

const Page: NextPage = () => {
  const { userChoice, result, handleChoice, handleSubmit } = useQuiz();
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="クイズ" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <h3 className="text-center text-2xl">{QUESTION}</h3>
                <div className="mt-4 flex justify-center gap-x-2">
                  {CHOICE_LIST.map((choice, index) => (
                    <Button
                      onClick={() => handleChoice(choice)}
                      label={choice}
                      variant="secondary"
                      className={`${choice === userChoice && 'bg-black'}`}
                      key={index}
                    />
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button onClick={handleSubmit} label="送信" variant="primary" />
                </div>
                <h3 className="mt-8 text-center text-4xl">{result}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
