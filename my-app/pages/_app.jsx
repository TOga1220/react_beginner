import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    {/* 全ページに適用 */}
    <h1 className="bg-teal-200">ヘッダー</h1>

    {/*  pagesディレクトリ内各ページの内容が入る */}
    <Component {...pageProps} />

    {/* 全ページに適用 */}
    <h1 className="bg-teal-200">フッター</h1>
  </div>
  );
}

export default MyApp
