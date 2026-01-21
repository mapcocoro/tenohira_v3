export default function IntroSection() {
  return (
    <section className="section bg-cream-100">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* メインキャッチ */}
          <p className="text-lg md:text-xl mb-6" style={{ color: '#403f3b' }}>
            コープ若江店の向かいにある、黄色い看板の整骨院です。
          </p>

          {/* 説明文 */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-card mb-6">
            <p className="mb-4" style={{ color: '#606060' }}>
              【てのひら整骨院】では健康保険内での施術、自費での施術がありますので、
              ご自身に合った施術を選べます。
              <span className="text-sm">（くわしくは<a href="#price" className="underline" style={{ color: '#e8b000' }}>料金</a>をご覧下さい。）</span>
            </p>
            <p className="mb-4" style={{ color: '#606060' }}>
              当院の施術内容はカイロプラクティック、整体、マッサージを軸とした
              独自の施術で体の痛みを改善します。
            </p>
          </div>

          {/* 呼びかけ */}
          <div className="bg-cream-200 rounded-xl p-6 md:p-8">
            <p className="text-lg mb-4" style={{ color: '#403f3b' }}>
              マッサージだけでは取れなかった痛み、<br className="hidden md:inline" />
              年齢のせいと言われた痛み。
            </p>
            <p className="text-xl font-bold mb-4" style={{ color: '#e8b000' }}>
              もう一度原因を探してみませんか？
            </p>
            <p className="mb-6" style={{ color: '#606060' }}>
              意外なところに原因が見つかったりしますよ。
            </p>

            <div className="border-t border-cream-300 pt-4 mt-4">
              <p className="font-medium" style={{ color: '#403f3b' }}>
                当院は予約制ではございません。<br />
                診療時間内にご来院下さい。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
