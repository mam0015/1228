
const TASKS = [
  {
    group: "Planning & store basics",
    tasks: [
      { id: "audit", name: "Review existing store / requirements", desc: "Understand current setup, content and scope.", qty: 1, hours: 0.75 },
      { id: "store_setup", name: "Create / configure Shopify store", desc: "Core store settings and basic configuration.", qty: 1, hours: 1.5 },
      { id: "theme_setup", name: "Theme setup", desc: "Install/select theme and configure core theme settings.", qty: 1, hours: 1.5 },
      { id: "branding", name: "Branding setup", desc: "Logo, colours, fonts and basic visual consistency.", qty: 1, hours: 1.0 }
    ]
  },
  {
    group: "Company content & pages",
    tasks: [
      { id: "company_info", name: "Company information", desc: "Business details, contact information and social links.", qty: 1, hours: 0.6 },
      { id: "pages", name: "Standard pages", desc: "About, Contact, FAQ or other supplied content.", qty: 4, hours: 0.45 },
      { id: "policies", name: "Policy pages", desc: "Format and add supplied shipping, returns and privacy policies.", qty: 3, hours: 0.3 },
      { id: "navigation", name: "Menus & navigation", desc: "Header, footer and menu structure.", qty: 1, hours: 0.75 }
    ]
  },
  {
    group: "Products & collections",
    tasks: [
      { id: "products", name: "Add / update products", desc: "Title, description, images, price and product details.", qty: 10, hours: 0.22 },
      { id: "variants", name: "Product variants", desc: "Size, colour or other variant setup.", qty: 10, hours: 0.10 },
      { id: "collections", name: "Collections / categories", desc: "Create and organise product collections.", qty: 4, hours: 0.30 },
      { id: "inventory", name: "Inventory / SKU setup", desc: "Enter supplied SKU and inventory details.", qty: 10, hours: 0.08 }
    ]
  },
  {
    group: "Design & merchandising",
    tasks: [
      { id: "homepage", name: "Homepage layout", desc: "Build and organise homepage sections.", qty: 1, hours: 2.0 },
      { id: "product_layout", name: "Product page presentation", desc: "Improve product page layout and content consistency.", qty: 1, hours: 1.0 },
      { id: "collection_layout", name: "Collection page presentation", desc: "Organise filters, banners and collection structure.", qty: 1, hours: 0.8 },
      { id: "responsive", name: "Mobile / responsive review", desc: "Check and adjust common mobile layout issues.", qty: 1, hours: 1.0 }
    ]
  },
  {
    group: "Commerce settings",
    tasks: [
      { id: "payments", name: "Payment setup", desc: "Configure supported payment options using supplied account details.", qty: 1, hours: 0.75 },
      { id: "shipping", name: "Shipping setup", desc: "Rates, zones and basic shipping configuration.", qty: 1, hours: 1.0 },
      { id: "tax", name: "Tax settings review", desc: "Apply supplied business/tax requirements.", qty: 1, hours: 0.5 },
      { id: "discounts", name: "Discount codes / promotions", desc: "Set up supplied promotions or discount logic.", qty: 3, hours: 0.2 }
    ]
  },
  {
    group: "Apps, SEO & integrations",
    tasks: [
      { id: "apps", name: "Install / configure Shopify apps", desc: "Basic configuration for selected apps.", qty: 2, hours: 0.6 },
      { id: "seo", name: "Basic SEO setup", desc: "Page titles, meta descriptions and image alt text.", qty: 1, hours: 1.25 },
      { id: "analytics", name: "Analytics / tracking", desc: "Connect supplied analytics or tracking accounts.", qty: 1, hours: 0.75 },
      { id: "domain", name: "Domain connection", desc: "Connect an existing domain and verify setup.", qty: 1, hours: 0.6 }
    ]
  },
  {
    group: "Quality assurance & handover",
    tasks: [
      { id: "testing", name: "Store testing", desc: "Navigation, product, cart, checkout and common flow checks.", qty: 1, hours: 1.5 },
      { id: "content_check", name: "Content consistency check", desc: "Check obvious formatting, missing images and mismatched details.", qty: 1, hours: 0.75 },
      { id: "revisions", name: "Revision round", desc: "One reasonable round of supplied changes.", qty: 1, hours: 1.0 },
      { id: "handover", name: "Handover / walkthrough", desc: "Short walkthrough or handover notes.", qty: 1, hours: 0.5 }
    ]
  }
];

