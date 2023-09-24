if ((typeof window == 'object' && !window.zhue) || (typeof global == 'object' && !global.zhue)) window ? window.zhue = {} : global.zhue = {}
zhue.showInfoBox = function(t, e) {
  function n(t) {
    var e = t.replace("#", ""), n = parseInt(e.substr(0, 2), 16), r = parseInt(e.substr(2, 2), 16), o = parseInt(e.substr(4, 2), 16), a = 255 - n, i = 255 - r, l = 255 - o, s = "#" + a.toString(16).padStart(2, "0") + i.toString(16).padStart(2, "0") + l.toString(16).padStart(2, "0");
    return s;
  }
  function r(t, e) {
    var n = t.replace("#", ""), r = parseInt(n.substr(0, 2), 16), o = parseInt(n.substr(2, 2), 16), a = parseInt(n.substr(4, 2), 16);
    r = Math.max(0, r - e), o = Math.max(0, o - e), a = Math.max(0, a - e);
    var i = "#" + r.toString(16).padStart(2, "0") + o.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0");
    return i;
  }
  var o = document.createElement("div");
  o.classList.add("info-box"), o.style.position = "fixed", o.style.top = "50%", o.style.left = "50%", 
  o.style.transform = "translate(-50%, -50%)", o.style.backgroundColor = e.bgColor, 
  o.style.border = e.border, o.style.padding = "3mm";
  var a = document.createElement("h2");
  a.innerText = e.title;
  var i = document.createElement("img");
  i.src = e.icon;
  var l = document.createElement("p");
  l.innerText = e.content, a.style.color = n(e.bgColor), l.style.color = n(e.bgColor), 
  o.appendChild(a), o.appendChild(i), o.appendChild(l);
  var s = document.createElement("div");
  e.buttons.forEach(function(t) {
    var e;
    if (t.linkhref ? (e = document.createElement("a"), e.setAttribute("href", t.linkhref), 
    e.setAttribute("target", t.linktarget || "_blank")) : e = document.createElement("button"), 
    e.style.backgroundColor = t.bgColor, e.style.padding = "1mm", e.style.marginRight = "1mm", 
    e.style.color = t.textColor || "#000000", e.style.border = "none", e.style.cursor = "pointer", 
    e.style.display = "inline-flex", e.style.alignItems = "center", e.addEventListener("mouseover", function() {
      var t = e.style.backgroundColor, n = r(t, 10);
      e.style.backgroundColor = n;
    }), e.addEventListener("mouseout", function() {
      e.style.backgroundColor = t.bgColor;
    }), t.isCloseButton && e.addEventListener("click", function() {
      o.remove();
    }), t.icon) {
      var n = document.createElement("img");
      n.src = t.icon, n.style.marginRight = "0.5mm", n.style.width = t.iconsize[0], n.style.height = t.iconsize[1], 
      n.style.width = t.iconsize[0] ? t.iconsize[0] : "8px", n.style.height = t.iconsize[1] ? t.iconsize[1] : "8px", 
      e.appendChild(n);
    }
    var a = document.createElement("span");
    a.innerText = t.name, e.appendChild(a), s.appendChild(e);
  }), o.appendChild(s), t.appendChild(o);
};
