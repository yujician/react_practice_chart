import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import PageTitle from '@/components/PageTitle';
import SidebarMenu from '@/components/SidebarMenu';
import { usePokemon } from '@/hooks/usePokemon';

const Page: NextPage = () => {
  const { handleSetQuery, fetchPokemon, pokemon, error, query } = usePokemon();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <PageTitle pageTitle="ポケモンAPIアプリ" />

      <div className="flex flex-1">
        {/* サイドメニュー */}
        <SidebarMenu />

        {/* メインコンテンツ */}
        <div className="flex-1">
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex justify-center">
              <div>
                {/* 入力フォーム */}
                <div>
                  <input
                    className="rounded-md border px-3 py-2 outline-none"
                    value={query}
                    type="text"
                    placeholder="ポケモンの名前を入力"
                    onChange={handleSetQuery}
                  />
                  {error && <p className="mt-2 text-base text-red-500">{error}</p>}
                </div>
                {/* ポケモンの情報 */}
                {pokemon && (
                  <div className="mt-4 text-center text-base">
                    <h3>{pokemon.name}</h3>
                    <div className="flex justify-center">
                      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <p>
                      タイプ: {pokemon.types.map((pokemonType) => pokemonType.type.name).join(', ')}
                    </p>
                    <p>身長: {pokemon.height}</p>
                    <p>重さ: {pokemon.weight}</p>
                  </div>
                )}
                {/* 検索ボタン */}
                <div className="flex justify-center">
                  <Button onClick={fetchPokemon} label="検索" variant="primary" className="mt-4" />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-8 w-full max-w-md rounded-md border border-gray-300 bg-gray-100 p-4 text-center shadow-sm">
              <p className="font-bold">以下のキャラ名を検索</p>
              <p className="mt-2 text-sm">
                bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle,
                wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill,
                pidgey, pidgeotto, pidgeot, rattata, raticate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
