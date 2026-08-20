// ===== Good People shared behavior =====

// Single source of truth for the Kakao open chat link.
// Any element with [data-kakao] gets its href set from here.
var KAKAO_URL = "https://open.kakao.com/o/swbKYemi";

// Privacy policy / terms of service content, shown via modal from
// any [data-legal="privacy"|"terms"] trigger (see footer on every page).
var LEGAL_CONTENT = {
  privacy: {
    title: "개인정보처리방침",
    html:
      "<h4>1. 총칙</h4>" +
      "<p>Good People(이하 '회사')는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 이 개인정보처리방침을 통해 이용자가 제공하는 개인정보가 어떤 목적과 방식으로 이용되며, 개인정보 보호를 위해 어떤 조치가 취해지고 있는지 안내드립니다.</p>" +

      "<h4>2. 수집하는 개인정보 항목 및 수집방법</h4>" +
      "<p>회사는 카카오톡 상담, 전화 상담, 무료 상권진단 신청 등을 통해 아래 개인정보를 수집합니다.</p>" +
      "<ul>" +
      "<li>필수 항목 : 이름(또는 상호명), 연락처(전화번호 또는 카카오톡 ID)</li>" +
      "<li>선택 항목 : 매장 주소, 업종, 상담 내용</li>" +
      "</ul>" +
      "<p>수집 방법 : 카카오톡 오픈채팅 상담, 전화 상담, 홈페이지 내 상담 신청 시 이용자가 직접 입력·전달하는 방식으로 수집합니다.</p>" +

      "<h4>3. 개인정보의 수집 및 이용목적</h4>" +
      "<ul>" +
      "<li>상담 요청 확인 및 응대, 무료 상권진단 결과 안내</li>" +
      "<li>홈페이지 제작·네이버플레이스·블로그대행·체험단 서비스 견적 및 계약 진행</li>" +
      "<li>서비스 제공에 따른 공지사항 전달</li>" +
      "</ul>" +

      "<h4>4. 개인정보의 보유 및 이용기간</h4>" +
      "<p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만 계약 체결·이행 관련 정보는 계약 종료 후 1년간, 관계 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.</p>" +
      "<ul>" +
      "<li>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래법)</li>" +
      "<li>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래법)</li>" +
      "<li>소비자 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래법)</li>" +
      "</ul>" +

      "<h4>5. 개인정보의 파기절차 및 방법</h4>" +
      "<p>이용목적이 달성된 개인정보는 지체 없이 파기하며, 전자적 파일 형태로 저장된 정보는 복구할 수 없는 방법으로 영구 삭제합니다.</p>" +

      "<h4>6. 개인정보의 제3자 제공</h4>" +
      "<p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 이용자가 사전에 동의하거나 법령의 규정에 의한 경우는 예외로 합니다.</p>" +

      "<h4>7. 개인정보처리 위탁</h4>" +
      "<p>회사는 현재 개인정보 처리업무를 외부에 위탁하고 있지 않습니다. 향후 위탁이 발생할 경우 위탁받는 자와 위탁업무 내용을 사전에 고지하고, 필요한 경우 동의를 받겠습니다.</p>" +

      "<h4>8. 정보주체의 권리·의무 및 행사방법</h4>" +
      "<p>이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있으며, 아래 담당자에게 연락 주시면 지체 없이 조치합니다.</p>" +

      "<h4>9. 개인정보의 안전성 확보조치</h4>" +
      "<p>회사는 개인정보의 안전성 확보를 위해 상담 기록에 대한 접근을 최소한의 담당자로 제한하고, 목적 달성 후 관련 자료를 파기하는 등 필요한 조치를 취하고 있습니다.</p>" +

      "<h4>10. 개인정보 보호책임자</h4>" +
      "<p>성명 : 배진우 (대표)<br>연락처 : 010-3430-2565<br>이메일 : gooodppl0@gmail.com</p>" +

      "<h4>11. 고지의 의무</h4>" +
      "<p>본 방침은 시행일로부터 적용되며, 내용의 추가·삭제 및 수정이 있을 경우 개정 최소 7일 전부터 홈페이지를 통해 공지합니다.</p>" +
      "<p style=\"color:var(--text-faint);margin-top:16px;\">시행일 : 2026년 8월 20일<br>※ 사업자등록 완료 후 사업자 정보(사업자등록번호 등)를 포함하여 갱신될 예정입니다.</p>"
  },
  terms: {
    title: "이용약관",
    html:
      "<h4>제1조 (목적)</h4>" +
      "<p>이 약관은 Good People(이하 '회사')이 제공하는 홈페이지 제작, 네이버플레이스 세팅, 블로그대행, 체험단 등 온라인 매장 관리 서비스(이하 '서비스')의 이용과 관련하여 회사와 이용자(이하 '고객') 간의 권리, 의무 및 책임사항을 정함을 목적으로 합니다.</p>" +

      "<h4>제2조 (용어의 정의)</h4>" +
      "<p>① '서비스'란 회사가 제공하는 홈페이지 제작 및 온라인 매장 관리 관련 일체의 서비스를 말합니다.<br>② '고객'이란 회사와 상담 또는 계약을 통해 서비스를 이용하는 사업자 또는 개인을 말합니다.</p>" +

      "<h4>제3조 (약관의 게시와 개정)</h4>" +
      "<p>회사는 이 약관을 홈페이지에 게시하며, 관련 법령을 위반하지 않는 범위에서 개정할 수 있습니다. 개정 시 적용일자 및 개정사유를 명시하여 최소 7일 전부터 공지합니다.</p>" +

      "<h4>제4조 (서비스의 내용)</h4>" +
      "<ul>" +
      "<li>홈페이지 제작 (미니 홈페이지 / STANDARD 홈페이지)</li>" +
      "<li>네이버플레이스 세팅 및 상권 분석</li>" +
      "<li>블로그대행 (건 단위 콘텐츠 제작)</li>" +
      "<li>체험단 (지역 블로거 매칭)</li>" +
      "<li>온라인 매장 관리 (월간 / 연간)</li>" +
      "</ul>" +

      "<h4>제5조 (서비스 이용계약의 체결)</h4>" +
      "<p>이용계약은 고객의 상담 신청 후 회사가 제안하는 견적에 고객이 동의하고, 계약금 또는 이용요금을 결제함으로써 성립합니다.</p>" +

      "<h4>제6조 (서비스 이용료 및 결제)</h4>" +
      "<p>서비스 이용료는 홈페이지에 게시된 이용금액을 기준으로 하며, 부가세를 포함한 금액입니다. 블로그대행·체험단은 최소 10건 단위로 결제하며, 세부 결제 방법은 상담 시 안내합니다.</p>" +

      "<h4>제7조 (계약 해지 및 환불)</h4>" +
      "<p>계약 해지 및 환불 기준은 <a href=\"guide.html\" style=\"color:var(--text);text-decoration:underline;\">이용안내</a> 페이지의 기준을 따릅니다. 착수 전 취소는 전액 환불하며, 착수 이후에는 진행률에 따라 환불 금액이 조정됩니다.</p>" +

      "<h4>제8조 (회사의 의무)</h4>" +
      "<p>회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적인 서비스 제공을 위해 노력합니다.</p>" +

      "<h4>제9조 (고객의 의무)</h4>" +
      "<p>고객은 서비스 제공에 필요한 자료(사진, 메뉴, 가격 등)를 정확하게 제공해야 하며, 자료의 오류나 저작권 문제에 대한 책임은 고객에게 있습니다.</p>" +

      "<h4>제10조 (지식재산권)</h4>" +
      "<p>회사가 제작한 디자인 및 코드의 저작권은 계약에서 별도로 정하지 않는 한 대금 완납 후 고객에게 귀속됩니다. 다만 회사는 포트폴리오 목적으로 제작물을 활용할 수 있습니다.</p>" +

      "<h4>제11조 (면책조항)</h4>" +
      "<p>회사는 네이버·구글 등 외부 플랫폼의 정책 변경, 검색 노출 순위 변동 등 회사의 통제범위를 벗어난 사유로 발생한 손해에 대해서는 책임을 지지 않습니다.</p>" +

      "<h4>제12조 (분쟁해결)</h4>" +
      "<p>서비스 이용과 관련하여 분쟁이 발생한 경우 회사와 고객은 상호 협의하여 원만히 해결하도록 노력하며, 협의가 이루어지지 않을 경우 관련 법령 및 상관례에 따릅니다.</p>" +

      "<p style=\"color:var(--text-faint);margin-top:16px;\">부칙<br>이 약관은 2026년 8월 20일부터 시행합니다.<br>※ 사업자등록 완료 후 사업자 정보를 포함하여 갱신될 예정입니다.</p>"
  }
};

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
        setMode(card.getAttribute("data-default-mode") || "pc");
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

  // Privacy policy / terms of service modal
  var legalTriggers = document.querySelectorAll("[data-legal]");
  if (legalTriggers.length) {
    var modal = document.createElement("div");
    modal.className = "legal-modal";
    modal.id = "legal-modal";
    modal.innerHTML =
      '<div class="legal-backdrop"></div>' +
      '<div class="legal-panel">' +
        '<div class="legal-head"><h3 id="legal-title"></h3>' +
        '<button type="button" class="legal-close" aria-label="닫기">✕</button></div>' +
        '<div class="legal-body" id="legal-body"></div>' +
      "</div>";
    document.body.appendChild(modal);

    var legalTitleEl = document.getElementById("legal-title");
    var legalBodyEl = document.getElementById("legal-body");

    function openLegal(key) {
      var doc = LEGAL_CONTENT[key];
      if (!doc) return;
      legalTitleEl.textContent = doc.title;
      legalBodyEl.innerHTML = doc.html;
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeLegal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    legalTriggers.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        openLegal(el.getAttribute("data-legal"));
      });
    });
    modal.querySelector(".legal-close").addEventListener("click", closeLegal);
    modal.querySelector(".legal-backdrop").addEventListener("click", closeLegal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeLegal();
    });
  }
});
