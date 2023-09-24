import { CareerTitles } from "./careerTitles";

export function Career() {
  return (
    <div className="lg:pt-12 pt-16">
      <ol className="mx-4 sm:mx-8 md:mx-12 relative border-l border-gray-200 dark:border-gray-700">
        <CareerTitles
          date="2023年9月9日"
          title="株式会社MOVEDにジョイン"
          description="友人からの誘いで、MOVEDに参加しました。"
          linkButton
          linkTitle="株式会社MOVED"
          href="https://moved.co.jp"
        />
        <CareerTitles
          date="2023年8月7日"
          title="マレーシアに一週間語学留学"
          description="初めての海外、初めての飛行機でした。"
        />
        <CareerTitles
          date="2023年7月1日"
          title="HTML/TailwindCSSでweb制作を開始"
          description="今まで『むずそうだから』という理由でプログラミングをしてなかったが、いざ初めて、HTML/CSSの全体像を理解したら、意外にできることがわかった。"
          linkButton
          linkTitle="初めて作ったサイト"
          href="https://shuwatanabe-old.vercel.app"
        />
        <CareerTitles
          date="2023年2月25日"
          title="チーム逸般人で講習会を開催"
          description="マイクラで簡単なタワーの作り方や、オリジナルブロックの作り方を参加してくれた子供たちに教えました。約10人の前で、自分が主体的に話すのは初めてだったので、緊張しました。"
        />
        <CareerTitles
          date="2023年1月18日"
          title="マインクラフトで計算機を制作"
          description="コンピューターサイエンスに興味を持ち、マイクラ内で2進数などを駆使して計算機を作った。"
          linkButton
          linkTitle="詳しく(twitter)"
          href="https://twitter.com/shu_out/status/1615695431631278080"
        />
        <CareerTitles
          date="2022年11月6日"
          title="Microsoft主催のIDEA Creation Workshopサポーター"
          description=" IJPというアイデアのビジネスコンテストの企画で、マイクラを使ってアイデアを出すイベントのサポーターになった。"
          linkButton
          linkTitle="詳しく"
          href="https://ideaworkshop1.peatix.com/view"
        />
        <CareerTitles
          date="2022年1月30日"
          title="マイクラカップ受賞🏆&チーム逸般人結成"
          description="今まで自己肯定感が低かった私だったが、結果を出せ、肯定感が上がるいい機会だった。"
          linkButton
          linkTitle="詳しく(動画)"
          href="https://youtu.be/B7V0NbCkZ_Y"
        />
        <CareerTitles
          date="2016年"
          title="学校の授業がつまらなく、不登校に。"
          description="🤷"
        />
      </ol>
    </div>
  );
}
