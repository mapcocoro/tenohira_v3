export default function AccidentSection() {
  return (
    <section id="accident" className="section bg-white">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-8">
          <h2 className="section-title">🚗 交通事故治療</h2>
          <p className="section-subtitle">自己負担0円で通院できます</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* メインカード */}
          <div className="bg-cream-100 rounded-xl p-6 md:p-8">
            <p className="text-lg mb-6" style={{ color: '#403f3b' }}>
              当院では交通事故治療を行っています。<br />
              基本的に病院との併用をすすめています。
            </p>

            <div className="bg-white rounded-lg p-5 mb-6">
              <h3 className="font-bold mb-3" style={{ color: '#403f3b' }}>治療の流れ</h3>
              <ul className="space-y-2" style={{ color: '#606060' }}>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400">✓</span>
                  <span>病院でレントゲンやMRIなどの画像診断を行い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-400">✓</span>
                  <span>当院では痛みを取る手技療法やリハビリ、テーピングを行っていきます</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5 mb-6">
              <h3 className="font-bold mb-3" style={{ color: '#403f3b' }}>設備</h3>
              <p style={{ color: '#606060' }}>
                電気治療、超音波コンビネーション治療などの物理療法機器、<br className="hidden md:inline" />
                ウォーターベッドも完備しています。
              </p>
            </div>

            {/* 強調ポイント */}
            <div className="bg-gold-400 text-white rounded-lg p-5 text-center">
              <p className="text-xl font-bold mb-2">
                自己負担0円で通院できます
              </p>
              <p className="text-sm opacity-90">
                ご安心ください
              </p>
            </div>

            <div className="mt-6 text-center">
              <p style={{ color: '#606060' }}>
                保険会社とのやりとりも当院が行いますので、<br />
                お気軽にお問い合わせください。
              </p>
              <a href="tel:06-6781-6911" className="tel-link inline-block mt-4">
                📞 06-6781-6911
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
