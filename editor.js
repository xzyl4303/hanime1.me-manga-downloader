// 打开一个新的 about:blank 标签页
const newTab = window.open('about:blank', '_blank');

// 确保新标签页已打开
if (newTab) {
  // 定义 HTML 内容，加入 CSS 样式和 JavaScript 脚本
  const htmlContent = `
    <html>
      <head>
        <title>编辑器</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: #f0f0f0; /* 浅灰色背景 */
            color: #333; /* 深灰色文本 */
            text-align: center;
          }
          h2 {
            margin-top: 20px;
          }
          textarea {
            width: 90%; /* 让 textarea 更宽 */
            height: 100%;
            margin: 20px 0;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: #fff;
          }
          button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background: #333;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
          }
          button:hover {
            background: #555; /* 鼠标悬停时改变背景 */
          }
        </style>
      </head>
      <body>
        <textarea id="editor" placeholder="在这里输入文本..."></textarea>
        <br>
        <button id="saveButton">保存为 TXT</button>
        
        <script>
          // 函数：保存文本内容到文件
          function saveTextContent() {
            const textContent = document.getElementById('editor').value;
            const fileName = prompt("请输入保存的文件名（不包括后缀）", "Unknow");

            if (fileName === null) {
              return;
            }

            const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
            const downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.download = fileName + ".txt"; // 生成文件
            downloadLink.click(); // 启动下载
          }

          document.getElementById('saveButton').addEventListener('click', saveTextContent);

          document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && (event.key === 's' || event.keyCode === 83)) {
              event.preventDefault(); // 阻止默认保存行为
              saveTextContent(); // 触发自定义保存
            }
          });
        </script>
      </body>
    </html>
  `;

  newTab.document.write(htmlContent);
  newTab.document.close();
}
