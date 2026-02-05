'use client';

import { useState } from 'react';
import Link from 'next/link';

// 部位カテゴリのデータ
const categories = [
  {
    id: 'neck',
    name: '首',
    icon: '🦒',
    description: '首の痛み・寝違え・ストレートネックなど',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'shoulder',
    name: '肩こり',
    icon: '💪',
    description: '肩こり・四十肩・五十肩など',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'pelvis',
    name: '骨盤ゆがみ',
    icon: '🦴',
    description: '骨盤矯正・産後の骨盤ケアなど',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'back',
    name: '腰',
    icon: '🔙',
    description: 'ギックリ腰、ヘルニア',
    details: '',
    link: '/koshi',
  },
  {
    id: 'spine',
    name: '腰椎',
    icon: '🏥',
    description: '腰椎の痛み・背骨のゆがみなど',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'hip',
    name: '股関節',
    icon: '🦵',
    description: '股関節の痛み・可動域の改善など',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'knee',
    name: '膝',
    icon: '🦿',
    description: '膝の痛み・変形性膝関節症など',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'wrist',
    name: '手首',
    icon: '✋',
    description: '手首の痛み・腱鞘炎など',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
  {
    id: 'ankle',
    name: '足首・足裏',
    icon: '🦶',
    description: '足首の痛み・足底筋膜炎など',
    details: '※詳細テキストと写真を追加予定',
    link: null,
  },
];

export default function TreatmentCategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (id: string, link: string | null) => {
    if (link) {
      // リンクがある場合はページ遷移（Linkコンポーネントで処理）
      return;
    }
    setSelectedCategory(selectedCategory === id ? null : id);
  };

  return (
    <section id="treatment" className="section bg-cream-100">
      <div className="container">
        {/* セクションタイトル */}
        <div className="text-center mb-8">
          <h2 className="section-title">🩺 施術内容</h2>
          <p className="section-subtitle">お悩みの部位をお選びください</p>
        </div>

        {/* カテゴリボタン一覧 - PC: 2列、スマホ: 1列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.id}>
              {/* カテゴリボタン */}
              {category.link ? (
                <Link
                  href={category.link}
                  className="w-full text-left p-4 rounded-xl transition-all duration-200 bg-white shadow-card hover:shadow-hover block"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg" style={{ color: '#403f3b' }}>
                        {category.name}
                      </h3>
                      <p className="text-sm" style={{ color: '#888888' }}>
                        {category.description}
                      </p>
                    </div>
                    <span className="text-xl">→</span>
                  </div>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleCategoryClick(category.id, category.link)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gold-400 text-white shadow-hover'
                        : 'bg-white shadow-card hover:shadow-hover'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg ${
                          selectedCategory === category.id ? 'text-white' : ''
                        }`} style={selectedCategory !== category.id ? { color: '#403f3b' } : {}}>
                          {category.name}
                        </h3>
                        <p className={`text-sm ${
                          selectedCategory === category.id ? 'text-cream-100' : ''
                        }`} style={selectedCategory !== category.id ? { color: '#888888' } : {}}>
                          {category.description}
                        </p>
                      </div>
                      <span className={`text-xl transition-transform duration-200 ${
                        selectedCategory === category.id ? 'rotate-180' : ''
                      }`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {/* 詳細コンテンツ（展開時） */}
                  {selectedCategory === category.id && (
                    <div className="mt-2 p-4 bg-white rounded-xl shadow-card">
                      <div className="text-center py-8">
                        {/* 写真プレースホルダー */}
                        <div className="w-full max-w-md mx-auto h-48 bg-cream-200 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-4xl">{category.icon}</span>
                        </div>
                        <p style={{ color: '#606060' }}>{category.details}</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
