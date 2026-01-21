const prices = [
  { name: '保険施術', price: '要問合せ', note: '※保険割合・施術部位により異なります', category: '保険' },
  { name: '肩こりスッキリコース', price: '3,300円', note: '30分｜肩甲骨をほぐし頭の位置を整えます', category: '自費' },
  { name: 'てのひら式背骨矯正', price: '要問合せ', note: '骨盤・背骨・股関節・足首を調整', category: '自費' },
  { name: '超音波コンビネーション', price: '550円', note: '五十肩・捻挫など深部の筋肉をゆるめます', category: 'オプション' },
];

export default function PriceSection() {
  return (
    <section id="price" className="section bg-cream-100">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-8">
          <h2 className="section-title">💰 料金案内</h2>
          <p className="section-subtitle">各種保険・労災対応</p>
        </div>

        {/* 料金表 */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="py-4 px-6" style={{ backgroundColor: '#e8b000' }}>
              <h3 className="font-bold text-center text-lg text-white">施術料金</h3>
            </div>
            <div className="p-6">
              {prices.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between py-5 ${
                    index !== prices.length - 1 ? 'border-b border-cream-200' : ''
                  }`}
                >
                  <div className="mb-2 sm:mb-0">
                    <span className="font-medium" style={{ color: '#403f3b' }}>{item.name}</span>
                    {item.note && (
                      <span className="text-sm ml-2" style={{ color: '#888888' }}>{item.note}</span>
                    )}
                  </div>
                  <span className="text-2xl font-bold" style={{ color: '#e8b000' }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 注意書き */}
          <div className="mt-6 text-center text-sm space-y-1" style={{ color: '#888888' }}>
            <p>※料金は税込表示です</p>
            <p>※各種健康保険・労災対応</p>
            <p>※詳しい料金はお電話でお問い合わせください</p>
          </div>
        </div>
      </div>
    </section>
  );
}
