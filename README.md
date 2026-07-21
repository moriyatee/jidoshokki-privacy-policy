# jidoshokki-privacy-policy

「自動食記（Jidoshokki）」iOS アプリのプライバシーポリシー・利用規約・ランディングページ。

GitHub Pages でデプロイされる静的サイト。本リポジトリは [jidoshokki](https://github.com/moriyatee/jidoshokki) リポジトリの `privacy-policy/` ディレクトリから `git subtree` で同期されています。

## URL

- 日本語ホーム: https://moriyatee.github.io/jidoshokki-privacy-policy/
- English Home: https://moriyatee.github.io/jidoshokki-privacy-policy/index-en.html
- プライバシーポリシー（日本語）: https://moriyatee.github.io/jidoshokki-privacy-policy/privacy-policy-ja.html
- Privacy Policy (English): https://moriyatee.github.io/jidoshokki-privacy-policy/privacy-policy.html
- 利用規約: https://moriyatee.github.io/jidoshokki-privacy-policy/terms.html
- Terms of Use: https://moriyatee.github.io/jidoshokki-privacy-policy/terms-en.html

## 編集方法

このリポジトリには直接コミットしないでください。編集はすべて [jidoshokki](https://github.com/moriyatee/jidoshokki) リポジトリの `privacy-policy/` ディレクトリで行い、subtree push でこちらに反映します。

```bash
# jidoshokki リポジトリのルートで:
git subtree push --prefix=privacy-policy \
  https://github.com/moriyatee/jidoshokki-privacy-policy.git main
```

## ファイル構成

| ファイル | 役割 |
|---|---|
| `index.html` / `index-en.html` | ランディングページ（JA / EN） |
| `privacy-policy-ja.html` / `privacy-policy.html` | プライバシーポリシー（JA / EN） |
| `terms.html` / `terms-en.html` | 利用規約（JA / EN） |
| `assets/css/style.css` | スタイルシート |
| `assets/js/language-switch.js` | 言語切替・ナビゲーション |
| `_config.yml` | Jekyll 設定 |
