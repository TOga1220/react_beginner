const Home = () => {
    return (
  // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
      <div>
        <h1 className="text-2xl">
          こんにちは！！
        </h1>
        <p className="text-xs text-rose-700">お元気ですか？</p>
      </div>
    );
  };
  export default Home;