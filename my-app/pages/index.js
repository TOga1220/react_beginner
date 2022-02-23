const Home = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <a href="">
          <img src="/logo.png" alt="ロゴ" width="240" height="120" />
        </a>
        <ul className="flex text-text-green">
          <li className="mr-4">
            <a href="#about">ABOUT</a>
          </li>
          <li className="mr-4">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="mr-4">
            <a href="#values">VALUES</a>
          </li>
          <li className="mr-4">
            <a href="#future">FUTURE</a>
          </li>
        </ul>
      </div>
      
    </header>
  );
};
export default Home;