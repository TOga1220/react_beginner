const Home = () => {
    return (
  // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <header className="container">
        <div className="flex justify-between items-center">
          <a href="">
            <img src="./logo.png" alt="ロゴ" width="240" height="120"></img>
          </a>
          <ul className="flex text-text-green">
            <a href="#about" className="mr-4">ABOUT</a>
          <a href="#skills" className="mr-4">SKILLS</a>
          <a href="#values" className="mr-4">VALUES</a>
          <a href="#future" className="mr-4">FUTURE</a>
          </ul>
        </div>
    </header>

    );
  };
  export default Home;