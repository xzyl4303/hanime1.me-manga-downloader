function startdownload(){
const imageCount = document.querySelectorAll('.comics-panel-margin.comics-panel-margin-top.comics-panel-padding.comics-thumbnail-wrapper.comic-rows-wrapper a img').length;
alert(`一共有${imageCount}张图片`);
const renameOption = confirm('是否重命名图片？');
let renamePattern = null;
if (renameOption) {
    renamePattern = prompt('请输入命名规则（使用 * 作为通配符，示例：XXX*）');
}

// 获取 ZIP 文件名
let zipName = document.querySelector('.title.comics-metadata-margin-top .before').innerText.trim();
zipName += document.querySelector('.title.comics-metadata-margin-top .pretty').innerText.trim();

// 动态引入 JSZip 库
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js';
script.onload = () => {
    // JSZip 加载完成后执行以下代码

    // 获取所有指定 class 的元素
    const elements = document.querySelectorAll('.comics-panel-margin.comics-panel-margin-top.comics-panel-padding.comics-thumbnail-wrapper.comic-rows-wrapper a img');

    // 存储图片链接的数组
    const imageLinks = [];

    // 遍历每个元素，提取图片链接
    elements.forEach(element => {
        const imageLink = element.getAttribute('data-srcset');
        if (imageLink) {
            imageLinks.push({ 'Image Link': imageLink });
        }
    });

    // 创建一个新的 JSZip 实例
    const zip = new JSZip();

    // 循环将图片添加到 zip 中
    imageLinks.forEach((link, index) => {
        // 获取图片链接
        const imageUrl = link['Image Link'];

        // 使用 fetch 获取图片数据
        fetch(imageUrl)
            .then(response => response.blob())
            .then(blob => {
                // 重命名图片
                let imageName = `${index + 1}.jpg`;
                if (renameOption) {
                    imageName = renamePattern.replace('*', `${index + 1}`);
                    // 保留原始文件后缀
                    const extension = imageUrl.split('.').pop();
                    imageName += `.${extension}`;
                }

                // 将图片添加到 zip 中
                zip.file(imageName, blob);
                
                // 如果是最后一张图片，则生成并下载 zip 文件
                if (index === imageLinks.length - 1) {
                    zip.generateAsync({ type: 'blob' }).then(content => {
                        // 创建一个 <a> 元素
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(content);
                        link.download = `${zipName}.zip`;
                        // 模拟点击下载
                        link.click();
                    });
                }
            })
            .catch(error => console.error('Error fetching image:', error));
    });
};
document.head.appendChild(script);
}
startdownload()
