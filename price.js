
const GROUPS = [{"group": "Planning & review", "items": [["review", "Review current setup / requirements", "Understand current structure, content and scope.", 1, 0.75], ["content_review", "Review supplied content", "Check supplied text, images and product information.", 1, 0.75]]}, {"group": "Company content", "items": [["info", "Company information", "Business details, contact information and social links.", 1, 0.6], ["pages", "Standard pages", "About, Contact, FAQ or other supplied pages.", 4, 0.45], ["policies", "Policy / information pages", "Format and add supplied policy content.", 3, 0.3], ["navigation", "Menus & navigation", "Header, footer and menu structure.", 1, 0.75]]}, {"group": "Products & catalogue", "items": [["products", "Add / update products", "Product title, description, images, price and details.", 10, 0.22], ["variants", "Product variants", "Size, colour or other product options.", 10, 0.1], ["collections", "Collections / categories", "Create and organise product collections.", 4, 0.3], ["inventory", "Inventory / SKU details", "Enter supplied SKU and inventory information.", 10, 0.08]]}, {"group": "Presentation", "items": [["homepage", "Homepage / landing content", "Organise supplied sections and content.", 1, 1.5], ["product_layout", "Product page presentation", "Improve consistency of product information.", 1, 0.8], ["responsive", "Mobile / responsive review", "Check common mobile layout issues.", 1, 0.8]]}, {"group": "Store configuration", "items": [["payments", "Payment configuration", "Configure supplied payment settings.", 1, 0.75], ["shipping", "Shipping configuration", "Set up supplied shipping rates and zones.", 1, 1.0], ["discounts", "Discounts / promotions", "Configure supplied discount codes or offers.", 3, 0.2], ["domain", "Domain connection", "Connect an existing domain.", 1, 0.6]]}, {"group": "Quality assurance", "items": [["testing", "Store testing", "Check navigation, product, cart and common flows.", 1, 1.25], ["consistency", "Content consistency check", "Check formatting, missing images and obvious issues.", 1, 0.75], ["revision", "Revision round", "One reasonable round of supplied changes.", 1, 1.0], ["handover", "Handover notes", "Short handover or walkthrough notes.", 1, 0.5]]}];
const KEY="projectPricePlannerV2";
let state={rate:40,selected:{},qty:{},hours:{}};
GROUPS.flatMap(g=>g.items).forEach(i=>{state.selected[i[0]]=false;state.qty[i[0]]=i[3];state.hours[i[0]]=i[4]});
try{const s=JSON.parse(localStorage.getItem(KEY)||"null");if(s) state={...state,...s}}catch(e){}
const $=id=>document.getElementById(id);
const money=n=>new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD",maximumFractionDigits:0}).format(n);
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
function total(){
 let price=0,count=0;
 GROUPS.flatMap(g=>g.items).forEach(i=>{let id=i[0];if(!state.selected[id])return;count++;price+=(+state.qty[id]||0)*(+state.hours[id]||0)*state.rate});
 return {price,count};
}
function calc(){
 const t=total();
 $("finalPrice").textContent=money(t.price);
 $("priceRange").textContent="Recommended range: "+money(t.price*.9)+"–"+money(t.price*1.15);
 document.querySelectorAll("[data-calc]").forEach(el=>{const id=el.dataset.calc;el.textContent=state.selected[id]?money(state.qty[id]*state.hours[id]*state.rate):money(0)});
}
function render(){
 $("taskGroups").innerHTML=GROUPS.map(g=>`<section class="group">
   <div class="group-head"><h3>${g.group}</h3><span>${g.items.filter(i=>state.selected[i[0]]).length}/${g.items.length} selected</span></div>
   <div class="task-table">
    <div class="task-row price-row head"><div>Activity</div><div>Qty</div><div>Effort factor</div><div>Estimated price</div></div>
    ${g.items.map(i=>{const [id,name,desc]=i,active=state.selected[id];return `<div class="task-row price-row ${active?"":"off"}">
      <div class="task-title"><input data-check="${id}" type="checkbox" ${active?"checked":""}><div><div class="task-name">${name}</div><div class="task-desc">${desc}</div></div></div>
      <div><input data-qty="${id}" type="number" min="0" step="1" value="${state.qty[id]}" ${active?"":"disabled"}></div>
      <div><input data-hours="${id}" type="number" min="0" step=".05" value="${state.hours[id]}" ${active?"":"disabled"}></div>
      <div class="calc" data-calc="${id}">${money(0)}</div>
    </div>`}).join("")}
   </div></section>`).join("");
 document.querySelectorAll("[data-check]").forEach(e=>e.onchange=()=>{state.selected[e.dataset.check]=e.checked;save();render()});
 document.querySelectorAll("[data-qty]").forEach(e=>e.oninput=()=>{state.qty[e.dataset.qty]=+e.value||0;save();calc()});
 document.querySelectorAll("[data-hours]").forEach(e=>e.oninput=()=>{state.hours[e.dataset.hours]=+e.value||0;save();calc()});
 calc();
}
$("hourlyRate").value=state.rate;
$("hourlyRate").oninput=e=>{state.rate=+e.target.value||0;save();calc()};
$("selectAllBtn").onclick=()=>{Object.keys(state.selected).forEach(k=>state.selected[k]=true);save();render()};
$("clearBtn").onclick=()=>{Object.keys(state.selected).forEach(k=>state.selected[k]=false);save();render()};
$("copyBtn").onclick=()=>{
 const t=total(); const list=GROUPS.flatMap(g=>g.items).filter(i=>state.selected[i[0]]).map(i=>"• "+i[1]).join("\n");
 const text=`Project Price Estimate\n\nEstimated project price: ${money(t.price)}\nRecommended range: ${money(t.price*.9)}–${money(t.price*1.15)}\n\nIncluded activities:\n${list}`;
 navigator.clipboard.writeText(text);$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1300)
};
render();
