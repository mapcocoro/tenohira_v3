'use client';

import { useState } from 'react';

const menuItems = [
  { label: '各種保険', href: '#insurance' },
  { label: '労災', href: '#workers-comp' },
  { label: '交通事故', href: '#accident' },
  { label: '設備紹介', href: '#equipment' },
  { label: '診療時間', href: '#hours' },
  { label: '料金表', href: '#price' },
  { label: 'アクセス', href: '#access' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-cream-100 sticky top-0 z-50 shadow-sm">
      <div className="container">
        {/* ロゴ＆電話 */}
        <div className="flex items-center justify-between py-3 border-b border-cream-300 gap-2">
          <a href="#" className="flex items-center gap-1 shrink-0">
            <span className="text-2xl">🖐️</span>
            <span className="font-bold text-base whitespace-nowrap" style={{ color: '#403f3b' }}>てのひら整骨院</span>
          </a>

          <a href="tel:06-6781-6911" className="flex items-center gap-1 tel-link text-lg whitespace-nowrap shrink-0">
            <span>📞</span>
            <span>06-6781-6911</span>
          </a>
        </div>

        {/* デスクトップメニュー */}
        <nav className="hidden md:flex items-center justify-center gap-1 py-2 flex-wrap">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="category-btn"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* モバイルメニューボタン */}
        <div className="md:hidden py-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full py-2 text-center"
            style={{ color: '#606060' }}
          >
            {isMenuOpen ? '✕ 閉じる' : '☰ メニュー'}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="category-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
