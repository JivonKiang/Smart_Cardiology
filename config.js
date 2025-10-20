// 配置文件 - 请勿将此文件提交到版本控制
// 将此文件添加到 .gitignore 中

const GITHUB_CONFIG = {
    token: "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", // 替换为您的实际GitHub令牌
    repo: "JivonKiang/Smart_Cardiology"  // 替换为您的GitHub仓库
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GITHUB_CONFIG;
}
