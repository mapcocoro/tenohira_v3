export default function AccidentSection() {
  return (
    <section id="accident" className="section bg-white">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-8">
          <h2 className="section-title">🚗 交通事故治療</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* メインカード */}
          <div className="bg-cream-100 rounded-xl p-6 md:p-8">
            <div className="space-y-6" style={{ color: '#606060' }}>
              <p>
                当院では交通事故治療を行っています。
              </p>
              <p>
                基本的に病院との併用をすすめています。
              </p>
              <p>
                病院でレントゲンやMRIなどの画像診断を行い、
              </p>
              <p>
                当院では痛みを取る手技療法やリハビリ、テーピングを行って行きます。
              </p>
              <p>
                電気治療、超音波コンビネーション治療などの物理療法機器、ウォータベッドも完備しています。
              </p>
              <p className="text-lg font-bold" style={{ color: '#403f3b' }}>
                自己負担０円で通院できますのでご安心ください。
              </p>
              <p>
                保険会社とのやりとりも当院が行いますので、お気軽にお問い合わせください。
              </p>
            </div>

            <div className="mt-6 text-center">
              <a href="tel:06-6781-6911" className="tel-link inline-block">
                📞 06-6781-6911
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
