import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SidebarMenu: React.FC = () => {
  const router = useRouter(); // 現在のURLを取得

  const links = [
    // { path: '/practice/02', title: '3列配置' },
    { path: '/practice/03', title: 'カウントアップ' },
    { path: '/practice/04', title: '表示／非表示の切り替え' },
    { path: '/practice/05', title: '入力値を同時表示' },
    { path: '/practice/06', title: '背景色を変更' },
    { path: '/practice/07', title: 'フィードバックを表示' },
    { path: '/practice/08', title: '摂氏温度→華氏温度' },
    { path: '/practice/09', title: 'クイズ' },
    { path: '/practice/10', title: 'デジタル時計表示' },
    { path: '/practice/11', title: '名言のランダム表示' },
    { path: '/practice/12', title: '信号機（青→黄→赤）' },
    { path: '/practice/13', title: 'タイマー' },
    // { path: '/practice/14', title: 'スターウォーズアプリ' },
    { path: '/practice/15', title: 'ポケモンAPIアプリ' },
    { path: '/practice/16', title: 'メモアプリ' },
    { path: '/practice/17', title: 'ToDoアプリ' },
    { path: '/practice/18', title: '日記アプリ' },
    { path: '/practice/19', title: 'ユーザー検索アプリ' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white shadow-lg">
      <div className="p-4 text-center text-xl font-bold">メニュー</div>
      <ul className="space-y-2 p-4">
        {links.map((link, index) => {
          const isActive = router.pathname === link.path; // 現在のパスと一致するか確認
          return (
            <li key={index}>
              <Link
                href={link.path}
                className={`block rounded px-4 py-2 ${
                  isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'
                }`}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarMenu;
