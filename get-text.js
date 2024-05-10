// 获取 <h3 class="text-center m-3"> 的文本内容
const h3Element = document.querySelector('h3.text-center.m-3');
const h3Text = h3Element ? h3Element.innerText.trim() : '';

// 获取 class 为 col-lg-9 mt-3 的元素中的所有 <p> 的文本内容
const colLg9Element = document.querySelector('.col-lg-9.mt-3');
let pTexts = [];

// 如果元素存在，则获取所有 <p> 元素的文本
if (colLg9Element) {
  const pElements = colLg9Element.querySelectorAll('p');
  pElements.forEach(p => {
    pTexts.push(p.innerText.trim());
  });
}

// 合并文本内容，用两个换行符分隔
const combinedText = [h3Text, ...pTexts].join('\n\n');

// 创建按钮并将其添加到网页顶部
const copyButton = document.createElement('button');
copyButton.innerText = '复制内容到剪贴板';
copyButton.style.position = 'fixed'; // 使按钮固定在网页顶部
copyButton.style.top = '10px'; // 距离顶部 10px
copyButton.style.left = '50%'; // 水平居中
copyButton.style.transform = 'translateX(-50%)'; // 水平居中
copyButton.style.padding = '10px 20px'; // 按钮内边距
copyButton.style.zIndex = '1000'; // 确保按钮在最上层

// 按钮点击事件：将内容复制到剪贴板
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(combinedText)
    .then(() => {
      console.log('内容已复制到剪贴板');
    })
    .catch(err => {
      console.error('复制失败：', err);
    });
});

// 将按钮添加到网页的 body 中
document.body.appendChild(copyButton);
