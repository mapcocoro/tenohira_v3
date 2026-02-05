# てのひら整骨院 HP - V3（部位別カテゴリ版）

シンプル・ナチュラル系デザインの整骨院ホームページ（v3）

## クライアント要望・注意事項

### 絶対ルール（必ず守ること）

- **クライアントの文章はそのまま使う** → 勝手に端折らない、まとめない、言い換えない
- **カテゴリや項目を勝手に減らさない** → 統合・削除する場合は必ず許可を取る
- **構成を勝手に変えない** → 見出しの追加、順序の変更などは許可を取る
- **変更したい場合は必ず事前に確認する**

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
│   ├── page.tsx         # メインページ
│   └── koshi/
│       └── page.tsx     # 腰ページ（詳細）
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

## デプロイ情報

### 本番環境
- **URL**: https://tenohira-seikotsu.web.app
- **ホスティング**: Firebase Hosting（Sparkプラン・無料）
- **プロジェクトID**: tenohira-seikotsu
- **Firebaseコンソール**: https://console.firebase.google.com/project/tenohira-seikotsu

### GitHubリポジトリ
- **URL**: https://github.com/mapcocoro/tenohira_v3
- **自動デプロイ**: mainブランチへのpushで自動実行（GitHub Actions）

### 手動デプロイ
```bash
npm run build                    # ビルド
firebase deploy --only hosting   # デプロイ

# 認証切れの場合
firebase login --reauth
```

### GitHub Secrets（設定済み）
- `FIREBASE_SERVICE_ACCOUNT`: Firebaseサービスアカウントキー

### デプロイ履歴
- **2026-02-05**: GitHub Pages → Firebase Hosting に移行

## Instagram埋め込み設定

LightWidgetを使用して最新投稿を表示:
- **Photos to show**: 3（または6）
- **Columns**: 3
- **Responsive**: ON（必須）→ スマホで自動的に1〜2列に調整される
- InstagramSection.tsx内のコメントアウト部分にiframeコードを配置

```tsx
<iframe
  src="//lightwidget.com/widgets/YOUR_WIDGET_ID.html"
  scrolling="no"
  allowTransparency={true}
  className="lightwidget-widget"
  style={{width: '100%', border: 0, overflow: 'hidden'}}
/>
```

## 部位別詳細ページ

### /koshi（腰ページ）
腰痛、ギックリ腰、坐骨神経痛、ヘルニア、脊柱管狭窄症、すべり症の施術内容ページ

**写真プレースホルダー一覧:**
- 腰　検査写真１ ×3
- 腰　脚長さチェック　マッサージ写真２ ×2
- 腰　上向き検査写真３ ×1
- 腰　矯正写真４ ×1
- 腰　胸椎　頸椎矯正写真５ ×1
- 腰　施術完了写真６ ×1
- 腰　超音波　テーピング写真７ ×2
- 腰　施術完了写真８ ×1
- 坐骨神経痛　アクティベーター写真１ ×1
- 脊柱管狭窄症　ブロック　マッサージ写真 ×2

## TODO（クライアント素材待ち）

- [ ] 腰ページの写真（上記一覧参照）
- [ ] 部位別カテゴリの詳細テキスト・写真
- [ ] InstagramのLightWidgetコード（Responsive: ON で設定すること）

## セキュリティ注意事項

- 機密情報（APIキー、認証情報）は絶対にコミットしない
- 秘密情報は`.env.local`に格納（`.gitignore`対象）
- 外部埋め込み（Google Maps等）は公式の方法のみ使用
- Firebaseサービスアカウントキーは**GitHub Secrets**で管理（リポジトリには保存しない）

### 確認済み（2026-02-05）
- `.gitignore`に`.env*.local`、`.firebase`が含まれている
- サービスアカウントキーはGitHub Secretsに保存
- リポジトリに機密情報は含まれていない
