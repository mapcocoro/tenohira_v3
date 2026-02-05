import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 写真プレースホルダーコンポーネント
// スマホ: 常に1列で大きく表示
// PC: 複数枚の場合は2列または3列
// count > 1 の場合は「ラベル-1」「ラベル-2」のように連番を付与
function PhotoPlaceholder({ label, count = 1 }: { label: string; count?: number }) {
  return (
    <div className="my-6">
      <div className={`grid gap-3 grid-cols-1 ${count > 1 ? (count === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3') : 'max-w-md mx-auto'}`}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-cream-200 rounded-lg h-48 flex items-center justify-center"
          >
            <span className="text-sm text-gray-500 text-center px-2">
              {count > 1 ? `${label}-${i + 1}` : label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KoshiPage() {
  return (
    <>
      <Header />
      <main className="pt-20 pb-12 bg-cream-50 min-h-screen">
        <div className="container max-w-3xl mx-auto px-4">
          {/* ページタイトル */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#403f3b' }}>
              腰
            </h1>
            <p className="text-lg" style={{ color: '#4a4a4a' }}>
              （腰痛、ギックリ腰、坐骨神経痛、ヘルニア、脊柱管狭窄症、すべり症）
            </p>
          </div>

          {/* 腰痛・ギックリ腰 */}
          <section className="bg-white rounded-xl shadow-card p-6 mb-6">
            <h2 className="text-xl font-bold text-gold-500 border-b-2 border-gold-400 pb-2 mb-6">
              腰痛・ギックリ腰
            </h2>

            {/* 問診・検査 */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4" style={{ color: '#403f3b' }}>（問診・検査）</h3>
              <div className="space-y-4" style={{ color: '#4a4a4a' }}>
                <p>
                  <span className="font-bold text-gold-500">①</span>{' '}
                  どの部分が痛むか、どの動作が痛むかチェックします
                </p>
                <p>
                  <span className="font-bold text-gold-500">②</span>{' '}
                  座った状態で曲げると痛いか、反ると痛いか、捻ると痛いか、横に倒すと痛いかをチェックします。
                </p>
                <p>
                  <span className="font-bold text-gold-500">③</span>{' '}
                  骨盤、仙骨、腰椎を検査して、楽になる方向を探します。
                </p>
              </div>
              <PhotoPlaceholder label="腰　検査写真１" count={3} />
            </div>

            {/* 施術 */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4" style={{ color: '#403f3b' }}>（施術）</h3>
              <div className="space-y-4" style={{ color: '#4a4a4a' }}>
                <p>
                  <span className="font-bold text-gold-500">①</span>{' '}
                  うつ伏せになって、足の長さの違いをチェックします。マッサージしながら痛いところを特定します。
                </p>
              </div>
              <PhotoPlaceholder label="腰　脚長さチェック　マッサージ写真２" count={2} />

              <div className="space-y-4 mt-6" style={{ color: '#4a4a4a' }}>
                <p>
                  <span className="font-bold text-gold-500">②</span>{' '}
                  上向きになって、曲げると痛いか、捻ると痛いか、反ると痛いかをチェックします。
                </p>
              </div>
              <PhotoPlaceholder label="腰　上向き検査写真３" count={1} />

              <div className="space-y-4 mt-6" style={{ color: '#4a4a4a' }}>
                <p>
                  <span className="font-bold text-gold-500">③</span>{' '}
                  カイロプラクティックで矯正します。
                </p>
              </div>
              <PhotoPlaceholder label="腰　矯正写真４" count={1} />

              <div className="space-y-4 mt-6" style={{ color: '#4a4a4a' }}>
                <p>
                  <span className="font-bold text-gold-500">④</span>{' '}
                  もう一度動かして、痛みが軽減しているかチェックします。痛みが残る場合はさらに
                  背中（胸椎）首（頸椎）股関節も矯正します。
                </p>
              </div>
              <PhotoPlaceholder label="腰　胸椎　頸椎矯正写真５" count={1} />

              <div className="space-y-4 mt-6" style={{ color: '#4a4a4a' }}>
                <p>
                  <span className="font-bold text-gold-500">⑤</span>{' '}
                  最後に座って、痛かった動きが楽になったら施術完了です。
                </p>
              </div>
              <PhotoPlaceholder label="腰　施術完了写真６" count={1} />
            </div>

            {/* ギックリ腰の補足 */}
            <div className="bg-cream-100 p-4 rounded-lg mb-6">
              <p style={{ color: '#4a4a4a' }}>
                <span className="text-gold-500 font-bold">★</span>
                ギックリ腰で状態の悪い方は超音波コンビネーション治療を使って炎症を和らげ、
                テーピングで固定します。
              </p>
              <PhotoPlaceholder label="腰　超音波　テーピング写真７" count={2} />
            </div>

            <p className="mb-6" style={{ color: '#4a4a4a' }}>
              次回来院時、動きや痛みが軽減されているか確認して、軽減されていれば保険内で治療していきます。
            </p>
            <PhotoPlaceholder label="腰　施術完了写真８" count={1} />

            <div className="bg-cream-100 p-4 rounded-lg mt-6">
              <p className="mb-4" style={{ color: '#4a4a4a' }}>
                <span className="text-gold-500 font-bold">★</span>
                カイロプラクティックや矯正が苦手な方、保険内で治療したい方は受付までご相談下さい。
                保険内でもしっかり治療させて頂きます。
              </p>
              <p style={{ color: '#4a4a4a' }}>
                通院の回数は患者様の来院できる範囲で大丈夫ですので、ご相談下さい。
              </p>
            </div>
          </section>

          {/* 坐骨神経痛、ヘルニア */}
          <section className="bg-white rounded-xl shadow-card p-6 mb-6">
            <h2 className="text-xl font-bold text-gold-500 border-b-2 border-gold-400 pb-2 mb-6">
              坐骨神経痛、ヘルニア
            </h2>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4" style={{ color: '#403f3b' }}>（施術）</h3>
              <div className="space-y-4" style={{ color: '#4a4a4a' }}>
                <p>
                  原因となる腰の骨４番目、５番目、骨盤をカイロプラクティックで矯正します。
                </p>
                <p>
                  しびれの原因となる筋肉（お尻、太もも、足、お腹）などをほぐしていきます。
                </p>
                <p>
                  最後にアクティベーターという器具を使って、腰の関節の動きを良くします。
                </p>
              </div>
              <PhotoPlaceholder label="坐骨神経痛　アクティベーター写真１" count={1} />

              <p className="mt-6" style={{ color: '#4a4a4a' }}>
                軽減しない場合は超音波コンビネーション治療で炎症を和らげ、テーピング固定もします。
              </p>
              <p className="mt-2 text-sm" style={{ color: '#888888' }}>
                （状態が悪い場合はカイロプラクティックしない場合もあります。）
              </p>
            </div>
          </section>

          {/* 脊柱管狭窄症、すべり症 */}
          <section className="bg-white rounded-xl shadow-card p-6 mb-6">
            <h2 className="text-xl font-bold text-gold-500 border-b-2 border-gold-400 pb-2 mb-6">
              脊柱管狭窄症、すべり症
            </h2>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-4" style={{ color: '#403f3b' }}>（施術）</h3>
              <div className="space-y-4" style={{ color: '#4a4a4a' }}>
                <p>
                  症状によりますが、腰の骨はあまり触らない方がいい場合が多いので、
                  ブロックというソフトな器具を使用します。（保険内）
                </p>
                <p>
                  狭窄症やすべり症は、腰を反ると痛みやしびれる場合が多いので、反り腰を軽減させる施術をします。
                </p>
                <p>
                  ブロックを引きながら、腰の周りの筋肉をほぐしていきます。
                </p>
                <p>
                  通院しながらある程度まで、腰を反れるのを目標に治療していきます。
                </p>
                <p>
                  高齢の方でもこの治療でかなりの症状の軽減が見られます。
                </p>
              </div>
              <PhotoPlaceholder label="脊柱管狭窄症　ブロック　マッサージ写真" count={2} />
            </div>
          </section>

          {/* 戻るボタン */}
          <div className="text-center mt-8">
            <Link
              href="/#treatment"
              className="inline-block px-8 py-3 bg-gold-400 text-white rounded-full font-bold hover:bg-gold-500 transition-colors"
            >
              ← 施術内容一覧に戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
