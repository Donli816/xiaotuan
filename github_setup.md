# GitHub仓库连接指南

要将本地仓库连接到GitHub，请按照以下步骤操作：

1. 在GitHub上创建仓库后，复制仓库的URL
2. 运行以下命令（请替换`<your-repo-url>`为您的GitHub仓库URL）：

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

例如：
```bash
git remote add origin https://github.com/username/xiaotuan.git
git branch -M main
git push -u origin main
```

## 自动同步设置

为了确保每次修改代码后自动同步到GitHub，您可以选择以下方法之一：

### 方法一：使用Git Hooks

在项目根目录创建`.git/hooks/post-commit`文件：

```bash
#!/bin/sh
git push origin main
```

然后赋予执行权限：

```bash
chmod +x .git/hooks/post-commit
```

### 方法二：使用GitHub Actions

1. 创建`.github/workflows`目录
2. 在该目录下创建`sync.yml`文件：

```yaml
name: Sync Repository

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Auto Commit
      run: |
        git config --global user.name 'GitHub Actions'
        git config --global user.email 'actions@github.com'
        git add .
        git diff --quiet && git diff --staged --quiet || git commit -m "自动同步：$(date)"
        git push
```

### 方法三：使用VSCode或其他IDE的Git集成功能

大多数现代IDE如VSCode都提供了Git集成，可以设置自动提交和推送。

在VSCode中，您可以安装如"GitLens"或"Git Automator"等扩展来自动化Git操作。 