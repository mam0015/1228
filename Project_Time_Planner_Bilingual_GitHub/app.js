const GROUPS = [{"group_en": "Planning & Review", "group_fa": "بررسی و برنامه‌ریزی", "items": [{"id": "review", "en": "Review current Shopify setup", "fa": "بررسی وضعیت فعلی فروشگاه Shopify", "desc_en": "Check the current store structure and existing content.", "desc_fa": "بررسی ساختار فعلی فروشگاه و محتوای موجود.", "hours": 0.75}, {"id": "content_review", "en": "Review supplied company information", "fa": "بررسی اطلاعات ارائه‌شده شرکت", "desc_en": "Check supplied text, images, product details and links.", "desc_fa": "بررسی متن‌ها، تصاویر، اطلاعات محصولات و لینک‌های ارائه‌شده.", "hours": 0.75}]}, {"group_en": "Company Information", "group_fa": "اطلاعات شرکت", "items": [{"id": "company_info", "en": "Add company information", "fa": "وارد کردن اطلاعات شرکت", "desc_en": "Contact details, business information and social links.", "desc_fa": "اطلاعات تماس، مشخصات کسب‌وکار و لینک شبکه‌های اجتماعی.", "hours": 0.75}, {"id": "about", "en": "Add About page", "fa": "اضافه کردن صفحه درباره ما", "desc_en": "Add and format the supplied About content.", "desc_fa": "وارد کردن و مرتب‌سازی محتوای صفحه درباره ما.", "hours": 0.5}, {"id": "contact", "en": "Add Contact page", "fa": "اضافه کردن صفحه تماس با ما", "desc_en": "Add contact information and supplied contact content.", "desc_fa": "اضافه کردن اطلاعات تماس و محتوای مربوطه.", "hours": 0.4}, {"id": "policies", "en": "Add policy / information pages", "fa": "اضافه کردن صفحات قوانین و اطلاعات", "desc_en": "Add supplied shipping, return or privacy information.", "desc_fa": "اضافه کردن اطلاعات ارسال، مرجوعی یا حریم خصوصی.", "hours": 0.75}]}, {"group_en": "Products", "group_fa": "محصولات", "items": [{"id": "products10", "en": "Add or update up to 10 products", "fa": "اضافه یا آپدیت کردن تا ۱۰ محصول", "desc_en": "Titles, descriptions, images, prices and product details.", "desc_fa": "نام، توضیحات، تصاویر، قیمت و مشخصات محصولات.", "hours": 2.5}, {"id": "products20", "en": "Additional 10 products", "fa": "۱۰ محصول اضافه", "desc_en": "Select this as well if the store has around 20 products.", "desc_fa": "اگر فروشگاه حدود ۲۰ محصول دارد، این مورد را هم انتخاب کنید.", "hours": 2.0}, {"id": "variants", "en": "Product variants and options", "fa": "تنظیم مدل‌ها و گزینه‌های محصولات", "desc_en": "Size, colour or other supplied product options.", "desc_fa": "سایز، رنگ یا سایر گزینه‌های محصول.", "hours": 1.0}, {"id": "collections", "en": "Create collections / categories", "fa": "ساخت کالکشن‌ها و دسته‌بندی‌ها", "desc_en": "Organise products into supplied categories.", "desc_fa": "مرتب کردن محصولات در دسته‌بندی‌های مشخص‌شده.", "hours": 1.0}]}, {"group_en": "Store Content & Layout", "group_fa": "محتوا و چیدمان فروشگاه", "items": [{"id": "navigation", "en": "Update menus and navigation", "fa": "آپدیت منوها و مسیرهای سایت", "desc_en": "Organise header, footer and menu links.", "desc_fa": "مرتب‌سازی منوی اصلی، فوتر و لینک‌ها.", "hours": 0.75}, {"id": "homepage", "en": "Update homepage content", "fa": "آپدیت محتوای صفحه اصلی", "desc_en": "Replace or organise supplied homepage content.", "desc_fa": "جایگزینی یا مرتب‌سازی محتوای ارائه‌شده صفحه اصلی.", "hours": 1.25}, {"id": "images", "en": "Replace and organise images", "fa": "جایگزینی و مرتب‌سازی تصاویر", "desc_en": "Upload, replace and organise supplied store images.", "desc_fa": "آپلود، جایگزینی و مرتب‌سازی تصاویر فروشگاه.", "hours": 0.75}, {"id": "mobile", "en": "Basic mobile layout check", "fa": "بررسی اولیه نمایش موبایل", "desc_en": "Check the updated content on common mobile layouts.", "desc_fa": "بررسی محتوای آپدیت‌شده در نمایش موبایل.", "hours": 0.75}]}, {"group_en": "Store Configuration", "group_fa": "تنظیمات فروشگاه", "items": [{"id": "payments", "en": "Payment settings", "fa": "تنظیمات پرداخت", "desc_en": "Configure supplied payment settings.", "desc_fa": "تنظیم اطلاعات پرداخت ارائه‌شده.", "hours": 0.75}, {"id": "shipping", "en": "Shipping settings", "fa": "تنظیمات ارسال", "desc_en": "Configure supplied shipping rates and zones.", "desc_fa": "تنظیم هزینه‌ها و محدوده‌های ارسال ارائه‌شده.", "hours": 1.0}, {"id": "discounts", "en": "Discounts and promotions", "fa": "تخفیف‌ها و پروموشن‌ها", "desc_en": "Set up supplied discount codes or promotions.", "desc_fa": "تنظیم کدهای تخفیف یا پروموشن‌های ارائه‌شده.", "hours": 0.5}, {"id": "domain", "en": "Domain connection / update", "fa": "اتصال یا آپدیت دامنه", "desc_en": "Connect or update an existing domain.", "desc_fa": "اتصال یا آپدیت دامنه موجود.", "hours": 0.75}]}, {"group_en": "Final Check", "group_fa": "بررسی نهایی", "items": [{"id": "testing", "en": "Final store testing", "fa": "تست نهایی فروشگاه", "desc_en": "Check navigation, products, cart and updated content.", "desc_fa": "بررسی منوها، محصولات، سبد خرید و محتوای آپدیت‌شده.", "hours": 1.25}, {"id": "consistency", "en": "Content consistency check", "fa": "بررسی یکپارچگی محتوا", "desc_en": "Check obvious formatting, image and content issues.", "desc_fa": "بررسی مشکلات واضح در متن، تصاویر و قالب‌بندی.", "hours": 0.75}, {"id": "revision", "en": "One revision round", "fa": "یک مرحله اصلاحات", "desc_en": "One reasonable round of supplied changes.", "desc_fa": "یک مرحله اصلاحات منطقی پس از بررسی.", "hours": 1.0}]}];
const I18N = {"en": {"title": "Project Time Planner", "subtitle": "Select the work and get an estimated completion time", "eyebrow": "TIME ESTIMATE", "heading": "What does the project include?", "description": "Select the items that apply to the project. The estimated time will update automatically.", "selectHeading": "Select items", "selectDescription": "Choose only the tasks that need to be completed.", "selectAll": "Select all", "clear": "Clear", "finalLabel": "FINAL ESTIMATED TIME", "selectedLabel": "Selected items", "hours": "hours", "hour": "hour", "days": "Approximately {days} working days", "selected": "selected", "languageButton": "فارسی", "itemTime": "Typical time: {time}"}, "fa": {"title": "برنامه‌ریز زمان پروژه", "subtitle": "کارهای موردنیاز را انتخاب کنید تا زمان تقریبی پروژه محاسبه شود", "eyebrow": "تخمین زمان", "heading": "پروژه شامل چه کارهایی است؟", "description": "مواردی که در پروژه نیاز هستند را انتخاب کنید. زمان تقریبی به‌صورت خودکار محاسبه می‌شود.", "selectHeading": "انتخاب موارد", "selectDescription": "فقط کارهایی که باید انجام شوند را انتخاب کنید.", "selectAll": "انتخاب همه", "clear": "پاک کردن", "finalLabel": "زمان تقریبی نهایی", "selectedLabel": "موارد انتخاب‌شده", "hours": "ساعت", "hour": "ساعت", "days": "تقریباً {days} روز کاری", "selected": "انتخاب شده", "languageButton": "English", "itemTime": "زمان معمول: {time}"}};

