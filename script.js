const ICONS = {
  sofa: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <rect x="6" y="30" width="14" height="42" rx="6"/>
    <rect x="100" y="30" width="14" height="42" rx="6"/>
    <rect x="14" y="18" width="92" height="24" rx="9"/>
    <rect x="12" y="38" width="96" height="30" rx="9"/>
    <line x1="20" y1="72" x2="20" y2="80"/>
    <line x1="100" y1="72" x2="100" y2="80"/>
  </g></svg>`,
  armchair: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <rect x="14" y="14" width="92" height="22" rx="9"/>
    <rect x="10" y="30" width="16" height="40" rx="6"/>
    <rect x="94" y="30" width="16" height="40" rx="6"/>
    <rect x="20" y="34" width="80" height="32" rx="8"/>
    <line x1="26" y1="70" x2="22" y2="80"/>
    <line x1="94" y1="70" x2="98" y2="80"/>
  </g></svg>`,
  table: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linecap="round">
    <rect x="8" y="24" width="104" height="8" rx="2"/>
    <line x1="18" y1="32" x2="18" y2="76"/>
    <line x1="102" y1="32" x2="102" y2="76"/>
    <line x1="32" y1="32" x2="26" y2="76"/>
    <line x1="88" y1="32" x2="94" y2="76"/>
  </g></svg>`,
  chair: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <rect x="30" y="10" width="8" height="36" rx="3"/>
    <rect x="82" y="10" width="8" height="36" rx="3"/>
    <rect x="30" y="10" width="60" height="6" rx="2"/>
    <rect x="24" y="46" width="72" height="10" rx="3"/>
    <line x1="30" y1="56" x2="26" y2="82"/>
    <line x1="90" y1="56" x2="94" y2="82"/>
    <line x1="40" y1="56" x2="38" y2="82"/>
    <line x1="80" y1="56" x2="82" y2="82"/>
  </g></svg>`,
  bed: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <rect x="10" y="20" width="10" height="50" rx="3"/>
    <rect x="16" y="42" width="96" height="20" rx="6"/>
    <rect x="22" y="34" width="26" height="14" rx="4"/>
    <line x1="16" y1="62" x2="16" y2="72"/>
    <line x1="112" y1="62" x2="112" y2="72"/>
  </g></svg>`,
  nightstand: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <rect x="30" y="20" width="60" height="52" rx="4"/>
    <line x1="30" y1="42" x2="90" y2="42"/>
    <line x1="55" y1="52" x2="65" y2="52"/>
    <line x1="34" y1="72" x2="34" y2="80"/>
    <line x1="86" y1="72" x2="86" y2="80"/>
  </g></svg>`,
  lamp: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <polygon points="45,18 75,18 84,42 36,42"/>
    <line x1="60" y1="42" x2="60" y2="72"/>
    <ellipse cx="60" cy="76" rx="20" ry="5"/>
  </g></svg>`,
  sconce: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <line x1="20" y1="12" x2="20" y2="78"/>
    <line x1="20" y1="40" x2="46" y2="40"/>
    <path d="M46 28 A18 18 0 0 1 46 52 Z"/>
  </g></svg>`,
  shelf: `<svg viewBox="0 0 120 90"><g fill="none" stroke="#6B4A34" stroke-width="3" stroke-linejoin="round">
    <rect x="14" y="14" width="92" height="62" rx="2"/>
    <line x1="14" y1="45" x2="106" y2="45"/>
    <line x1="60" y1="14" x2="60" y2="76"/>
  </g></svg>`
};

const PRODUCTS = [
  { id:1, name:"Sofá Aurora", cat:"Sala", price:4890, icon:"sofa", dims:"210 × 90 × 80 cm", desc:"Três lugares em estrutura de madeira maciça e revestimento em linho natural. Pés torneados à mão." },
  { id:2, name:"Poltrona Vento", cat:"Sala", price:2190, icon:"armchair", dims:"78 × 85 × 90 cm", desc:"Braços curvos e encosto levemente reclinado, ideal para leitura. Disponível em três tecidos naturais." },
  { id:3, name:"Estante Raiz", cat:"Sala", price:3290, icon:"shelf", dims:"160 × 35 × 190 cm", desc:"Módulos abertos em madeira de reflorestamento, montagem sem parafusos aparentes." },
  { id:4, name:"Mesa Ipê", cat:"Jantar", price:5480, icon:"table", dims:"220 × 100 × 75 cm", desc:"Tampo único em ipê maciço para até seis lugares. Acabamento em óleo natural." },
  { id:5, name:"Cadeira Junco", cat:"Jantar", price:890, icon:"chair", dims:"46 × 52 × 88 cm", desc:"Assento trançado em palhinha natural sobre estrutura em madeira de freijó." },
  { id:6, name:"Cama Terra", cat:"Quarto", price:3760, icon:"bed", dims:"158 × 205 × 110 cm (casal)", desc:"Cabeceira estofada em linho encorpado, base em madeira maciça com ripas flexíveis." },
  { id:7, name:"Criado-mudo Solo", cat:"Quarto", price:1240, icon:"nightstand", dims:"45 × 40 × 55 cm", desc:"Uma gaveta com corrediças suaves, acabamento em nogueira escovada." },
  { id:8, name:"Luminária Sol", cat:"Iluminação", price:690, icon:"lamp", dims:"38 × 38 × 48 cm", desc:"Cúpula em linho cru e base em latão escovado. Luz quente e difusa." },
  { id:9, name:"Arandela Lua", cat:"Iluminação", price:450, icon:"sconce", dims:"22 × 14 × 18 cm", desc:"Luz indireta voltada para a parede, acabamento fosco em três cores." }
];

const WHATSAPP_NUMBER = "554984273153";

const grid = document.getElementById('grid');
const sortSelect = document.getElementById('sortSelect');
let activeCat = 'todos';

function formatPrice(v){
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL', minimumFractionDigits:0 });
}

function render(){
  let items = activeCat === 'todos' ? [...PRODUCTS] : PRODUCTS.filter(p => p.cat === activeCat);
  const sort = sortSelect.value;
  if(sort === 'menor') items.sort((a,b) => a.price - b.price);
  if(sort === 'maior') items.sort((a,b) => b.price - a.price);

  grid.innerHTML = '';
  if(items.length === 0){
    grid.innerHTML = '<div class="empty-state">Nenhuma peça encontrada nessa categoria por enquanto.</div>';
    return;
  }
  items.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-media">${ICONS[p.icon]}</div>
      <div class="card-info">
        <div>
          <div class="card-name">${p.name}</div>
          <span class="card-cat">${p.cat}</span>
        </div>
        <div class="card-price">${formatPrice(p.price)}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}

document.getElementById('catStrip').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if(!btn) return;
  document.querySelectorAll('.cat-strip button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCat = btn.dataset.cat;
  render();
});
sortSelect.addEventListener('change', render);

// Modal
const overlay = document.getElementById('modalOverlay');
function openModal(p){
  document.getElementById('modalMedia').innerHTML = ICONS[p.icon];
  document.getElementById('modalCat').textContent = p.cat;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalPrice').textContent = formatPrice(p.price);
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalDims').textContent = 'Dimensões: ' + p.dims;
  document.getElementById('modalWhats').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Tenho interesse na peça "' + p.name + '" do catálogo da Salla.')}`;
  overlay.classList.add('open');
}
function closeModal(){ overlay.classList.remove('open'); }
document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

// Mobile nav
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

document.getElementById('year').textContent = '© ' + new Date().getFullYear();

render();
