# てのひら整骨院 HP - V3（部位別カテゴリ版）

シンプル・ナチュラル系デザインの整骨院ホームページ（v3）

## クライアント要望・注意事項

### 重要：スマホ表示・フォントサイズについて

- **スマホの見え方を非常に気にしている** → 改行位置を綺麗に調整すること
- **老眼対応** → フォントサイズを小さくしすぎないこと（最小14px以上推奨）
- 本文テキストは読みやすさを最優先

### デザイン方針

- 参考サイト: https://pineapple.hope-japan.jp/
- アニメーション不要（シンプルに）
- 部位別カテゴリボタンでコンテンツを整理

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- フォント: M PLUS Rounded 1c / Zen Maru Gothic（Google Fonts）

## ディレクトリ構成

```
tenohira_v3/
├── app/
│   ├── globals.css      # グローバルスタイル（クリーム系）
│   ├── layout.tsx       # レイアウト
│   └── page.tsx         # メインページ
├── components/
│   ├── Header.tsx       # ヘッダー（カテゴリメニュー）
│   ├── IntroSection.tsx # 冒頭文
│   ├── InstagramSection.tsx  # Instagram埋め込み
│   ├── TreatmentCategorySection.tsx  # 施術内容（部位別カテゴリ）
│   ├── AccidentSection.tsx   # 交通事故治療
│   ├── PriceSection.tsx      # 料金表
│   ├── AccessSection.tsx     # アクセス・診療時間
│   └── Footer.tsx       # フッター
├── public/images/       # 画像素材
└── tailwind.config.ts   # Tailwind設定
```

## ページ構成

1. ヘッダー（ロゴ + カテゴリメニュー + TEL）
2. 冒頭文セクション
3. Instagram埋め込み
4. 施術内容（部位別カテゴリ）
   - 首、肩こり、骨盤ゆがみ、腰痛、腰椎、股関節、膝、手首、足首・足裏
5. 交通事故治療
6. 料金表
7. アクセス・診療時間
8. フッター

## カラーパレット

- 背景: クリーム系 (#fffbe6)
- アクセント: ゴールド (#e8b000)
- テキスト: グレー系 (#403f3b, #606060)
- サブ: ティール (#2a9d8f)

## 開発コマンド

```bash
npm install      # 依存関係インストール
npm run dev      # 開発サーバー起動
npm run build    # ビルド
```

## TODO（クライアント素材待ち）

- [ ] 部位別カテゴリの詳細テキスト・写真
- [ ] InstagramのLightWidgetコード

## セキュリティ注意事項

- 機密情報（APIキー、認証情報）は絶対にコミットしない
- 秘密情報は`.env.local`に格納（`.gitignore`対象）
- 外部埋め込み（Google Maps等）は公式の方法のみ使用
