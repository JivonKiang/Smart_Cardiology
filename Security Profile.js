// config.js - 安全配置文件
// 将此文件放在与HTML文件相同的目录中

// GitHub配置 - 请替换为您的实际配置
const GITHUB_CONFIG = {
    token: "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", // 替换为您的GitHub个人访问令牌
    repo: "JivonKiang/Smart_Cardiology"  // 替换为您的GitHub仓库名
};

// 导出配置对象
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GITHUB_CONFIG;
} else {
    window.GITHUB_CONFIG = GITHUB_CONFIG;
}
