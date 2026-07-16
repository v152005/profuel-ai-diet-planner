/* ════════════════════════════════════════
   ProFuel — Athlete Diet Planner
   script.js
   ════════════════════════════════════════ */

/* ════════════════════════════════════════
   SPORT DATA
   ════════════════════════════════════════ */
const SPORTS = {
  gym: {
    name: 'Gym Athlete',
    sport: 'Bodybuilding & Strength',
    icon: '🏋️',
    ratio: 2.2,
    focus: 'Hypertrophy',
    days: '5×/week',
    color: '#00e676',
    tip: 'High protein is key. Prioritize lean meats, eggs & dairy timed around training windows for optimal muscle protein synthesis.'
  },
  swim: {
    name: 'Swimmer',
    sport: 'Endurance & Power',
    icon: '🏊',
    ratio: 1.8,
    focus: 'Endurance',
    days: '6×/week',
    color: '#29b6f6',
    tip: 'Carb-load before long sessions. Replenish glycogen fast post-swim with complex carbs + moderate protein within 30 min.'
  },
  run: {
    name: 'Runner',
    sport: 'Cardio & Stamina',
    icon: '🏃',
    ratio: 1.6,
    focus: 'Aerobic base',
    days: '5×/week',
    color: '#ff7043',
    tip: 'Carbohydrates are your primary fuel. Aim 55–65% of calories from carbs. Avoid high-fat foods 2 hrs before a race.'
  },
  cycle: {
    name: 'Cyclist',
    sport: 'Aerobic Efficiency',
    icon: '🚴',
    ratio: 1.6,
    focus: 'Endurance',
    days: '5×/week',
    color: '#ffd600',
    tip: 'Prioritize slow-digesting carbs pre-ride and fast carbs mid-ride. Electrolytes are crucial on rides over 90 min.'
  },
  yoga: {
    name: 'Yogi',
    sport: 'Flexibility & Lean',
    icon: '🧘',
    ratio: 1.4,
    focus: 'Lean & flexible',
    days: '6×/week',
    color: '#ce93d8',
    tip: 'Focus on anti-inflammatory foods — turmeric, leafy greens, and light proteins. Avoid heavy meals 2 hrs before practice.'
  },
  combat: {
    name: 'Combat Athlete',
    sport: 'Weight Class & Power',
    icon: '🥊',
    ratio: 2.0,
    focus: 'Cut & power',
    days: '6×/week',
    color: '#ef5350',
    tip: 'Protein preserves muscle during cuts. Minimize sodium pre-weigh-in. Rehydrate and refuel carbs immediately after.'
  },
  field: {
    name: 'Field Athlete',
    sport: 'Speed & Agility',
    icon: '⚽',
    ratio: 1.7,
    focus: 'Explosive power',
    days: '5×/week',
    color: '#00e5ff',
    tip: 'Balanced macros with emphasis on quick energy. Eat a full meal 2–3 hrs before a match to ensure glycogen is ready.'
  },
  cross: {
    name: 'CrossFit Athlete',
    sport: 'Power & Conditioning',
    icon: '⚡',
    ratio: 2.0,
    focus: 'HIIT & power',
    days: '5×/week',
    color: '#ffab00',
    tip: 'High protein + moderate carbs. Eat within 30 min post-WOD for max recovery. Avoid fasting before intense WODs.'
  }
};

/* ════════════════════════════════════════
   FOOD DATABASE
   ════════════════════════════════════════ */