const PRESETS = {
  existing: {
    ids: ["audit","company_info","pages","policies","navigation","products","variants","collections","inventory","content_check","testing"],
    qty: { products: 10, variants: 10, collections: 4, inventory: 10, pages: 4 }
  },
  setup: {
    ids: ["store_setup","theme_setup","branding","company_info","pages","policies","navigation","products","variants","collections","inventory","homepage","product_layout","collection_layout","responsive","payments","shipping","tax","seo","domain","testing","content_check","revisions","handover"],
    qty: { products: 10, variants: 10, collections: 4, inventory: 10, pages: 4 }
  },
  update: {
    ids: ["audit","company_info","pages","products","variants","collections","inventory","content_check","testing"],
    qty: { products: 10, variants: 10, collections: 2, inventory: 10, pages: 2 }
  },
  scratch: {
    ids: TASKS.flatMap(g => g.tasks.map(t => t.id)),
    qty: { products: 20, variants: 20, collections: 5, inventory: 20, pages: 5, apps: 2, discounts: 3 }
  }
};

const state = {
  mode: "full",
  hourlyRate: 40,
  complexity: 1,
  buffer: .10,
  hoursPerDay: 7.5,
  selected: {},
  qty: {},
  hours: {}
};

for (const group of TASKS) {
  for (const task of group.tasks) {
    state.selected[task.id] = false;
    state.qty[task.id] = task.qty;
    state.hours[task.id] = task.hours;
  }
}

const $ = (id) => document.getElementById(id);
const taskGroups = $("taskGroups");
const fmtMoney = n => new Intl.NumberFormat("en-AU", { style:"currency", currency:"AUD", maximumFractionDigits:0 }).format(n);
const fmtHours = n => n < 1 ? `${Math.round(n * 60)}m` : `${n.toFixed(n < 10 ? 1 : 0)}h`;

function renderTasks() {
  taskGroups.innerHTML = "";
  TASKS.forEach(group => {
    const section = document.createElement("section");
    section.className = "task-group";
    const selectedInGroup = group.tasks.filter(t => state.selected[t.id]).length;
    section.innerHTML = `
      <div class="group-head">
        <h3>${group.group}</h3>
        <span>${selectedInGroup}/${group.tasks.length} selected</span>
      </div>
      <div class="task-table">
        <div class="task-row header">
          <div>Task</div><div>Qty</div><div>Hours / unit</div><div>Time</div><div class="price-col">Price</div>
        </div>
        ${group.tasks.map(task => {
          const active = state.selected[task.id];
          return `
            <div class="task-row ${active ? "" : "disabled"}" data-row="${task.id}">
              <div class="task-title">
                <input type="checkbox" data-check="${task.id}" ${active ? "checked" : ""} />
                <div>
                  <div class="task-name">${task.name}</div>
                  <div class="task-desc">${task.desc}</div>
                </div>
              </div>
              <div class="cell-input qty-cell">
                <input type="number" min="0" step="1" data-qty="${task.id}" value="${state.qty[task.id]}" ${active ? "" : "disabled"} />
              </div>
              <div class="cell-input hours-cell">
                <input type="number" min="0" step="0.05" data-hours="${task.id}" value="${state.hours[task.id]}" ${active ? "" : "disabled"} />
              </div>
              <div class="calc-cell time-cell" data-time="${task.id}">0h</div>
              <div class="calc-cell price-col" data-price="${task.id}">$0</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
    taskGroups.appendChild(section);
  });

  bindTaskInputs();
  recalc();
}

function bindTaskInputs() {
  document.querySelectorAll("[data-check]").forEach(el => {
    el.addEventListener("change", () => {
      state.selected[el.dataset.check] = el.checked;
      save();
      renderTasks();
    });
  });
  document.querySelectorAll("[data-qty]").forEach(el => {
    el.addEventListener("input", () => {
      state.qty[el.dataset.qty] = Math.max(0, Number(el.value) || 0);
      save();
      recalc();
    });
  });
  document.querySelectorAll("[data-hours]").forEach(el => {
    el.addEventListener("input", () => {
      state.hours[el.dataset.hours] = Math.max(0, Number(el.value) || 0);
      save();
      recalc();
    });
  });
}

function calcRawHours() {
  let raw = 0;
  let count = 0;
  TASKS.flatMap(g => g.tasks).forEach(task => {
    if (!state.selected[task.id]) return;
    count++;
    raw += state.qty[task.id] * state.hours[task.id];
  });
  return { raw, count };
}