const STORAGE_KEY = "projectTimePlannerBilingual";
let state = {
  lang: "en",
  selected: {}
};

GROUPS.flatMap(g => g.items).forEach(item => state.selected[item.id] = false);

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  if (saved) state = {...state, ...saved};
} catch (e) {}

const $ = id => document.getElementById(id);

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatHours(value) {
  const lang = state.lang;
  if (value === 0) return lang === "fa" ? "۰ ساعت" : "0 hours";
  const rounded = Math.round(value * 10) / 10;
  const shown = lang === "fa" ? toPersianDigits(rounded.toString()) : rounded.toString();
  return `${shown} ${I18N[lang].hours}`;
}

function toPersianDigits(value) {
  const map = "۰۱۲۳۴۵۶۷۸۹";
  return String(value).replace(/[0-9]/g, d => map[d]);
}

function totalHours() {
  let hours = 0;
  let count = 0;
  GROUPS.flatMap(g => g.items).forEach(item => {
    if (!state.selected[item.id]) return;
    hours += item.hours;
    count++;
  });
  return {hours, count};
}

function applyLanguage() {
  const lang = state.lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  $("languageBtn").textContent = I18N[lang].languageButton;
  renderTasks();
  updateResult();
}

function renderTasks() {
  const lang = state.lang;
  $("taskGroups").innerHTML = GROUPS.map(group => {
    const selectedInGroup = group.items.filter(item => state.selected[item.id]).length;
    const groupTitle = lang === "fa" ? group.group_fa : group.group_en;
    const selectedText = lang === "fa"
      ? `${toPersianDigits(selectedInGroup)} از ${toPersianDigits(group.items.length)} انتخاب شده`
      : `${selectedInGroup}/${group.items.length} selected`;

    return `<section class="group">
      <div class="group-title">
        <h3>${groupTitle}</h3>
        <span>${selectedText}</span>
      </div>
      <div class="task-grid">
        ${group.items.map(item => {
          const selected = state.selected[item.id];
          const name = lang === "fa" ? item.fa : item.en;
          const desc = lang === "fa" ? item.desc_fa : item.desc_en;
          const timeText = I18N[lang].itemTime.replace("{time}", formatHours(item.hours));
          return `<label class="task-card ${selected ? "selected" : ""}">
            <input type="checkbox" data-task="${item.id}" ${selected ? "checked" : ""}>
            <div>
              <div class="task-name">${name}</div>
              <div class="task-desc">${desc}</div>
              <div class="task-time">${timeText}</div>
            </div>
          </label>`;
        }).join("")}
      </div>
    </section>`;
  }).join("");

  document.querySelectorAll("[data-task]").forEach(input => {
    input.addEventListener("change", () => {
      state.selected[input.dataset.task] = input.checked;
      save();
      renderTasks();
      updateResult();
    });
  });
}

function updateResult() {
  const {hours, count} = totalHours();
  const days = hours / 7.5;
  const lang = state.lang;

  $("finalTime").textContent = formatHours(hours);

  const dayValue = Math.round(days * 10) / 10;
  const shownDays = lang === "fa" ? toPersianDigits(dayValue.toString()) : dayValue.toString();
  $("finalDays").textContent = I18N[lang].days.replace("{days}", shownDays);

  $("selectedCount").textContent = lang === "fa" ? toPersianDigits(count) : count;
}

$("languageBtn").addEventListener("click", () => {
  state.lang = state.lang === "en" ? "fa" : "en";
  save();
  applyLanguage();
});

$("selectAllBtn").addEventListener("click", () => {
  Object.keys(state.selected).forEach(id => state.selected[id] = true);
  save();
  renderTasks();
  updateResult();
});

$("clearBtn").addEventListener("click", () => {
  Object.keys(state.selected).forEach(id => state.selected[id] = false);
  save();
  renderTasks();
  updateResult();
});

applyLanguage();
