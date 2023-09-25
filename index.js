if ((typeof window == 'object' && !window.zhue) || (typeof global == 'object' && !global.zhue)) window ? window.zhue = {} : global.zhue = {}
zhue.showInfoBox = function(t, e) {
  function n(e) {
    for (var t = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")).split(","), n = "#", o = 0; 3 > o; o++) {
      var r = parseInt(t[o].trim()).toString(16);
      n += 1 === r.length ? "0" + r : r
    }
    return n
  }

  function o(e) {
    var t = e.replace("#", ""),
      n = parseInt(t.substr(0, 2), 16),
      o = parseInt(t.substr(2, 2), 16),
      r = parseInt(t.substr(4, 2), 16),
      a = 255 - n,
      s = 255 - o,
      l = 255 - r,
      i = "#" + a.toString(16).padStart(2, "0") + s.toString(16).padStart(2, "0") + l.toString(16).padStart(2, "0");
    return i
  }

  function r(e, t) {
    var n = e.replace("#", ""),
      o = parseInt(n.substr(0, 2), 16),
      r = parseInt(n.substr(2, 2), 16),
      a = parseInt(n.substr(4, 2), 16);
    o = Math.max(0, o - t), r = Math.max(0, r - t), a = Math.max(0, a - t);
    var s = "#" + o.toString(16).padStart(2, "0") + r.toString(16).padStart(2, "0") + a.toString(16).padStart(2, "0");
    return s
  }
  var a = document.createElement("div");
  a.classList.add("info-box"), a.style.position = "fixed", a.style.top = "50%", a.style.left = "50%", a.style.transform = "translate(-50%, -50%)", a.style.backgroundColor = t.bgColor, a.style.border = t.border, a.style.padding = "3mm";
  var s = document.createElement("h2");
  s.innerText = t.title;
  var l = document.createElement("img");
  l.src = t.icon;
  var i = document.createElement("p");
  i.innerText = t.content, s.style.color = o(t.bgColor), i.style.color = o(t.bgColor), a.appendChild(s), a.appendChild(l), a.appendChild(i);
  var c = document.createElement("div");
  t.buttons.forEach(function(e) {
    var t;
    if (e.linkhref ? (t = document.createElement("a"), t.setAttribute("href", e.linkhref), t.setAttribute("target", e.linktarget || "_blank")) : t = document.createElement("div"), t.style.backgroundColor = e.bgColor, t.style.padding = "1mm", t.style.marginRight = "1mm", t.style.color = e.textColor || "#000000", t.style.border = "none", t.style.cursor = "pointer", t.style.display = "inline-flex", t.style.alignItems = "center", t.addEventListener("mouseover", function() {
        var e = t.style.backgroundColor,
          o = r(n(e), 10);
        t.style.backgroundColor = o
      }), t.addEventListener("mouseout", function() {
        t.style.backgroundColor = e.bgColor
      }), e.isCloseButton && t.addEventListener("click", function() {
        a.remove()
      }), e.icon) {
      var o = document.createElement("img");
      o.src = e.icon, o.style.marginRight = "0.5mm", o.style.width = e.iconsize[0], o.style.height = e.iconsize[1], t.appendChild(o)
    }
    var s = document.createElement("span");
    s.innerText = e.name, t.appendChild(s), c.appendChild(t)
  }), a.appendChild(c), e.appendChild(a)
}
