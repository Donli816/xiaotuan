// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 添加搜索框交互效果
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    // 聚焦时添加阴影效果
    input.addEventListener('focus', function() {
      const searchBar = this.closest('.search-bar');
      if (searchBar) {
        searchBar.style.boxShadow = '0 0 0 2px rgba(0, 122, 255, 0.2)';
      }
    });
    
    // 失焦时移除阴影效果
    input.addEventListener('blur', function() {
      const searchBar = this.closest('.search-bar');
      if (searchBar) {
        searchBar.style.boxShadow = 'none';
      }
    });
    
    // 按下回车键进行搜索
    input.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
          // 跳转到搜索结果页面
          window.location.href = `chat.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  });
  
  // 热门搜索和快捷功能项目点击效果
  const cardButtons = document.querySelectorAll('.card button');
  cardButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cardTitle = this.closest('.card-content').querySelector('.card-title');
      if (cardTitle) {
        // 跳转到搜索结果页面，带上搜索内容
        window.location.href = `chat.html?q=${encodeURIComponent(cardTitle.textContent)}`;
      }
    });
  });
  
  // 添加收藏功能
  const bookmarkButtons = document.querySelectorAll('button:has(.fa-bookmark)');
  bookmarkButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 切换收藏状态
      const isBookmarked = this.classList.toggle('bookmarked');
      
      if (isBookmarked) {
        this.style.backgroundColor = '#e1f5fe';
        this.style.color = '#039be5';
        this.innerHTML = '<i class="fas fa-bookmark" style="margin-right: 4px;"></i> 已收藏';
        
        // 可以在这里添加收藏成功的提示
        showToast('已加入收藏');
      } else {
        this.style.backgroundColor = '#f0f0f0';
        this.style.color = '';
        this.innerHTML = '<i class="fas fa-bookmark" style="margin-right: 4px;"></i> 收藏';
        
        showToast('已取消收藏');
      }
    });
  });
  
  // 添加分享功能
  const shareButtons = document.querySelectorAll('button:has(.fa-share-alt)');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      // 分享功能实现
      showToast('分享功能即将上线');
    });
  });
  
  // 设置页面开关切换效果
  const toggleSwitch = document.querySelector('.settings-item:has(.fa-moon) > div:last-child');
  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', function() {
      const isDarkMode = this.classList.toggle('off');
      
      if (isDarkMode) {
        this.style.backgroundColor = '#8e8e93';
        this.querySelector('div').style.right = 'auto';
        this.querySelector('div').style.left = '2px';
        showToast('深色模式已关闭');
      } else {
        this.style.backgroundColor = '#34c759';
        this.querySelector('div').style.left = 'auto';
        this.querySelector('div').style.right = '2px';
        showToast('深色模式已开启');
      }
    });
  }
});

// 显示提示toast
function showToast(message) {
  // 检查是否已存在toast，如果存在则移除
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  // 创建新的toast元素
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '100px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '20px';
  toast.style.zIndex = '1000';
  toast.style.opacity = '0';
  toast.style.transition = 'opacity 0.3s';
  
  // 添加到body
  document.body.appendChild(toast);
  
  // 显示toast
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);
  
  // 3秒后隐藏
  setTimeout(() => {
    toast.style.opacity = '0';
    // 完全隐藏后移除元素
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
} 