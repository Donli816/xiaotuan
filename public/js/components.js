// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 填充状态栏
  const statusBars = document.querySelectorAll('.status-bar');
  statusBars.forEach(statusBar => {
    statusBar.innerHTML = `
      <div class="status-bar-left">
        <span>9:41</span>
      </div>
      <div class="status-bar-center">
        <span id="page-title"></span>
      </div>
      <div class="status-bar-right">
        <span>
          <i class="fas fa-signal"></i>
          <i class="fas fa-wifi"></i>
          <i class="fas fa-battery-full"></i>
        </span>
      </div>
    `;
  });

  // 填充底部导航栏
  const tabBars = document.querySelectorAll('.tab-bar');
  tabBars.forEach(tabBar => {
    tabBar.innerHTML = `
      <a href="home.html" class="tab-item" data-page="home">
        <div class="tab-icon"><i class="fas fa-home"></i></div>
        <div>首页</div>
      </a>
      <a href="chat.html" class="tab-item" data-page="chat">
        <div class="tab-icon"><i class="fas fa-search"></i></div>
        <div>搜索</div>
      </a>
      <a href="history.html" class="tab-item" data-page="history">
        <div class="tab-icon"><i class="fas fa-history"></i></div>
        <div>历史</div>
      </a>
      <a href="collections.html" class="tab-item" data-page="collections">
        <div class="tab-icon"><i class="fas fa-bookmark"></i></div>
        <div>收藏</div>
      </a>
      <a href="settings.html" class="tab-item" data-page="settings">
        <div class="tab-icon"><i class="fas fa-cog"></i></div>
        <div>设置</div>
      </a>
    `;
  });

  // 高亮当前页面对应的导航项
  const pageName = document.body.getAttribute('data-page');
  if(pageName) {
    const activeTab = document.querySelector(`.tab-item[data-page="${pageName}"]`);
    if(activeTab) {
      activeTab.classList.add('active');
    }
    
    // 设置页面标题
    const pageTitles = {
      'home': '智搜',
      'chat': '对话搜索',
      'history': '历史记录',
      'collections': '我的收藏',
      'settings': '设置'
    };
    
    const pageTitleElement = document.getElementById('page-title');
    if(pageTitleElement && pageTitles[pageName]) {
      pageTitleElement.textContent = pageTitles[pageName];
    }
  }
}); 