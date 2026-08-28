# 霞工 · 环博会展位服务 —— 个人网站模板

一套全中文、可直接上传 GitHub Pages 的静态个人展示网站，专为环博会展位销售打造。包含首页、关于我、服务内容、展会项目（上海环博会 / 资源再生展区 / 沙特环博会）、行业动态（含示例文章）、联系我等页面，绿色商务风格，手机/电脑自适应。

## 一、网站文件结构

```
xiaren-site/
├── index.html        # 首页
├── about.html        # 关于我
├── services.html     # 服务内容
├── projects.html     # 展会项目（总览：三大招展项目 + IFAT 全球系列环保展）
├── shanghai.html     # 上海国际环博会详情页（IE expo Shanghai 2027）
├── recycling.html    # 资源再生与回收利用展区详情页
├── saudi.html        # 沙特国际环博会详情页（IFAT Saudi Arabia 2027）
├── articles.html     # 行业动态（文章列表）
├── article-1.html    # 示例文章1（招展资讯）
├── article-2.html    # 示例文章2（固废选位）
├── article-3.html    # 示例文章3（参展攻略）
├── contact.html      # 联系我
├── css/
│   └── style.css     # 全站样式（绿色商务风）
└── js/
    └── main.js       # 交互脚本（导航、表单、动画）
```

## 二、上传到 GitHub Pages（4 步，约 10 分钟）

### 第 1 步：创建仓库
1. 打开 https://github.com 注册/登录账号
2. 点右上角 **+** → **New repository**
3. 仓库名填：`你的用户名.github.io`（例如 `xiaren.github.io`）
4. 选择 **Public**（公开），不要勾选任何初始化文件，点 **Create repository**

### 第 2 步：上传网站文件
1. 进入刚创建的仓库
2. 点 **Add file** → **Upload files**
3. 把本文件夹里的 **全部内容**（index.html、about.html、css、js 等）拖进网页
   - 注意：`css` 和 `js` 是文件夹，整个文件夹一起拖进去，GitHub 会自动保留目录结构
4. 点 **Commit changes** 提交

### 第 3 步：开启 Pages
1. 仓库页面点 **Settings** → 左侧 **Pages**
2. 在 "Build and deployment" 下的 **Source** 选 **Deploy from a branch**
3. **Branch** 选 `main`，文件夹选 `/ (root)`，点 **Save**
4. 等 1-2 分钟，访问 `https://你的用户名.github.io` 就能看到网站了

### 第 4 步：（可选）绑定自己的域名
1. 先在阿里云购买域名（见后文"购买域名"）
2. 在 GitHub Pages 设置页最下方 **Custom domain** 填入你的域名，点 **Save**
3. 到阿里云域名控制台 → 解析设置，添加两条记录：

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| CNAME | www | 你的用户名.github.io |
| A | @ | 185.199.108.153 |

4. 等解析生效（几分钟～24小时），回到 GitHub 勾选 **Enforce HTTPS**

## 三、上线前必须替换的内容

网站里有一些占位信息，上线前请改掉：

| 位置 | 需要替换 | 说明 |
|---|---|---|
| 所有页面顶部 | "霞工" 站点名 | 换成你的名字或品牌名 |
| contact.html | 电话号码、邮箱 | 替换成你真实联系方式 |
| about.html | 个人简介文字 | 换成你的真实经历 |
| index.html | "10+ / 500+ / 30+" 数据 | 换成你的真实数据，或删掉 |
| 各页面 | 图片位置（emoji 占位） | 后续可替换为自己的照片 |

**查找方法**：用记事本或任意编辑器打开 HTML 文件，搜索"霞工""138-0000-0000""yourname@example.com"等字样，替换即可。

## 四、如何发布新文章（写行业动态）

1. 打开仓库，进入 `articles.html`，点右上角铅笔图标（编辑）
2. 在文章列表区域复制一段 `<article>...</article>` 结构，粘贴后修改标题、日期和描述
3. 复制一个现有文章页（如 `article-3.html`）重命名为 `article-4.html`，把里面的正文替换成新文章内容
4. 回到 GitHub 网页，点 **Add file** → **Upload files** 上传新文件，提交后稍等 1-2 分钟即生效

## 五、购买域名（可选，一年几十元）

1. 打开阿里云万网：https://wanwang.aliyun.com
2. 搜索想用的域名（推荐 `你的名字.com`，新用户首年约 33 元）
3. 下单并完成实名认证即可

## 六、常见问题

- **为什么上传后打不开？** 首次部署需要 1-2 分钟，确认仓库名是否为 `用户名.github.io`、Pages 设置里 branch 是否为 `main`。
- **想要修改网站颜色/文字？** 颜色都在 `css/style.css` 顶部 `:root` 里定义，改一行即可换主题色。
- **如何看网站效果？** 直接双击本地 `index.html` 就能在浏览器预览，效果和上线后一致。

---

© 霞工 · 环博会展位服务
