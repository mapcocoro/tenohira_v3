const businessHours = [
  { day: '月', am: '○', pm: '○' },
  { day: '火', am: '○', pm: '○' },
  { day: '水', am: '○', pm: '○' },
  { day: '木', am: '○', pm: '−' },
  { day: '金', am: '○', pm: '○' },
  { day: '土', am: '○', pm: '−' },
  { day: '日', am: '休', pm: '休' },
  { day: '祝', am: '休', pm: '休' },
];

export default function AccessSection() {
  return (
    <section id="access" className="section bg-white">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-8">
          <h2 className="section-title">📍 アクセス・診療時間</h2>
          <p className="section-subtitle">コープ若江店の目の前！</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* 左側：情報 */}
          <div className="space-y-4">
            {/* 基本情報 */}
            <div className="bg-cream-100 rounded-xl p-5">
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#403f3b' }}>
                🏥 基本情報
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0" style={{ color: '#888888' }}>院名</dt>
                  <dd className="font-medium" style={{ color: '#403f3b' }}>てのひら整骨院</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0" style={{ color: '#888888' }}>住所</dt>
                  <dd style={{ color: '#403f3b' }}>
                    〒578-0942<br />
                    大阪府東大阪市若江東町4-2-8
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0" style={{ color: '#888888' }}>電話番号</dt>
                  <dd>
                    <a href="tel:06-6781-6911" className="tel-link text-xl">
                      06-6781-6911
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0" style={{ color: '#888888' }}>アクセス</dt>
                  <dd style={{ color: '#403f3b' }}>
                    近鉄奈良線 若江岩田駅 徒歩12分<br />
                    <span className="font-medium" style={{ color: '#e8b000' }}>コープ若江店の目の前！</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* 診療時間 */}
            <div id="hours" className="bg-cream-100 rounded-xl overflow-hidden">
              <div className="py-3 px-5" style={{ backgroundColor: '#e8b000' }}>
                <h3 className="font-bold text-white flex items-center gap-2">
                  ⏰ 診療時間
                </h3>
              </div>
              <div className="p-4">
                <table className="schedule-table text-sm">
                  <thead>
                    <tr>
                      <th></th>
                      {businessHours.map((item) => (
                        <th key={item.day}>{item.day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-xs" style={{ color: '#606060' }}>9:00〜12:30</td>
                      {businessHours.map((item) => (
                        <td key={`am-${item.day}`} className={item.am === '休' ? '' : 'font-bold'} style={{ color: item.am === '休' ? '#ccc' : '#e8b000' }}>
                          {item.am}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="font-medium text-xs" style={{ color: '#606060' }}>15:30〜19:30</td>
                      {businessHours.map((item) => (
                        <td key={`pm-${item.day}`} className={item.pm === '休' || item.pm === '−' ? '' : 'font-bold'} style={{ color: item.pm === '休' || item.pm === '−' ? '#ccc' : '#e8b000' }}>
                          {item.pm}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs mt-3 text-center" style={{ color: '#888888' }}>
                  ○ 診療 / − 午前のみ / 休 休診
                </p>
              </div>
            </div>
          </div>

          {/* 右側：地図 */}
          <div className="bg-cream-100 rounded-xl p-4">
            <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#403f3b' }}>
              🗺️ 地図
            </h3>
            <div className="rounded-lg overflow-hidden h-72 lg:h-[calc(100%-50px)]">
              <iframe
                src="https://maps.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E6%9D%B1%E5%A4%A7%E9%98%AA%E5%B8%82%E8%8B%A5%E6%B1%9F%E6%9D%B1%E7%94%BA4-2-8&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="てのひら整骨院 地図"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a href="tel:06-6781-6911" className="btn-primary">
            📞 ご予約・お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
