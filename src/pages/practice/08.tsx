import { NextPage } from 'next';

import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { useCelsiusToFahrenheit } from '@/hooks/useCelsiusToFahrenheit';

const Page: NextPage = () => {
  const { celsius, handleChange, convertFromCelsiusToFahrenheit } = useCelsiusToFahrenheit();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="摂氏温度→華氏温度" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                <div className="mb-2 flex items-center gap-x-2">
                  <label htmlFor="celsius">摂氏温度：</label>
                  <input
                    className="border px-2 py-1 outline-none"
                    id="celsius"
                    type="number"
                    onChange={handleChange}
                  />
                </div>
                <p>華氏温度：{convertFromCelsiusToFahrenheit(celsius)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
