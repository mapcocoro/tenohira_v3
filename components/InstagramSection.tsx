export default function InstagramSection() {
  return (
    <section id="instagram" className="section bg-white">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-8">
          <h2 className="section-title">📸 Instagram</h2>
          <p className="section-subtitle">日々の様子をチェック</p>
        </div>

        {/* Instagram埋め込みエリア */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-cream-100 rounded-xl p-6 md:p-8">
            {/* LightWidget埋め込みプレースホルダー */}
            <div className="relative min-h-[200px] md:min-h-[280px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              {/*
                実際のLightWidget埋め込みコードをここに配置
                LightWidget設定: Photos to show: 6, Columns: 3
                例:
                <iframe src="//lightwidget.com/widgets/YOUR_WIDGET_ID.html"
                  scrolling="no"
                  allowTransparency="true"
                  className="lightwidget-widget"
                  style={{width: '100%', border: 0, overflow: 'hidden'}}
                />
              */}

              {/* プレースホルダー表示 */}
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📷</div>
                <p className="font-medium" style={{ color: '#403f3b' }}>Instagram Feed</p>
                <p className="text-xs mt-1" style={{ color: '#888888' }}>※LightWidgetを設定してください</p>
              </div>
            </div>

            {/* Instagramフォローボタン */}
            <div className="text-center mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                📱 Instagramをフォロー
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
