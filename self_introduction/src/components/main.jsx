export const Main = () => {
    return (
    <main >
        <div className="flex bg-bg-green justify-between items-center">
            <div className="m-14 text-white"> 
                <h1 className="text-4xl">メインタイトル</h1>
                <h2 className="text-2xl">サブタイトル</h2>
            </div>
            <div className="m-8">
                <img src="./hero.png" alt="ロゴ" width="400" height="400"></img>
            </div>
        </div>

    </main>
    );
};