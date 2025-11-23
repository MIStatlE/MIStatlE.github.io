// 这里存放所有的文章具体内容
// 格式：JSX
import React from 'react';

// 辅助组件：用于显示数学公式块
const MathBlock = ({ children }) => (
  <div className="bg-stone-900 text-stone-100 p-6 rounded-lg font-mono text-sm overflow-x-auto my-8 shadow-xl border border-stone-700">
    {children}
  </div>
);

// 辅助组件：代码块
const CodeBlock = ({ lang, code }) => (
  <pre><code className={`language-${lang}`}>{code}</code></pre>
);

// --- 文章数据库 ---
export const articles = {
  // ID: 文章内容对象
  'dl-5': {
    title: "条件化技巧：为何我们只需要预测噪声？",
    date: "NOV 18, 2025",
    tag: "DEEP LEARNING",
    content: (
      <>
        <p className="text-xl font-light leading-relaxed mb-8 font-serif">
          在 Score-based 生成模型中，我们经常遇到一个反直觉的结论：虽然我们的目标是学习数据分布，但训练过程却是在预测噪声。
        </p>
        
        {/* 直觉卡片 */}
        <div className="bg-blue-50/50 p-6 border-l-2 border-blue-900 my-8 rounded-r-lg">
            <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">Intuition</h4>
            <p className="text-base text-stone-700 m-0">
                Conditional Technique 巧妙地利用了高斯加噪过程的可逆性。我们将不可计算的边缘分数替换为可计算的条件分数。
            </p>
        </div>

        <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4 font-serif">核心定理</h3>
        <p>对于任意固定噪声尺度 $\sigma > 0$，Score Matching (SM) 与 Denoising Score Matching (DSM) 的目标函数仅相差一个常数：</p>
        
        <MathBlock>
          $$ \mathcal{L}_{SM}(\phi; \sigma) = \mathcal{L}_{DSM}(\phi; \sigma) + C $$
        </MathBlock>

        <p>这意味着，优化 DSM 的梯度等价于优化 SM 的梯度。我们只需要一段简单的代码即可验证：</p>

        <CodeBlock lang="python" code={`def dsm_loss(x_0, sigma):
    epsilon = torch.randn_like(x_0) # 生成噪声
    x_t = x_0 + sigma * epsilon     # 加噪
    score = model(x_t)              # 预测
    target = -epsilon / sigma       # 目标
    return torch.mean((score - target) ** 2)`} 
        />

        {/* 可以在这里添加更多段落、图片等 */}
      </>
    ),
    // 可以在这里写具体的证明步骤，用于在点击 "View Proof" 时显示
    proof: (
        <div className="mt-4 p-6 bg-stone-100 rounded text-sm font-mono text-stone-600 fade-in">
            <h4 className="font-bold mb-2">1. Expansion of Score Matching Loss</h4>
            <p className="mb-2">$$ \mathcal{L}_{SM} = \mathbb{E}_{p(x)} [ \|s_\theta(x) - \nabla_x \log p(x)\|^2 ] $$</p>
            <h4 className="font-bold mb-2 mt-4">2. The Cross-Term Trick</h4>
            <p>利用部分积分法（Integration by Parts），我们可以证明交叉项相等。</p>
        </div>
    )
  },

  // --- 示例：添加新文章 ---
  // 只要取消下面注释，就可以增加一篇新文章
  /*
  'math-1': {
    title: "新的数学笔记",
    date: "DEC 01, 2025",
    tag: "MATH",
    content: (
      <>
        <p>在这里写正文...</p>
      </>
    )
  } 
  */
};
