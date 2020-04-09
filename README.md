# 强制 Chrome 打开 PDF

[对于 PDF Chrome 有时直接打开有时下载](https://superuser.com/questions/1277819/why-does-chrome-sometimes-download-a-pdf-instead-of-opening-it) ，好像是因为服务器设置了 `Content-Disposition`：

    ~ $ curl -I https://gforge.inria.fr/frs/download.php/file/38170/ModernC.pdf
    HTTP/1.1 200 OK
    Date: Thu, 09 Apr 2020 10:38:45 GMT
    Server: Apache/2.4.10 (Debian)
    Access-Control-Allow-Origin: http://gforge.inria.fr
    Content-Disposition: attachment; filename="ModernC.pdf"
    Content-Length: 2159987
    X-Content-Type-Options: nosniff
    Content-Security-Policy: frame-ancestors 'self' gforge.inria.fr *.gforge.inria.fr forge-qualif.inria.fr *.forge-qualif.inria.fr ;
    Content-Type: application/binary

我试了下 [PDF Forcedownload Blocker - Chrome 网上应用店](https://chrome.google.com/webstore/detail/pdf-forcedownload-blocker/ojbkmmcompidaghfnodmbeiankbbfckl) 发现对上面这个 PDF 没效果，而且它的代码看起来很简单，打算试一试自己实现，第一次写 Chrome 插件。

关于上面的 PDF 还有一点值得注意的是 `Content-Type` 设置错了，下载时 Chrome 给出了警告：

> Resource interpreted as Document but transferred with MIME type application/binary: "https://gforge.inria.fr/frs/download.php/latestfile/5298/ModernC.pdf".

## 参考链接

- [Getting Started Tutorial - Google Chrome](https://developer.chrome.com/extensions/getstarted)

## 替代选择

- [PDF Forcedownload Blocker - Chrome 网上应用店](https://chrome.google.com/webstore/detail/pdf-forcedownload-blocker/ojbkmmcompidaghfnodmbeiankbbfckl)
- [No PDF Download - Chrome 网上应用店](https://chrome.google.com/webstore/detail/no-pdf-download/ikhahkidgnljlniknmendeflkdlfhonj) (这个更加靠谱)