const foods = [
  // ── VEGETARIAN ──────────────────────────
  { id: 'paneer',    type: 'veg',    sports: ['gym'],                name: 'Paneer (100g)',         emoji: '🧀', protein: 18, calories: 265, carbs: 6,  fat: 20, img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80' },
  { id: 'soya',      type: 'veg',    sports: ['gym', 'cross'],       name: 'Soya Chunks (100g)',    emoji: '🌱', protein: 52, calories: 345, carbs: 33, fat: 1,  img: 'https://www.fitterfly.com/blog/wp-content/uploads/2024/12/Are-Soya-Chunks-Good-for-Weight-Loss-1200x900.webp' },
  { id: 'tofu',      type: 'veg',    sports: ['gym', 'yoga'],        name: 'Tofu (100g)',            emoji: '🍱', protein: 17, calories: 144, carbs: 3,  fat: 9,  img: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=600&q=80' },
  { id: 'almonds',   type: 'veg',    sports: ['gym', 'yoga'],        name: 'Almonds (100g)',         emoji: '🌰', protein: 21, calories: 579, carbs: 22, fat: 50, img: 'https://imgs.search.brave.com/1SJ-MIfEeow3Z4aga98CJbNDTtMDuaJ8Q5XUM2H0O48/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvOTk3/NDUwMS9wZXhlbHMt/cGhvdG8tOTk3NDUw/MS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA' },
  { id: 'quinoa',    type: 'veg',    sports: ['run', 'swim', 'cycle'], name: 'Quinoa (100g)',        emoji: '🌾', protein: 14, calories: 368, carbs: 64, fat: 6,  img: 'https://imgs.search.brave.com/CcoccN--H6g-v2xF3o_Qtfp1X9ow1AGVTgq1ycU0R_c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjgx/NDc0NDEwL3N0b2Nr/LXBob3RvLXRvcC12/aWV3LXJlZC1xdWlu/b2Etd29vZGVuLWJv/d2wtc3BhdHVsYS1i/ZWlnZS1uYXBraW4t/Z3JlZW4' },
  { id: 'lentils',   type: 'veg',    sports: ['run', 'field'],       name: 'Red Lentils (100g)',    emoji: '🍲', protein: 26, calories: 353, carbs: 60, fat: 1,  img: 'https://imgs.search.brave.com/0bL1f8uKap4ULgUtx7fe7BzQ_b_gCdsXz0tdfPaw9_I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDUv/NTY2LzY0NS9zbWFs/bC9yYXctcmVkLWxl/bnRpbHMtaW4tYS13/b29kZW4tYm93bC1h/bmQtc3Bvb24tb24t/YS13aGl0ZS10YWJs/ZS1mcmVlLXBob3Rv/LmpwZw' },
  { id: 'chickpeas', type: 'veg',    sports: ['run', 'field'],       name: 'Chickpeas (100g)',      emoji: '🫘', protein: 19, calories: 364, carbs: 61, fat: 6,  img: 'https://imgs.search.brave.com/DOUYLViZCiOELDf2Exnioy0ER0oA0v7GTf8kaw2G_yY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTQ4LzU3Ni9zbWFs/bC9mcmVzaC1jaGlj/a3BlYXMtYWktZ2Vu/ZXJhdGl2ZS1mcmVl/LXBob3RvLmpwZWc' },
  { id: 'greengram', type: 'veg',    sports: ['cycle', 'swim'],      name: 'Green Gram (100g)',     emoji: '🟢', protein: 24, calories: 347, carbs: 63, fat: 1,  img: 'https://imgs.search.brave.com/9FoC5r3UEchs-i8JUv0kMq0-7Vq1ImCFpg5oPvx299Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/ODI5OTI3NS9waG90/by9ncmVlbi1ncmFt/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1DcDFXQ1dnbEln/cUl6YVJiMTNMRHBM/VWJqS0VwR1d5UkxT/MDRkYkpIWm9VPQ' },
  { id: 'peanuts',   type: 'veg',    sports: ['gym', 'cross'],       name: 'Peanuts (100g)',        emoji: '🥜', protein: 26, calories: 567, carbs: 16, fat: 49, img: 'https://images.unsplash.com/photo-1567892320421-b0d0c57c0f60?w=600&q=80' },
  { id: 'milk',      type: 'veg',    sports: ['gym', 'swim'],        name: 'Milk (250ml)',           emoji: '🥛', protein: 8,  calories: 149, carbs: 12, fat: 8,  img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80' },
  { id: 'yogurt',    type: 'veg',    sports: ['yoga', 'combat'],     name: 'Greek Yogurt (100g)',   emoji: '🥣', protein: 10, calories: 97,  carbs: 4,  fat: 5,  img: 'https://imgs.search.brave.com/hMkKYOVlqhQNQtRzvDrRsgZhSNKxc1l0oJMLafJk7qU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bGl2ZWVhdGxlYXJu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wOC9ob3ct/dG8tbWFrZS1ob21l/bWFkZS1ncmVlay15/b2d1cnQtMjUuanBn' },
  { id: 'edamame',   type: 'veg',    sports: ['yoga', 'swim'],       name: 'Edamame (100g)',        emoji: '🫛', protein: 11, calories: 122, carbs: 10, fat: 5,  img: 'https://imgs.search.brave.com/BRYnkMLY2swJgcNbzNuqYSItllXTqSSrLtYtWGCkVqQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEzL0Vk/YW1hbWUtQmVhbnMt/UE5HLVBpYy1CYWNr/Z3JvdW5kLnBuZw' },
  { id: 'oats',      type: 'veg',    sports: ['run', 'cycle', 'swim'], name: 'Oats (100g)',         emoji: '🌀', protein: 17, calories: 389, carbs: 66, fat: 7,  img: 'https://imgs.search.brave.com/hVX-MThAZI6clDTQHrJGwj1jGBB8mTxZLuOpWqyNgeQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3ds/LW9hdHMtZnVsbC1o/ZWFsdGh5LWVhdGlu/Zy1mb29kLWRyaW5r/LTQyNDkyNzg4Lmpw/Zw' },
  { id: 'banana',    type: 'veg',    sports: ['run', 'cycle', 'field'], name: 'Banana (1 medium)',  emoji: '🍌', protein: 1,  calories: 89,  carbs: 23, fat: 0,  img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&q=80' },
  { id: 'sweetpot',  type: 'veg',    sports: ['cross', 'gym'],       name: 'Sweet Potato (100g)',   emoji: '🍠', protein: 2,  calories: 86,  carbs: 20, fat: 0,  img: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=600&q=80' },
  // ── NON-VEGETARIAN ──────────────────────
  { id: 'egg',       type: 'nonveg', sports: ['gym', 'cross'],       name: 'Whole Egg',             emoji: '🥚', protein: 6,  calories: 70,  carbs: 1,  fat: 5,  img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&q=80' },
  { id: 'chicken',   type: 'nonveg', sports: ['gym', 'cross', 'field'], name: 'Chicken Breast (100g)', emoji: '🍗', protein: 31, calories: 165, carbs: 0, fat: 3,  img: 'https://imgs.search.brave.com/Ftb-IOpBGSgucIxprXNuTVoYkQ7TnCTzGUDpdOUUJA8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWM2LmRlcG9zaXRw/aG90b3MuY29tLzEw/MTAxNDIvNTQ0L2kv/NDUwL2RlcG9zaXRw/aG90b3NfNTQ0MzM4/NC1zdG9jay1waG90/by1yYXctY2hpY2tl/bi1icmVhc3QtaW4t/ZnJ5aW5nLmpwZw' },
  { id: 'salmon',    type: 'nonveg', sports: ['swim', 'yoga'],       name: 'Salmon (100g)',         emoji: '🐟', protein: 25, calories: 208, carbs: 0,  fat: 13, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80' },
  { id: 'tuna',      type: 'nonveg', sports: ['combat', 'gym'],      name: 'Tuna (100g)',           emoji: '🐠', protein: 30, calories: 144, carbs: 0,  fat: 1,  img: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600&q=80' },
  { id: 'turkey',    type: 'nonveg', sports: ['combat', 'gym'],      name: 'Turkey Breast (100g)', emoji: '🦃', protein: 29, calories: 135, carbs: 0,  fat: 1,  img: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=600&q=80' },
  { id: 'shrimp',    type: 'nonveg', sports: ['swim', 'yoga'],       name: 'Shrimp (100g)',         emoji: '🦐', protein: 24, calories: 99,  carbs: 1,  fat: 1,  img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80' },
  { id: 'beef',      type: 'nonveg', sports: ['gym', 'cross'],       name: 'Lean Beef (100g)',      emoji: '🥩', protein: 26, calories: 215, carbs: 0,  fat: 12, img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80' },
  { id: 'cottage',   type: 'nonveg', sports: ['combat', 'yoga'],     name: 'Cottage Cheese (100g)',emoji: '🧈', protein: 11, calories: 98,  carbs: 3,  fat: 4,  img: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&q=80' },
  { id: 'whitefish', type: 'nonveg', sports: ['swim', 'combat'],     name: 'White Fish (100g)',     emoji: '🐡', protein: 22, calories: 105, carbs: 0,  fat: 2,  img: 'https://imgs.search.brave.com/8VLWM_WGkb2tznF0z1g-JB2dYhWL9JNSYm3dBRB6qnw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi91bmNv/b2tlZC13aGl0ZS1m/aXNoLWZpbGxldC1w/YXJzbGV5LXdoaXRl/LXBsYXRlLTI5NzU2/NjY3LmpwZw' },
  { id: 'sardines',  type: 'nonveg', sports: ['cycle', 'run'],       name: 'Sardines (100g)',       emoji: '🐟', protein: 25, calories: 208, carbs: 0,  fat: 11, img: 'https://imgs.search.brave.com/SfZi8toi9inrXWpTVQ9ohQKg-oacgOBDPqGmktPOT68/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzg2LzU5LzY4/LzM2MF9GXzY4NjU5/NjgxOV85S0E2M0dr/MWtqekRiQjBmU2Zs/dTFWMUVaWWpuc2FC/dC5qcGc' }
];

/* ════════════════════════════════════════
   APP STATE
   ════════════════════════════════════════ */
let selected     = {};    // { foodId: qty }
let targets      = { protein: 0, calories: 0, carbs: 0, fat: 0 };
let hasTargets   = false;
let modalFood    = null;
let activeTab    = 'all';
let activeSport  = null;
let modalMeal    = null;
let clickTimer   = null;
let qaTargetMeal = null;
let waterMl      = 0;
let waterTarget  = 2500;
let waterLog     = [];

const MEALS = [
  { id: 'breakfast', name: '🌅 Breakfast',          foods: [] },
  { id: 'snack1',    name: '🍎 Morning Snack',       foods: [] },
  { id: 'lunch',     name: '☀️ Lunch',               foods: [] },
  { id: 'snack2',    name: '🏋️ Pre-Workout Snack',   foods: [] },
  { id: 'dinner',    name: '🌙 Dinner / Post-WOD',   foods: [] }
];

/* ════════════════════════════════════════
   NAVIGATION
   ════════════════════════════════════════ */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.textContent.toLowerCase().includes(id.slice(0, 3))) l.classList.add('active');
  });
  if (id === 'foods')   renderGrid();
  if (id === 'planner') renderPlanner();
  if (id === 'compare') populateCmpSelects();
  window.scrollTo(0, 0);
}

/* ════════════════════════════════════════
   SPORT PROFILE SELECTOR
   ════════════════════════════════════════ */
function selectSport(card) {
  document.querySelectorAll('.sport-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  activeSport = card.dataset.sport;
  const s = SPORTS[activeSport];

  document.getElementById('profileBanner').classList.add('show');
  document.getElementById('profAvatar').textContent = s.icon;
  document.getElementById('profName').textContent   = s.name.toUpperCase();
  document.getElementById('profSport').textContent  = s.sport;
  document.getElementById('profRatio').textContent  = s.ratio + 'g/kg';
  document.getElementById('profFocus').textContent  = s.focus;
  document.getElementById('profDays').textContent   = s.days;
  document.getElementById('profTip').textContent    = s.tip;
  document.documentElement.style.setProperty('--sport-color', s.color);

  if (hasTargets) calculate();
  showToast(s.icon + ' ' + s.name + ' profile loaded!');
}

/* ════════════════════════════════════════
   MACRO CALCULATOR  (Mifflin-St Jeor BMR)
   ════════════════════════════════════════ */
function calculate() {
  const w    = parseFloat(document.getElementById('weight').value)   || 70;
  const h    = parseFloat(document.getElementById('height').value)   || 175;
  const a    = parseFloat(document.getElementById('age').value)      || 25;
  const g    = document.getElementById('gender').value;
  const act  = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('goal').value;

  const bmr  = g === 'm' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
  const tdee = bmr * act;

  let calories = Math.round(
    goal === 'gain'    ? tdee + 350  :
    goal === 'cut'     ? tdee - 400  :
    goal === 'perform' ? tdee + 200  : tdee
  );

  const pRatio = activeSport ? SPORTS[activeSport].ratio : 1.8;
  let protein  = Math.round(w * pRatio);
  let fat      = Math.round((calories * 0.25) / 9);
  let carbs    = Math.round((calories - protein * 4 - fat * 9) / 4);
  if (carbs < 0) carbs = 0;

  targets    = { calories, protein, carbs, fat };
  hasTargets = true;

  document.getElementById('mCal').textContent  = calories;
  document.getElementById('mPro').textContent  = protein;
  document.getElementById('mCarb').textContent = carbs;
  document.getElementById('mFat').textContent  = fat;
  document.getElementById('macroRow').classList.add('show');
  document.getElementById('progSection').classList.add('show');

  updateProgress();
  showToast('⚡ Targets calculated!');
}

/* ════════════════════════════════════════
   PROGRESS BARS
   ════════════════════════════════════════ */
function updateProgress() {
  if (!hasTargets) return;
  let totP = 0, totC = 0, totF = 0;

  Object.keys(selected).forEach(id => {
    const f = foods.find(x => x.id === id);
    if (!f) return;
    totP += f.protein * selected[id];
    totC += f.carbs   * selected[id];
    totF += f.fat     * selected[id];
  });

  MEALS.forEach(m => m.foods.forEach(({ id, qty }) => {
    const f = foods.find(x => x.id === id);
    if (!f) return;
    totP += f.protein * qty;
    totC += f.carbs   * qty;
    totF += f.fat     * qty;
  }));

  setBar('pFP', 'pLabP', 'pPctP', Math.min(100, Math.round(totP / targets.protein * 100)), totP, targets.protein, 'Protein');
  setBar('pFC', 'pLabC', 'pPctC', Math.min(100, Math.round(totC / Math.max(1, targets.carbs) * 100)), totC, targets.carbs, 'Carbs');
  setBar('pFF', 'pLabF', 'pPctF', Math.min(100, Math.round(totF / Math.max(1, targets.fat)   * 100)), totF, targets.fat,   'Fat');
}

function setBar(fillId, labId, pctId, pct, got, total, name) {
  document.getElementById(fillId).style.width    = pct + '%';
  document.getElementById(labId).textContent     = name + ': ' + got + 'g / ' + total + 'g';
  document.getElementById(pctId).textContent     = pct + '%';
}

/* ════════════════════════════════════════
   FOOD GRID
   ════════════════════════════════════════ */
function setTab(el, tab) {
  document.querySelectorAll('.ftab').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  activeTab = tab;
  renderGrid();
}

function renderGrid() {
  const q    = (document.getElementById('searchBox') || { value: '' }).value.toLowerCase();
  const sort = (document.getElementById('sortSel')   || { value: 'default' }).value;
  const SPORT_TABS = ['gym', 'swim', 'run', 'cycle', 'combat', 'field', 'cross', 'yoga'];

  let list = foods.filter(f => {
    if (activeTab === 'veg'    && f.type !== 'veg')    return false;
    if (activeTab === 'nonveg' && f.type !== 'nonveg') return false;
    if (SPORT_TABS.includes(activeTab) && !f.sports.includes(activeTab)) return false;
    if (activeTab === 'highpro' && f.protein < 20)     return false;
    return f.name.toLowerCase().includes(q);
  });

  if (sort === 'pro-hi') list.sort((a, b) => b.protein   - a.protein);
  if (sort === 'pro-lo') list.sort((a, b) => a.protein   - b.protein);
  if (sort === 'cal-hi') list.sort((a, b) => b.calories  - a.calories);
  if (sort === 'cal-lo') list.sort((a, b) => a.calories  - b.calories);

  const grid = document.getElementById('foodGrid');
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = '<div class="empty-msg">No foods found 😕</div>';
    return;
  }

  list.forEach(f => {
    const isSel  = !!selected[f.id];
    const icons  = f.sports.map(s => SPORTS[s] ? SPORTS[s].icon : '').join('');
    const typeTag = f.type === 'veg' ? '🥗' : '🍗';

    grid.innerHTML += `
      <div class="food-card${isSel ? ' selected' : ''}" data-id="${f.id}"
           onclick="cardClick('${f.id}', event)"
           ondblclick="openModal('${f.id}')">
        <div class="chk-badge">✓</div>
        <div class="sport-tag">${icons} ${typeTag}</div>
        <img class="food-img" src="${f.img}" alt="${f.name}" loading="lazy"
             onerror="this.src='https://placehold.co/400x138/161d26/4a5a6a?text=${encodeURIComponent(f.name)}'">
        <div class="food-info">
          <div class="food-name">${f.emoji} ${f.name}</div>
          <div class="pills">
            <span class="pill p">P ${f.protein}g</span>
            <span class="pill k">${f.calories}kcal</span>
            <span class="pill c">C ${f.carbs}g</span>
            <span class="pill f">F ${f.fat}g</span>
          </div>
        </div>
      </div>`;
  });
}

/* ── Card click: single = toggle, double = modal ── */
function cardClick(id, e) {
  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => toggleFood(id), 220);
}

function toggleFood(id) {
  if (selected[id]) delete selected[id];
  else selected[id] = 1;
  renderGrid();
  updatePanel();
  updateProgress();
}

/* ════════════════════════════════════════
   FOOD DETAIL MODAL
   ════════════════════════════════════════ */
function openModal(id) {
  clearTimeout(clickTimer);
  const f = foods.find(x => x.id === id);
  if (!f) return;
  modalFood = f;

  document.getElementById('modalImg').src          = f.img;
  document.getElementById('modalName').textContent = f.emoji + ' ' + f.name;
  document.getElementById('modalSub').textContent  =
    (f.type === 'veg' ? '🥗 Vegetarian' : '🍗 Non-Veg') + '  ·  ' +
    f.sports.map(s => SPORTS[s] ? SPORTS[s].icon + ' ' + SPORTS[s].name : '').join(' · ');

  document.getElementById('modalQty').value = selected[f.id] || 1;
  document.getElementById('modalTable').innerHTML = `
    <tr><td>Protein</td>      <td>${f.protein}g</td></tr>
    <tr><td>Calories</td>     <td>${f.calories} kcal</td></tr>
    <tr><td>Carbohydrates</td><td>${f.carbs}g</td></tr>
    <tr><td>Fat</td>          <td>${f.fat}g</td></tr>`;

  updateQtyCalc();

  document.getElementById('mealAssignRow').innerHTML = MEALS.map(m =>
    `<div class="meal-pill${modalMeal === m.id ? ' chosen' : ''}" onclick="toggleMealPill('${m.id}', this)">${m.name}</div>`
  ).join('');

  document.getElementById('modalAddBtn').textContent = selected[f.id] ? 'Update Servings' : 'Add to Plan';
  document.getElementById('modalOverlay').classList.add('open');
}

function updateQtyCalc() {
  if (!modalFood) return;
  const qty = +document.getElementById('modalQty').value || 1;
  document.getElementById('qtyCalc').textContent =
    `= ${modalFood.calories * qty}kcal · ${modalFood.protein * qty}g protein`;
}

document.getElementById('modalQty').addEventListener('input', updateQtyCalc);

function toggleMealPill(mealId, el) {
  modalMeal = modalMeal === mealId ? null : mealId;
  document.querySelectorAll('.meal-pill').forEach(p => p.classList.remove('chosen'));
  if (modalMeal) el.classList.add('chosen');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  modalFood = null;
  modalMeal = null;
}

function chgQty(d) {
  const i = document.getElementById('modalQty');
  i.value = Math.max(1, Math.min(20, +i.value + d));
  updateQtyCalc();
}

function addFromModal() {
  if (!modalFood) return;
  const qty = Math.max(1, +document.getElementById('modalQty').value);
  selected[modalFood.id] = qty;

  if (modalMeal) {
    const meal = MEALS.find(m => m.id === modalMeal);
    const ex   = meal.foods.find(x => x.id === modalFood.id);
    if (ex) ex.qty = qty;
    else meal.foods.push({ id: modalFood.id, qty });
  }

  const tag = modalMeal ? ' → ' + MEALS.find(m => m.id === modalMeal).name : '';
  closeModal();
  renderGrid();
  updatePanel();
  updateProgress();
  showToast(`${modalFood.emoji} ${modalFood.name} added ×${qty}${tag}`);
}

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

/* ════════════════════════════════════════
   BOTTOM SELECTION PANEL
   ════════════════════════════════════════ */
function updatePanel() {
  const ids   = Object.keys(selected);
  const panel = document.getElementById('selPanel');

  if (!ids.length) {
    panel.classList.remove('show');
    document.getElementById('countBadge').textContent = '0 selected';
    return;
  }

  panel.classList.add('show');
  let totCal = 0, totPro = 0;
  const chips = document.getElementById('selChips');
  chips.innerHTML = '';

  ids.forEach(id => {
    const f   = foods.find(x => x.id === id);
    const qty = selected[id];
    totCal += f.calories * qty;
    totPro += f.protein  * qty;
    chips.innerHTML += `
      <div class="chip">
        ${f.emoji} ${f.name.split('(')[0].trim()}${qty > 1 ? ` ×${qty}` : ''}
        <span class="chip-x" onclick="removeChip('${id}')">×</span>
      </div>`;
  });

  document.getElementById('selTotal').textContent  = `${totCal}kcal · ${totPro}g pro`;
  document.getElementById('countBadge').textContent = ids.length + ' selected';
}

function removeChip(id) {
  delete selected[id];
  renderGrid();
  updatePanel();
  updateProgress();
}

function clearAll() {
  selected = {};
  renderGrid();
  updatePanel();
  updateProgress();
  document.getElementById('planOut').classList.remove('show');
  showToast('Plan cleared');
}

/* ════════════════════════════════════════
   EXPORT PLAN
   ════════════════════════════════════════ */
function exportPlan() {
  const ids = Object.keys(selected);
  let lines = ['╔══ PROFUEL MEAL PLAN ══╗\n'];

  if (activeSport)  lines.push('Sport: ' + SPORTS[activeSport].name + ' (' + SPORTS[activeSport].sport + ')\n');
  if (hasTargets)   lines.push('Daily Targets: ' + targets.calories + 'kcal | P:' + targets.protein + 'g | C:' + targets.carbs + 'g | F:' + targets.fat + 'g\n');

  if (ids.length) {
    lines.push('── SELECTED FOODS ──');
    let tC = 0, tP = 0, tCb = 0, tF = 0;
    ids.forEach(id => {
      const f   = foods.find(x => x.id === id);
      const qty = selected[id];
      lines.push(f.emoji + ' ' + f.name + (qty > 1 ? ' ×' + qty : '') + ' → P:' + (f.protein * qty) + 'g | ' + (f.calories * qty) + 'kcal');
      tC  += f.calories * qty;
      tP  += f.protein  * qty;
      tCb += f.carbs    * qty;
      tF  += f.fat      * qty;
    });
    lines.push('\n── TOTALS ──\nCalories: ' + tC + 'kcal\nProtein:  ' + tP + 'g\nCarbs:    ' + tCb + 'g\nFat:      ' + tF + 'g');
    if (hasTargets) lines.push('Protein Goal: ' + Math.round(tP / targets.protein * 100) + '% achieved');
  }

  const hasMealFoods = MEALS.some(m => m.foods.length);
  if (hasMealFoods) {
    lines.push('\n── MEAL SCHEDULE ──');
    MEALS.forEach(m => {
      if (!m.foods.length) return;
      lines.push('\n' + m.name);
      m.foods.forEach(({ id, qty }) => {
        const f = foods.find(x => x.id === id);
        if (f) lines.push('  ' + f.emoji + ' ' + f.name + (qty > 1 ? ' ×' + qty : ''));
      });
    });
  }

  document.getElementById('planText').textContent = lines.join('\n');
  document.getElementById('planOut').classList.add('show');
  showPage('home');
  setTimeout(() => document.getElementById('planOut').scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
}

function copyPlan() {
  navigator.clipboard.writeText(document.getElementById('planText').textContent)
    .then(() => showToast('📋 Copied to clipboard!'));
}

/* ════════════════════════════════════════
   MEAL PLANNER
   ════════════════════════════════════════ */
function renderPlanner() {
  const wrap = document.getElementById('plannerWrap');
  wrap.innerHTML = '';

  MEALS.forEach(meal => {
    let mCal = 0, mPro = 0;
    meal.foods.forEach(({ id, qty }) => {
      const f = foods.find(x => x.id === id);
      if (f) { mCal += f.calories * qty; mPro += f.protein * qty; }
    });

    const rows = meal.foods.length
      ? meal.foods.map(({ id, qty }) => {
          const f = foods.find(x => x.id === id);
          if (!f) return '';
          return `
            <div class="meal-food-row">
              <div class="mfr-name">${f.emoji} ${f.name}${qty > 1 ? ` ×${qty}` : ''}</div>
              <div class="mfr-macros">${f.calories * qty}kcal · P:${f.protein * qty}g</div>
              <button class="mfr-del" onclick="removeFromMeal('${meal.id}', '${id}')">🗑</button>
            </div>`;
        }).join('')
      : '<div class="meal-empty">No foods assigned yet.</div>';

    wrap.innerHTML += `
      <div class="meal-slot">
        <div class="meal-slot-hdr" onclick="toggleSlot(this)">
          <div class="meal-slot-name">
            <span>${meal.name}</span>
            <span class="badge">${meal.foods.length}</span>
          </div>
          <div class="meal-slot-cal">${mCal}kcal · ${mPro}g pro ▾</div>
        </div>
        <div class="meal-slot-body" id="slot-${meal.id}">
          ${rows}
          <button class="add-to-meal-btn" onclick="openQA('${meal.id}')">+ Add food to ${meal.name}</button>
        </div>
      </div>`;
  });
}

function toggleSlot(hdr) {
  hdr.nextElementSibling.classList.toggle('open');
}

function removeFromMeal(mealId, foodId) {
  const meal = MEALS.find(m => m.id === mealId);
  meal.foods = meal.foods.filter(x => x.id !== foodId);
  renderPlanner();
  updateProgress();
  showToast('Removed from ' + meal.name);
}

function generateAutoplan() {
  if (!activeSport) { showToast('⚠️ Select a sport on Home first'); return; }
  const sf = foods.filter(f => f.sports.includes(activeSport));
  if (!sf.length) { showToast('No foods for this sport'); return; }

  MEALS.forEach((m, i) => {
    m.foods = [];
    const a = sf[i % sf.length];
    const b = sf[(i + 2) % sf.length];
    if (a) m.foods.push({ id: a.id, qty: 1 });
    if (b && b.id !== a.id) m.foods.push({ id: b.id, qty: 1 });
  });

  renderPlanner();
  updateProgress();
  showToast('⚡ Auto-plan for ' + SPORTS[activeSport].name + ' generated!');
}

function clearPlanner() {
  MEALS.forEach(m => m.foods = []);
  renderPlanner();
  updateProgress();
  showToast('Planner cleared');
}

/* ── Quick-Add Modal ── */
function openQA(mealId) {
  qaTargetMeal = mealId;
  const meal   = MEALS.find(m => m.id === mealId);
  document.getElementById('qaMealName').textContent = 'Add to ' + meal.name;

  const sel = document.getElementById('qaFoodSel');
  sel.innerHTML = '<option value="">— Pick a food —</option>' +
    foods.map(f => `<option value="${f.id}">${f.emoji} ${f.name}</option>`).join('');
  document.getElementById('qaQty').value = 1;
  document.getElementById('qaOverlay').classList.add('open');
}

function closeQA() {
  document.getElementById('qaOverlay').classList.remove('open');
  qaTargetMeal = null;
}

function chgQAQty(d) {
  const i = document.getElementById('qaQty');
  i.value = Math.max(1, Math.min(10, +i.value + d));
}

function confirmQA() {
  const fId = document.getElementById('qaFoodSel').value;
  if (!fId) { showToast('⚠️ Select a food'); return; }
  const qty  = Math.max(1, +document.getElementById('qaQty').value);
  const meal = MEALS.find(m => m.id === qaTargetMeal);
  const ex   = meal.foods.find(x => x.id === fId);
  if (ex) ex.qty = qty;
  else meal.foods.push({ id: fId, qty });
  closeQA();
  renderPlanner();
  updateProgress();
  const f = foods.find(x => x.id === fId);
  showToast(f.emoji + ' ' + f.name + ' → ' + meal.name);
}

document.getElementById('qaOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('qaOverlay')) closeQA();
});

/* ════════════════════════════════════════
   FOOD COMPARE
   ════════════════════════════════════════ */
function populateCmpSelects() {
  ['cmpA', 'cmpB'].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = '<option value="">— Select —</option>' +
      foods.map(f => `<option value="${f.id}">${f.emoji} ${f.name}</option>`).join('');
  });
}

function runCompare() {
  const a = foods.find(x => x.id === document.getElementById('cmpA').value);
  const b = foods.find(x => x.id === document.getElementById('cmpB').value);
  if (!a || !b) { document.getElementById('cmpResult').classList.remove('show'); return; }

  document.getElementById('cmpNA').textContent = a.emoji + ' ' + a.name;
  document.getElementById('cmpNB').textContent = b.emoji + ' ' + b.name;

  const metrics = [
    { l: 'Protein (g)',    k: 'protein'  },
    { l: 'Calories (kcal)', k: 'calories' },
    { l: 'Carbs (g)',      k: 'carbs'    },
    { l: 'Fat (g)',        k: 'fat'      }
  ];

  document.getElementById('cmpBars').innerHTML = metrics.map(m => {
    const va = a[m.k], vb = b[m.k];
    const mx = Math.max(va, vb) || 1;
    const wa = Math.round(va / mx * 100);
    const wb = Math.round(vb / mx * 100);
    const w  = va > vb ? 'a' : va < vb ? 'b' : '';
    const winTag = w ? `<span class="win-tag ${w}">${w === 'a' ? a.emoji : b.emoji} wins</span>` : '';

    return `
      <div class="cmp-bar-row">
        <div class="cmp-bar-lbl">${m.l} ${winTag}</div>
        <div class="cmp-bars">
          <div>
            <div style="display:flex;justify-content:flex-end;align-items:center;gap:6px;margin-bottom:3px">
              <span class="cmp-val-a">${va}</span>
            </div>
            <div style="display:flex;justify-content:flex-end">
              <div class="bar-a" style="width:${wa}%"></div>
            </div>
          </div>
          <div class="cmp-mid">${m.l.split(' ')[0]}</div>
          <div>
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
              <span class="cmp-val-b">${vb}</span>
            </div>
            <div class="bar-b" style="width:${wb}%"></div>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('cmpResult').classList.add('show');
}

/* ════════════════════════════════════════
   WATER TRACKER
   ════════════════════════════════════════ */
function updateWaterTarget() {
  waterTarget = parseInt(document.getElementById('waterTargetInput').value) || 2500;
  updateWaterUI();
}

function addWater(ml) {
  waterMl = Math.min(waterTarget, waterMl + ml);
  const t = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  waterLog.unshift({ ml, time: t });
  updateWaterUI();
  showToast('💧 +' + ml + 'ml · Total: ' + waterMl + 'ml');
}

function resetWater() {
  waterMl  = 0;
  waterLog = [];
  updateWaterUI();
}

function updateWaterUI() {
  const pct = Math.round(waterMl / waterTarget * 100);
  document.getElementById('glassFill').style.height = pct + '%';
  document.getElementById('glassPct').textContent   = pct + '%';
  document.getElementById('waterInfo').textContent  =
    waterMl + ' ml consumed · ' + Math.max(0, waterTarget - waterMl) + ' ml remaining';
  document.getElementById('waterLog').innerHTML = waterLog.slice(0, 7)
    .map(e => `<div class="water-entry"><span>+${e.ml} ml</span><span>${e.time}</span></div>`)
    .join('') || '<div style="color:var(--text-dim);font-size:.76rem">No entries yet.</div>';
}

/* ════════════════════════════════════════
   TOAST NOTIFICATION
   ════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

/* ════════════════════════════════════════
   INITIALISE
   ════════════════════════════════════════ */
renderGrid();
renderPlanner();
updateWaterUI();
