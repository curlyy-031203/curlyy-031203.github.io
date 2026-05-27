# Liao Sijia — Portfolio

廖思嘉的个人作品集站点。用纯静态 HTML + CSS + JS 构建，无框架依赖，部署在 GitHub Pages 上。

实际站点：**https://curlyy-031203.github.io**

---

## 文件结构

```
curlyy-031203.github.io/
├── index.html         # 主页（关于 + 案例 + 其他作品）
├── resume.html        # 简历页
├── styles.css         # 设计系统 + 全部样式
├── app.js             # 语言切换 + 滚动入场动画
├── .nojekyll          # 告知 GitHub Pages 不要用 Jekyll 处理
├── README.md          # 本文件
└── assets/
    ├── avatar.jpg          # 头像（请你放进来）
    ├── tool-1-split.png    # 案例一截图（请你放进来）
    ├── tool-2-scores.png   # 案例二截图（请你放进来）
    └── resume.pdf          # 简历 PDF 下载版（请你放进来）
```

---

## 你需要做的（部署前）

### 1. 把素材文件放进 `assets/` 目录

请重命名后放入：

| 原文件 | 重命名为 | 放在哪里 |
|---|---|---|
| 你的头像照片 | `avatar.jpg` | `assets/avatar.jpg` |
| 入学测名单拆分工具截图 | `tool-1-split.png` | `assets/tool-1-split.png` |
| 入学测成绩汇总工具截图 | `tool-2-scores.png` | `assets/tool-2-scores.png` |
| 你的 PDF 简历 | `resume.pdf` | `assets/resume.pdf` |

> 如果暂时没放，页面会自动显示占位符，不会报错。后面随时替换。

### 2. 部署到 GitHub Pages（用户站）

因为目标域名是 `curlyy-031203.github.io`，所以仓库名**必须**叫这个：

```bash
# 在项目目录里执行
cd D:\curlyy-031203.github.io

# 初始化 git
git init
git branch -M main
git add .
git commit -m "Initial portfolio site"

# 在 GitHub 上新建一个**公开**仓库，名字必须叫 curlyy-031203.github.io
# 然后：
git remote add origin https://github.com/curlyy-031203/curlyy-031203.github.io.git
git push -u origin main
```

推送后约 1–2 分钟，访问 https://curlyy-031203.github.io 就能看到。

### 3. 检查 GitHub Pages 是否已启用

进入仓库 → Settings → Pages：
- Source: **Deploy from a branch**
- Branch: `main` / `(root)`
- 保存。等几分钟。

---

## 后续维护

### 改文字内容

打开 `index.html` 或 `resume.html`，搜索要改的中文，在那一行同时改 `data-zh="..."` 和 `data-en="..."` 两个属性。

如果一段文字含 `<strong>` 之类的内联标签，会同时有 `data-html-zh` 和 `data-html-en`——改这两个。

### 换主题色

打开 `styles.css`，找到 `:root` 里的：

```css
--accent: #1F3A2E;        /* 深墨绿 */
--accent-hover: #2A5040;
```

改这两个值即可全站生效。

### 加新案例

复制 `index.html` 里一整个 `<article class="case">` 块，粘到对应位置，改内容。

---

## 设计说明

- **审美方向**：Notion / Linear 风格 —— 大量留白、克制配色、典型编辑字体（Instrument Serif 用于标题，系统等宽字体用于元信息）
- **主题色**：深墨绿 `#1F3A2E`（克制、有产品质感，不撞紫不撞蓝）
- **字体**：中文用系统字体（PingFang SC / 微软雅黑），无需 web 下载；英文标题用 Google Fonts 的 Instrument Serif
- **双语切换**：右上角 `EN` / `ZH` 按钮，记忆用户偏好（localStorage）
- **动效**：仅入场淡入和悬停微动，符合"招聘者 30 秒看懂内容"的目标
- **响应式**：手机和桌面均良好排版

---

## 已知占位 / 待你确认

1. ~~头像、两张截图、PDF 简历~~ → 放进 `assets/` 即可
2. **英语翻译**：所有 `data-en` 是我先翻的草稿，请校对 UTAUT2 / PLS-SEM / 班型术语等专业措辞
3. **PDF 简历的"薪资工具"条目**：你提到这个项目不是你做的，建议在源 PDF 里删除或改写后再放入 `assets/resume.pdf`

---

## 技术栈

- HTML5（语义化标签 + 双语 data 属性）
- 纯 CSS（CSS 变量驱动设计系统，无预处理器）
- 原生 JavaScript（IntersectionObserver + localStorage）
- 字体：Instrument Serif（Google Fonts）+ 系统字体栈
- 部署：GitHub Pages（用户站）

无框架、无构建步骤、无 npm 依赖。
