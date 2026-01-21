export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#403f3b' }} className="text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* ロゴ・説明 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🖐️</span>
              <h3 className="text-xl font-bold">
                てのひら整骨院
              </h3>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#aaa' }}>
              カイロプラクティック、整体、マッサージを軸とした<br />
              独自の施術で体の痛みを改善します。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h4 className="font-medium mb-4" style={{ color: '#e8b000' }}>メニュー</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#treatment" className="hover:opacity-80 transition-opacity" style={{ color: '#aaa' }}>
                施術内容
              </a>
              <a href="#accident" className="hover:opacity-80 transition-opacity" style={{ color: '#aaa' }}>
                交通事故治療
              </a>
              <a href="#price" className="hover:opacity-80 transition-opacity" style={{ color: '#aaa' }}>
                料金
              </a>
              <a href="#access" className="hover:opacity-80 transition-opacity" style={{ color: '#aaa' }}>
                アクセス
              </a>
            </nav>
          </div>

          {/* 連絡先 */}
          <div>
            <h4 className="font-medium mb-4" style={{ color: '#e8b000' }}>お問い合わせ</h4>
            <div className="space-y-2 text-sm" style={{ color: '#aaa' }}>
              <p>
                〒578-0942<br />
                大阪府東大阪市若江東町4-2-8
              </p>
              <p>
                <a href="tel:06-6781-6911" className="font-bold text-lg" style={{ color: '#e8b000' }}>
                  06-6781-6911
                </a>
              </p>
              <p>9:00〜12:30 / 15:30〜19:30</p>
              <p className="text-xs" style={{ color: '#888' }}>※木・土は午前のみ／日祝休診</p>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t pt-6" style={{ borderColor: '#555' }}>
          <p className="text-center text-sm" style={{ color: '#888' }}>
            © {currentYear} てのひら整骨院 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
