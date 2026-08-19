// ===== Good People shared behavior =====

// Single source of truth for the Kakao open chat link.
// Any element with [data-kakao] gets its href set from here.
var KAKAO_URL = "https://open.kakao.com/o/swbKYemi";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-kakao]").forEach(function (el) {
    el.setAttribute("href", KAKAO_URL);
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = isOpen ? "✕" : "☰";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.textContent = "☰";
      });
    });
  }

  // Accordion (services.html)
  document.querySelectorAll(".acc-head").forEach(function (head) {
    head.addEventListener("click", function () {
      var item = head.closest(".acc-item");
      var body = item.querySelector(".acc-body");
      var isOpen = item.classList.contains("open");

      document.querySelectorAll(".acc-item.open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".acc-body").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        body.style.maxHeight = null;
      } else {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
  var openAcc = document.querySelector(".acc-item.open .acc-body");
  if (openAcc) openAcc.style.maxHeight = openAcc.scrollHeight + "px";

  // Portfolio preview modal (portfolio.html)
  var modal = document.getElementById("preview-modal");
  if (modal) {
    var frame = document.getElementById("preview-frame");
    var frameWrap = document.getElementById("preview-frame-wrap");
    var titleEl = document.getElementById("preview-title");
    var openInTabLink = document.getElementById("preview-open-tab");
    var modeButtons = modal.querySelectorAll("[data-mode]");

    function setMode(mode) {
      frameWrap.setAttribute("data-mode", mode);
      modeButtons.forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-mode") === mode);
      });
    }

    document.querySelectorAll("[data-preview]").forEach(function (card) {
      card.addEventListener("click", function () {
        var url = card.getAttribute("data-preview");
        var name = card.getAttribute("data-name") || "";
        frame.src = url;
        titleEl.textContent = name;
        openInTabLink.setAttribute("href", url);
        setMode("pc");
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    modeButtons.forEach(function (b) {
      b.addEventListener("click", function () {
        setMode(b.getAttribute("data-mode"));
      });
    });

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
      frame.src = "about:blank";
    }
    modal.querySelector(".preview-close").addEventListener("click", closeModal);
    modal.querySelector(".preview-backdrop").addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  }

  // Portfolio category filter (portfolio.html)
  var filterBar = document.getElementById("pf-filters");
  if (filterBar) {
    var cards = document.querySelectorAll("[data-category]");
    filterBar.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBar.querySelectorAll("button").forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        var cat = btn.getAttribute("data-filter");
        var visible = 0;
        cards.forEach(function (card) {
          var show = cat === "all" || card.getAttribute("data-category") === cat;
          card.style.display = show ? "" : "none";
          if (show) visible++;
        });
        var countEl = document.getElementById("pf-count");
        if (countEl) {
          countEl.textContent =
            cat === "all"
              ? "총 " + visible + "개 업종 샘플"
              : btn.textContent + " · " + visible + "개";
        }
      });
    });
  }
});
