// config.js - 安全配置文件
// 将此文件放在与HTML文件相同的目录中

// GitHub配置 - 请替换为您的实际配置
const GITHUB_CONFIG = {
    token: "YOUR_GITHUB_TOKEN_HERE", // 替换为您的GitHub个人访问令牌
    repo: "YOUR_USERNAME/YOUR_REPO"  // 替换为您的GitHub仓库名
};

// 导出配置对象
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GITHUB_CONFIG;
} else {
    window.GITHUB_CONFIG = GITHUB_CONFIG;
}
