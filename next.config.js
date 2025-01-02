/** @type {import('next').NextConfig} */

const withInterceptStdout = require('next-intercept-stdout');

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    images: {
      formats: ['image/webp'], // 最適化対象の画像
      unoptimized: true, // 自動最適化されない画像（アニメーション画像）の場合、最適化前の画像を表示
    },
    experimental: {
      scrollRestoration: true,
    },
    output: 'export',
    trailingSlash: true,
    distDir: './practice', // 出力先を変更
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text),
);
