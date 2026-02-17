document.addEventListener("DOMContentLoaded", function () {
  // --- 1. メインコピーのスライド切り替え機能 ---
  const slides = document.querySelectorAll(".slide-item");
  let currentSlide = 0;

  // ▼ 修正箇所: 10秒間隔に変更 (10000ミリ秒) ▼
  const slideInterval = 10000;

  function nextSlide() {
    // 現在のスライドを非表示
    slides[currentSlide].classList.remove("active");

    // 次のスライドインデックス計算
    currentSlide = (currentSlide + 1) % slides.length;

    // 次のスライドを表示
    slides[currentSlide].classList.add("active");
  }

  // 2枚以上ある場合のみスライド実行
  if (slides.length > 1) {
    setInterval(nextSlide, slideInterval);
  }

  // --- 2. トップへ戻るボタンのスムーススクロール ---
  const scrollTopBtn = document.getElementById("scrollTop");
  if (scrollTopBtn) {
    // エラー防止のため存在確認を追加
    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- 3. お知らせ（有事・平時）の制御 ---
  const isEmergency = false; // ★ここを true にするとお知らせが表示されます
  const newsSection = document.getElementById("news-section");

  if (newsSection) {
    // エラー防止
    if (isEmergency) {
      newsSection.classList.remove("hidden");
    } else {
      newsSection.classList.add("hidden");
    }
  }
});

/* script.js */

document.addEventListener("DOMContentLoaded", function () {
  // --- グローバルメニュー（ハンバーガー）制御 ---
  const menuBtn = document.querySelector(".menu-icon"); // ヘッダーのハンバーガー
  const closeBtn = document.getElementById("drawer-close"); // ドロワー内の閉じるボタン
  const drawerMenu = document.getElementById("drawer-menu");

  // 開く処理
  if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      drawerMenu.classList.add("open");
    });
  }

  // 閉じる処理
  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      drawerMenu.classList.remove("open");
    });
  }

  // --- (以下、既存のスライダーやスムーススクロールのコードを維持) ---

  const slides = document.querySelectorAll(".slide-item");
  let currentSlide = 0;
  const slideInterval = 20000; // 20秒

  function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  if (slides.length > 1) {
    setInterval(nextSlide, slideInterval);
  }
});
