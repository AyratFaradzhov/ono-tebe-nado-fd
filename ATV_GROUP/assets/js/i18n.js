async function loadTranslations(lang) {
  const response = await fetch(`locales/${lang}.json`);
  return response.json();
}

async function initI18n(lang) {
  const resources = {
    [lang]: {
      translation: await loadTranslations(lang),
    },
  };

  i18next.init({
    lng: lang,
    resources,
  });

  updateContent();
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = i18next.t(key);
  });
}

// 👉 ЗАПУСК ПРИ ЗАГРУЗКЕ
document.addEventListener("DOMContentLoaded", () => {
  initI18n("ru");

  const langSwitch = document.getElementById("langSwitch");

  langSwitch.addEventListener("click", () => {
    const currentLang = i18next.language || "ru";
    const newLang = currentLang === "ru" ? "en" : "ru";

    initI18n(newLang);
    langSwitch.textContent = newLang.toUpperCase();
    langSwitch.classList.toggle(
      "header__lang-switch--active",
      newLang === "en"
    );
  });
});
