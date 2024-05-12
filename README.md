# hanime1.me的漫画下载器脚本
[`hanime1.me`](hanime1.me)的漫画下载脚本

源代码可以在[download.js](https://github.com/xzyl4303/hlib-get/blob/main/download.js)查看。

使用方法：

1：创建一个新书签，名称随便，URL为
```
javascript:void%20function(){(function(){const%20a=document.querySelectorAll(%22.comics-panel-margin.comics-panel-margin-top.comics-panel-padding.comics-thumbnail-wrapper.comic-rows-wrapper%20a%20img%22).length;alert(`一共有${a}张图片`);const%20b=confirm(%22\u662F\u5426\u91CD\u547D\u540D\u56FE\u7247\uFF1F%22);let%20c=null;b%26%26(c=prompt(%22\u8BF7\u8F93\u5165\u547D\u540D\u89C4\u5219\uFF08\u4F7F\u7528%20*%20\u4F5C\u4E3A\u901A\u914D\u7B26\uFF0C\u793A\u4F8B\uFF1AXXX*\uFF09%22));let%20d=document.querySelector(%22.title.comics-metadata-margin-top%20.before%22).innerText.trim();d+=document.querySelector(%22.title.comics-metadata-margin-top%20.pretty%22).innerText.trim();const%20e=document.createElement(%22script%22);e.src=%22https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js%22,e.onload=()=%3E{const%20a=document.querySelectorAll(%22.comics-panel-margin.comics-panel-margin-top.comics-panel-padding.comics-thumbnail-wrapper.comic-rows-wrapper%20a%20img%22),e=[];a.forEach(a=%3E{const%20b=a.getAttribute(%22data-srcset%22);b%26%26e.push({%22Image%20Link%22:b})});const%20f=new%20JSZip;e.forEach((a,g)=%3E{const%20h=a[%22Image%20Link%22];fetch(h).then(a=%3Ea.blob()).then(a=%3E{let%20i=`${g+1}.jpg`;if(b){i=c.replace(%22*%22,`${g+1}`);const%20a=h.split(%22.%22).pop();i+=`.${a}`}f.file(i,a),g===e.length-1%26%26f.generateAsync({type:%22blob%22}).then(a=%3E{const%20b=document.createElement(%22a%22);b.href=URL.createObjectURL(a),b.download=`${d}.zip`,b.click()})}).catch(a=%3Econsole.error(%22Error%20fetching%20image:%22,a))})},document.head.appendChild(e)})()}();
```
(`将这个代码复制到书签的URL栏中`)

2：打开`hanime1.me`，然后再喜欢的漫画的界面点击这个书签。

3：完成！