function recalc() {
  const { raw, count } = calcRawHours();
  const complexityHours = raw * state.complexity;
  const totalHours = complexityHours * (1 + state.buffer);
  const totalPrice = totalHours * state.hourlyRate;
  const days = state.hoursPerDay > 0 ? totalHours / state.hoursPerDay : 0;

  const lowHours = totalHours * .90;
  const highHours = totalHours * 1.15;
  const lowPrice = lowHours * state.hourlyRate;
  const highPrice = highHours * state.hourlyRate;

  $("selectedCount").textContent = count;
  $("totalTime").textContent = fmtHours(totalHours);
  $("dayEstimate").textContent = `${days.toFixed(days < 10 ? 1 : 0)} working days`;
  $("totalPrice").textContent = fmtMoney(totalPrice);
  $("timeRange").textContent = `${fmtHours(lowHours)}–${fmtHours(highHours)}`;
  $("priceRange").textContent = `${fmtMoney(lowPrice)}–${fmtMoney(highPrice)}`;
  $("finalTime").textContent = `${totalHours.toFixed(1)} hours`;
  $("finalDays").textContent = `Approximately ${days.toFixed(1)} working days at ${state.hoursPerDay} hours/day`;
  $("finalPrice").textContent = fmtMoney(totalPrice);
  $("finalRateNote").textContent = `Based on ${fmtMoney(state.hourlyRate)}/hour`;

  TASKS.flatMap(g => g.tasks).forEach(task => {
    const taskHours = state.selected[task.id]
      ? state.qty[task.id] * state.hours[task.id] * state.complexity * (1 + state.buffer)
      : 0;
    const taskPrice = taskHours * state.hourlyRate;
    const timeEl = document.querySelector(`[data-time="${task.id}"]`);
    const priceEl = document.querySelector(`[data-price="${task.id}"]`);
    if (timeEl) {
      timeEl.textContent = fmtHours(taskHours);
      timeEl.classList.toggle("muted-cell", !state.selected[task.id]);
    }
    if (priceEl) {
      priceEl.textContent = fmtMoney(taskPrice);
      priceEl.classList.toggle("muted-cell", !state.selected[task.id]);
    }
  });
}

function applyMode(mode) {
  state.mode = mode;
  document.body.classList.toggle("time-only", mode === "time");
  document.querySelectorAll(".mode-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  save();
}

function applyPreset(name) {
  const preset = PRESETS[name];
  Object.keys(state.selected).forEach(id => state.selected[id] = preset.ids.includes(id));
  Object.entries(preset.qty || {}).forEach(([id, qty]) => state.qty[id] = qty);
  save();
  renderTasks();
}

function resetState() {
  localStorage.removeItem("shopifyEstimatorState");
  location.reload();
}

function save() {
  localStorage.setItem("shopifyEstimatorState", JSON.stringify(state));
}

function load() {
  const saved = localStorage.getItem("shopifyEstimatorState");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
  } catch (_) {}
}

function copySummary() {
  const { raw, count } = calcRawHours();
  const totalHours = raw * state.complexity * (1 + state.buffer);
  const days = totalHours / state.hoursPerDay;
  const selectedTasks = TASKS.flatMap(g => g.tasks)
    .filter(t => state.selected[t.id])
    .map(t => `• ${t.name}: ${state.qty[t.id]} × ${state.hours[t.id]}h`)
    .join("\n");

  const priceText = state.mode === "time"
    ? ""
    : `\nEstimated price: ${fmtMoney(totalHours * state.hourlyRate)} AUD\nHourly rate used: ${fmtMoney(state.hourlyRate)}/hour`;

  const text =
`Shopify Project Estimate

Selected tasks: ${count}
Estimated time: ${totalHours.toFixed(1)} hours
Approx. working days: ${days.toFixed(1)} (${state.hoursPerDay}h/day)${priceText}

Included:
${selectedTasks}

Complexity: ${$("complexity").selectedOptions[0].text}
Buffer: ${Math.round(state.buffer * 100)}%

Note: External Shopify fees, paid apps/themes and third-party costs are excluded unless specifically included.`;

  navigator.clipboard.writeText(text).then(() => {
    const toast = $("toast");
    toast.textContent = "Estimate copied";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1600);
  });
}

load();
$("hourlyRate").value = state.hourlyRate;
$("complexity").value = state.complexity;
$("buffer").value = state.buffer;
$("hoursPerDay").value = state.hoursPerDay;
applyMode(state.mode || "full");

$("hourlyRate").addEventListener("input", e => { state.hourlyRate = Math.max(0, Number(e.target.value) || 0); save(); recalc(); });
$("complexity").addEventListener("change", e => { state.complexity = Number(e.target.value); save(); recalc(); });
$("buffer").addEventListener("change", e => { state.buffer = Number(e.target.value); save(); recalc(); });
$("hoursPerDay").addEventListener("input", e => { state.hoursPerDay = Math.max(.5, Number(e.target.value) || 7.5); save(); recalc(); });

document.querySelectorAll(".mode-btn").forEach(btn => btn.addEventListener("click", () => applyMode(btn.dataset.mode)));
document.querySelectorAll(".preset-btn").forEach(btn => btn.addEventListener("click", () => applyPreset(btn.dataset.preset)));
$("selectAllBtn").addEventListener("click", () => { Object.keys(state.selected).forEach(id => state.selected[id] = true); save(); renderTasks(); });
$("clearAllBtn").addEventListener("click", () => { Object.keys(state.selected).forEach(id => state.selected[id] = false); save(); renderTasks(); });
$("resetBtn").addEventListener("click", resetState);
$("copyBtn").addEventListener("click", copySummary);

renderTasks();
