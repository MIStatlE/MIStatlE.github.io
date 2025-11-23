文章标题 (一级标题)

元数据区域 (Metadata)

日期: 2025-11-20

分类: Deep Learning / Math

简介: 这里写一两句简短的介绍，用于在列表页显示。

1. 数学公式指南 (Math Guide)

我们使用 LaTeX 语法。

行内公式 (Inline)

当公式在段落中间时，使用单美元符号 $ 包裹。
例如：我们需要最小化目标函数 $\mathcal{L}(\theta)$ 以找到最优参数 $\theta^*$。

独立公式块 (Block)

当公式需要单独一行居中显示时，使用双美元符号 $$ 包裹。


p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x-\mu)^2}{2\sigma^2} \right)
$$**示例 2：Score Matching 目标函数**

$$\mathbb{E}*{p*{data}(x)} \left[ \nabla\_x \log p\_\theta(x) - \nabla\_x \log p\_{data}(x) \right]^2
$$**常用符号速查：**

  * 偏导数: `\nabla_x` ($\nabla_x$), `\partial` ($\partial$)
  * 期望: `\mathbb{E}` ($\mathbb{E}$)
  * 积分: `\int` ($\int$)
  * 求和: `\sum_{i=1}^N` ($\sum_{i=1}^N$)
  * 花体字母 (常用于Loss, Dataset): `\mathcal{L}` ($\mathcal{L}$), `\mathcal{D}` ($\mathcal{D}$)
  * 粗体向量: `\mathbf{x}` ($\mathbf{x}$)

-----

## 2\. 代码块指南 (Code Guide)

使用三个反引号 ` ``` ` 并指定语言（如 python, cpp, javascript）。

### Python 示例

```python
import torch
import torch.nn as nn

def get_timestep_embedding(timesteps, embedding_dim):
    """
    这里是注释：Sinusoidal embedding logic
    """
    assert len(timesteps.shape) == 1
    half_dim = embedding_dim // 2
    emb = Math.log(10000) / (half_dim - 1)
    return emb
```

-----

## 3\. 强调与引用 (Emphasis)

  * **加粗重点概念** (`**text**`)
  * *斜体表示强调* (`*text*`)
  * `行内代码/专有名词` (`     `text`     `)

> 这是一个引用块，通常用于引用论文原文或做特别的提示 (Note)。
>
> "Everything should be made as simple as possible, but not simpler."
