# 使用
```javascript
zhue.showInfoBox(父元素,选项)
```
## 选项
* title: 标题
* content: 内容
* icon: 图标url
* bgColor: 背景颜色
* buttons数组:
  * 元素对象:
    * name: 内容
    * isCloseButton: 是不是关闭按钮 (可选)
    * icon: 图标url (可选)
    * bgColor: 背景颜色 (可选)
    * iconsize数组 (可选):
      * 0: 宽度
      * 1: 高度
    * linkhref: 链接地址 (可选)
    * linktarget: 链接方法 (可选)
## 示例
```javascript
zhue.showInfoBox(document.body, {
  title: "Hello World",
  content: "你好世界",
  icon: "./hello_world.png",
  bgColor: "#aa00f2",
  buttons: [
    {
      name: "再见",
      isCloseButton: true,
      bgColor: "#000000"
    },
    {
      name: "你好",
      linkhref: "helloworld",
      icon: "hi.png",
      bgColor: "#123456",
      linktarget: "_self"
    },
    {
      name: "帮助",
      linkhref: "javascript:showHelp()",
      icon: "help.svg",
      iconsize: [16, 16]
    }
  ]
})
