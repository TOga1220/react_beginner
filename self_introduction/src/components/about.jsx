export const About = () => {
    return (
  // returnの中が実際に表示される部分になり、複数行になる場合は一つのタグで囲まれている必要がある。
    <section>
        <div className="flex justify-between items-center">

          <ul className="flex text-text-green">
            <a href="#about" className="mr-4">ABOUT</a>
            <a href="#skills" className="mr-4">SKILLS</a>
          </ul>
        </div>
    </section>
    );
  };
