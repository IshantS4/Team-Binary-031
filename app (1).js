// --- MOCK DATA (ZONES) ---
// Large Datasets for Randomized Dispatching
const DELHI_HOSPITALS = [
  { id: 'h1', name: 'AIIMS New Delhi', specialty: ['Multi-Trauma', 'Cardiac'], beds: 12, totalBeds: 40, icu: 4, totalIcu: 10, accepting: true, score: 94, lat: 28.5672, lng: 77.2100 },
  { id: 'h2', name: 'Safdarjung Hospital', specialty: ['General', 'Orthopedic'], beds: 3, totalBeds: 60, icu: 1, totalIcu: 8, accepting: true, score: 72, lat: 28.5685, lng: 77.2058 },
  { id: 'h3', name: 'RML Hospital', specialty: ['Cardiac'], beds: 8, totalBeds: 25, icu: 5, totalIcu: 6, accepting: true, score: 88, lat: 28.6258, lng: 77.2014 },
  { id: 'h4', name: 'Max Super Speciality', specialty: ['Pediatric'], beds: 0, totalBeds: 80, icu: 0, totalIcu: 12, accepting: false, score: 12, lat: 28.5273, lng: 77.2154 },
  { id: 'h5', name: 'Indraprastha Apollo', specialty: ['Multi-Trauma'], beds: 6, totalBeds: 30, icu: 3, totalIcu: 7, accepting: true, score: 81, lat: 28.5393, lng: 77.2845 },
  { id: 'h6', name: 'Fortis Escorts Heart', specialty: ['Cardiac'], beds: 5, totalBeds: 20, icu: 2, totalIcu: 5, accepting: true, score: 85, lat: 28.5620, lng: 77.2740 },
  { id: 'h7', name: 'Sir Ganga Ram Hospital', specialty: ['General'], beds: 14, totalBeds: 50, icu: 6, totalIcu: 15, accepting: true, score: 91, lat: 28.6385, lng: 77.1895 },
  { id: 'h8', name: 'Lok Nayak Hospital', specialty: ['Multi-Trauma'], beds: 0, totalBeds: 100, icu: 0, totalIcu: 20, accepting: false, score: 5, lat: 28.6385, lng: 77.2384 },
  { id: 'h9', name: 'Batra Hospital', specialty: ['Orthopedic'], beds: 2, totalBeds: 40, icu: 1, totalIcu: 6, accepting: true, score: 65, lat: 28.5135, lng: 77.2458 },
  { id: 'h10', name: 'Holy Family Hospital', specialty: ['General'], beds: 10, totalBeds: 60, icu: 4, totalIcu: 10, accepting: true, score: 82, lat: 28.5624, lng: 77.2778 },
  { id: 'h11', name: 'Artemis Hospital', specialty: ['Neuro'], beds: 18, totalBeds: 45, icu: 8, totalIcu: 12, accepting: true, score: 95, lat: 28.4317, lng: 77.0682 },
  { id: 'h12', name: 'Medanta The Medicity', specialty: ['Multi-Trauma'], beds: 22, totalBeds: 150, icu: 12, totalIcu: 30, accepting: true, score: 98, lat: 28.4312, lng: 77.0353 }
];

const BLR_HOSPITALS = [
  { id: 'bh1', name: 'NIMHANS', specialty: ['Neuro', 'Multi-Trauma'], beds: 15, totalBeds: 50, icu: 6, totalIcu: 12, accepting: true, score: 95, lat: 12.9372, lng: 77.5946 },
  { id: 'bh2', name: 'Aster CMI', specialty: ['General'], beds: 5, totalBeds: 80, icu: 2, totalIcu: 15, accepting: true, score: 78, lat: 13.0645, lng: 77.5947 },
  { id: 'bh3', name: 'Manipal Hospital', specialty: ['Cardiac'], beds: 10, totalBeds: 40, icu: 3, totalIcu: 8, accepting: true, score: 89, lat: 12.9583, lng: 77.6491 },
  { id: 'bh4', name: 'Narayana Health', specialty: ['Cardiac'], beds: 0, totalBeds: 60, icu: 0, totalIcu: 10, accepting: false, score: 10, lat: 12.8093, lng: 77.7013 },
  { id: 'bh5', name: 'Fortis Hospital BG Road', specialty: ['Multi-Trauma'], beds: 8, totalBeds: 35, icu: 4, totalIcu: 8, accepting: true, score: 82, lat: 12.8943, lng: 77.5982 },
  { id: 'bh6', name: 'Apollo Hospitals Jayanagar', specialty: ['Orthopedic'], beds: 12, totalBeds: 45, icu: 5, totalIcu: 10, accepting: true, score: 86, lat: 12.9238, lng: 77.5950 },
  { id: 'bh7', name: 'St. Johns Medical College', specialty: ['General'], beds: 4, totalBeds: 100, icu: 2, totalIcu: 20, accepting: true, score: 70, lat: 12.9304, lng: 77.6186 },
  { id: 'bh8', name: 'Sakra World Hospital', specialty: ['Cardiac'], beds: 0, totalBeds: 50, icu: 0, totalIcu: 15, accepting: false, score: 8, lat: 12.9333, lng: 77.6833 },
  { id: 'bh9', name: 'Columbia Asia Referral', specialty: ['Pediatric'], beds: 7, totalBeds: 60, icu: 3, totalIcu: 12, accepting: true, score: 84, lat: 13.0116, lng: 77.5540 },
  { id: 'bh10', name: 'M.S. Ramaiah Memorial', specialty: ['Multi-Trauma'], beds: 18, totalBeds: 80, icu: 9, totalIcu: 18, accepting: true, score: 92, lat: 13.0309, lng: 77.5647 },
  { id: 'bh11', name: 'BGS Gleneagles Global', specialty: ['Neuro'], beds: 20, totalBeds: 70, icu: 8, totalIcu: 15, accepting: true, score: 94, lat: 12.8988, lng: 77.4988 },
  { id: 'bh12', name: 'Victoria Hospital', specialty: ['Burns'], beds: 1, totalBeds: 120, icu: 0, totalIcu: 25, accepting: true, score: 55, lat: 12.9631, lng: 77.5746 }
];

const DELHI_DRIVERS = [
  { id: 'd1', name: 'Ravi Kumar', amb: 'AMB-001-DL', score: 94, status: 'AVAILABLE', lat: 28.6320, lng: 77.2120 },
  { id: 'd2', name: 'Priya Sharma', amb: 'AMB-002-DL', score: 88, status: 'AVAILABLE', lat: 28.6280, lng: 77.2180 },
  { id: 'd3', name: 'Arun Mehta', amb: 'AMB-003-DL', score: 76, status: 'AVAILABLE', lat: 28.6390, lng: 77.2210 },
  { id: 'd4', name: 'Deepa Nair', amb: 'AMB-004-DL', score: 91, status: 'AVAILABLE', lat: 28.6150, lng: 77.2250 },
  { id: 'd5', name: 'Suresh Pillai', amb: 'AMB-005-DL', score: 65, status: 'AVAILABLE', lat: 28.6450, lng: 77.2050 },
  { id: 'd6', name: 'Vijay Tomar', amb: 'AMB-006-DL', score: 83, status: 'AVAILABLE', lat: 28.6220, lng: 77.2020 },
  { id: 'd7', name: 'Karan Singh', amb: 'AMB-007-DL', score: 78, status: 'AVAILABLE', lat: 28.6200, lng: 77.2100 },
  { id: 'd8', name: 'Neha Gupta', amb: 'AMB-008-DL', score: 95, status: 'AVAILABLE', lat: 28.6300, lng: 77.2300 }
];

const BLR_DRIVERS = [
  { id: 'bd1', name: 'Shivakumar N.', amb: 'AMB-101-KA', score: 92, status: 'AVAILABLE', lat: 13.0980, lng: 77.5920 },
  { id: 'bd2', name: 'Lakshmi P.', amb: 'AMB-102-KA', score: 85, status: 'AVAILABLE', lat: 13.1030, lng: 77.5990 },
  { id: 'bd3', name: 'Praveen G.', amb: 'AMB-103-KA', score: 79, status: 'AVAILABLE', lat: 13.0900, lng: 77.6010 },
  { id: 'bd4', name: 'Anitha V.', amb: 'AMB-104-KA', score: 94, status: 'AVAILABLE', lat: 13.1150, lng: 77.5880 },
  { id: 'bd5', name: 'Rajesh K.', amb: 'AMB-105-KA', score: 68, status: 'AVAILABLE', lat: 13.0850, lng: 77.5950 },
  { id: 'bd6', name: 'Imran M.', amb: 'AMB-106-KA', score: 88, status: 'AVAILABLE', lat: 13.1080, lng: 77.5800 },
  { id: 'bd7', name: 'Gowda S.', amb: 'AMB-107-KA', score: 75, status: 'AVAILABLE', lat: 13.0950, lng: 77.5850 },
  { id: 'bd8', name: 'Srinivas R.', amb: 'AMB-108-KA', score: 90, status: 'AVAILABLE', lat: 13.1100, lng: 77.5900 }
];

// --- STATE MANAGEMENT ---
function initData() {
  if (!localStorage.getItem('ra_zones')) {
    // Pick 5 random initially
    const dHosp = DELHI_HOSPITALS.sort(() => 0.5 - Math.random()).slice(0, 5);
    const bHosp = BLR_HOSPITALS.sort(() => 0.5 - Math.random()).slice(0, 5);
    const dDrv = DELHI_DRIVERS.sort(() => 0.5 - Math.random()).slice(0, 5);
    const bDrv = BLR_DRIVERS.sort(() => 0.5 - Math.random()).slice(0, 5);
    const z = {
      Delhi: { center: [28.6304, 77.2177], hospitals: dHosp, drivers: JSON.parse(JSON.stringify(dDrv)) },
      Bengaluru: { center: [13.1005, 77.5963], hospitals: bHosp, drivers: JSON.parse(JSON.stringify(bDrv)) }
    };
    localStorage.setItem('ra_zones', JSON.stringify(z));
  }
  if (!localStorage.getItem('ra_incidents')) localStorage.setItem('ra_incidents', JSON.stringify([]));
  if (!localStorage.getItem('ra_dispatches')) localStorage.setItem('ra_dispatches', JSON.stringify({}));
  if (!localStorage.getItem('ra_city')) localStorage.setItem('ra_city', 'Delhi');
}

function reRollHospitals(city) {
  const z = getData('ra_zones');
  const pool = city === 'Delhi' ? DELHI_HOSPITALS : BLR_HOSPITALS;
  const newSet = pool.sort(() => 0.5 - Math.random()).slice(0, 5);
  z[city].hospitals = newSet;
  setData('ra_zones', z);
}

function resetDemo() {
  localStorage.removeItem('ra_zones');
  localStorage.removeItem('ra_incidents');
  localStorage.removeItem('ra_dispatches');
  localStorage.removeItem('ra_role');
  localStorage.removeItem('ra_user_id');
  localStorage.removeItem('ra_city');
  initData();
  showToast("Demo Reset Successfully", "success");
  setTimeout(() => location.reload(), 1000);
}

function getData(key) { return JSON.parse(localStorage.getItem(key)); }
function setData(key, data) { localStorage.setItem(key, JSON.stringify(data)); window.dispatchEvent(new Event('storage')); }

let currentRole = localStorage.getItem('ra_role') || null;
let currentUserId = localStorage.getItem('ra_user_id') || null;
let controlCity = localStorage.getItem('ra_city') || 'Delhi';

let crMap = null;
let drvMap = null;
let markers = {};

const YOUR_MAPTILER_KEY = "1h4RnvZzQDxzbKuGz9K6";

// --- UTILS ---
function showToast(msg, type = 'success') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3000);
}
function updateClock() {
  const now = new Date().toLocaleTimeString('en-US', { hour12: false });
  document.querySelectorAll('.live-clock').forEach(el => el.innerText = now);
}
setInterval(updateClock, 1000);

// --- ROUTING ---
function navigateTo(pageId) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
  document.getElementById('page-' + pageId).classList.remove('hidden');
  updateClock();
}

function loginAs(role, id) {
  localStorage.setItem('ra_role', role);
  localStorage.setItem('ra_user_id', id);
  location.reload();
}
function logout() {
  localStorage.removeItem('ra_role');
  localStorage.removeItem('ra_user_id');
  location.reload();
}

function openLoginModal(role) {
  document.getElementById('login-modal').classList.remove('hidden');
  document.getElementById('l-role').innerText = role.toUpperCase();

  const stdInputs = document.getElementById('login-standard-inputs');
  const drvInputs = document.getElementById('login-driver-inputs');
  const hspInputs = document.getElementById('login-hospital-inputs');
  const btn = document.getElementById('login-btn-final');

  const z = getData('ra_zones');

  if (role === 'driver') {
    stdInputs.classList.add('hidden');
    drvInputs.classList.remove('hidden');
    if (hspInputs) hspInputs.classList.add('hidden');

    // Populate dropdown with ALL drivers so none are ever lost
    const allDrv = [...DELHI_DRIVERS, ...BLR_DRIVERS];
    const sel = document.getElementById('l-driver-select');
    sel.innerHTML = allDrv.map(d => {
      const status = (getData('ra_dispatches') || {})[d.id] ? 'ON DUTY' : d.status;
      return `<option value="${d.id}">${d.name} (${d.amb}) - ${status}</option>`;
    }).join('');

    btn.onclick = () => loginAs('driver', sel.value);
  } else if (role === 'hospital') {
    stdInputs.classList.add('hidden');
    drvInputs.classList.add('hidden');
    if (hspInputs) hspInputs.classList.remove('hidden');

    const allHosp = [...DELHI_HOSPITALS, ...BLR_HOSPITALS];
    const sel = document.getElementById('l-hospital-select');
    sel.innerHTML = allHosp.map(h => `<option value="${h.id}">${h.name} - ${h.accepting ? 'Available' : 'Unavailable'}</option>`).join('');

    btn.onclick = () => loginAs('hospital', sel.value);
  } else {
    stdInputs.classList.remove('hidden');
    drvInputs.classList.add('hidden');
    if (hspInputs) hspInputs.classList.add('hidden');

    const u = document.getElementById('l-user');
    const p = document.getElementById('l-pass');
    u.value = 'admin'; p.value = 'admin123';
    btn.onclick = () => { loginAs(role, 'cr'); };
  }
}

function checkRoute() {
  if (!currentRole) {
    navigateTo('login');
  } else if (currentRole === 'admin') {
    navigateTo('control');
    document.getElementById('cr-city-select').value = controlCity;
    initCRMap();
    renderControlRoom();
  } else if (currentRole === 'hospital') {
    navigateTo('hospital');
    renderHospital();
  } else if (currentRole === 'driver') {
    navigateTo('driver');
    initDrvMap();
    renderDriver();
  }
}

const iconHospGreen = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pin" style="background:var(--accent-green);"><span class="material-symbols-outlined" style="font-size:16px;">local_hospital</span></div>' });
const iconHospRed = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pin" style="background:var(--accent-red);"><span class="material-symbols-outlined" style="font-size:16px;">local_hospital</span></div>' });
const iconAmbGreen = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pin" style="background:var(--accent-green);"><span class="material-symbols-outlined" style="font-size:16px;">settings_accessibility</span></div>' }); // using accessibility as temp amb icon if not strict 'ambulance'
const iconAmbYellow = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pin" style="background:var(--accent-yellow); color:black;"><span class="material-symbols-outlined" style="font-size:16px;">settings_accessibility</span></div>' });
const iconInc = L.divIcon({ className: 'custom-marker', html: '<div class="marker-pulse"></div>' });

// Overriding with exact "ambulance" and "add" exactly as requested:
iconAmbGreen.options.html = '<div class="marker-pin" style="background:var(--accent-green);"><span class="material-symbols-outlined" style="font-size:16px;">ambulance</span></div>';
iconAmbYellow.options.html = '<div class="marker-pin" style="background:var(--accent-yellow); color:black;"><span class="material-symbols-outlined" style="font-size:16px;">ambulance</span></div>';
iconHospGreen.options.html = '<div class="marker-pin" style="background:var(--accent-green);"><span class="material-symbols-outlined" style="font-size:16px;">add</span></div>';
iconHospRed.options.html = '<div class="marker-pin" style="background:var(--accent-red);"><span class="material-symbols-outlined" style="font-size:16px;">add</span></div>';

// --- CONTROL ROOM ---
function onCityChange() {
  controlCity = document.getElementById('cr-city-select').value;
  localStorage.setItem('ra_city', controlCity);
  reRollHospitals(controlCity); // Reroll 5 hospitals immediately on switch
  renderControlRoom();
}

function initCRMap() {
  const city = controlCity;
  const bounds = city === 'Delhi' ? [[28.4, 76.9], [28.8, 77.5]] : [[12.8, 77.4], [13.2, 77.8]];
  crMap = L.map('cr-map', {
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
  }).setView(ZONES[city].center, 13);
  L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`, {
    attribution: 'RapidAid Map'
  }).addTo(crMap);
}

function renderControlRoom() {
  const zones = getData('ra_zones');
  const cityData = zones[controlCity];

  if (crMap) {
    crMap.setView(cityData.center, 13);
    Object.values(markers).forEach(m => crMap.removeLayer(m));
    markers = {};

    cityData.hospitals.forEach(h => {
      const m = L.marker([h.lat, h.lng], { icon: h.accepting ? iconHospGreen : iconHospRed }).bindPopup(`<b>${h.name}</b><br>Beds: ${h.beds}`);
      m.addTo(crMap);
      markers[h.id] = m;
    });

    cityData.drivers.forEach(d => {
      const m = L.marker([d.lat, d.lng], { icon: d.status === 'AVAILABLE' ? iconAmbGreen : iconAmbYellow }).bindPopup(`<b>${d.amb}</b><br>${d.status}`);
      m.addTo(crMap);
      markers[d.id] = m;
    });
  }

  const hl = document.getElementById('cr-hospitals-list');
  if (hl) {
    hl.innerHTML = cityData.hospitals.map(h => `
      <div class="glass-panel" style="padding: 10px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong>${h.name}</strong> 
            <span class="badge ${h.accepting ? 'badge-green' : 'badge-red'}">${h.accepting ? 'AVAILABLE' : 'UNAVAILABLE'}</span>
          </div>
          <div style="font-size:1.5rem; font-weight:bold; color:var(--accent-blue)">${h.score}</div>
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:5px; line-height: 1.4;">
          <span style="color:#0ea5e9"><i class="fa-solid fa-bed"></i> ${h.beds}/${h.totalBeds} Beds</span> | 
          <span style="color:#f59e0b"><i class="fa-solid fa-user-doctor"></i> Docs: ${Math.floor(Math.random() * 4 + 2)} Avail</span><br>
          <span style="color:#22c55e">Specialty: ${h.specialty.join(', ')}</span>
        </div>
      </div>
    `).join('');
  }

  const fl = document.getElementById('cr-fleet-list');
  if (fl) {
    fl.innerHTML = cityData.drivers.map(drv => `
      <div class="list-item">
        <div><strong>${drv.name}</strong> <span class="text-muted">(${drv.amb})</span></div>
        <div><span class="badge ${drv.status == 'AVAILABLE' ? 'badge-green' : 'badge-amber'}">${drv.status}</span></div>
      </div>
    `).join('');
  }

  const incList = document.getElementById('cr-incidents');
  if (incList) {
    const arr = getData('ra_incidents').filter(i => i.city === controlCity);
    if (arr.length === 0) incList.innerHTML = `<div class="text-muted text-center" style="padding:20px;">No active incidents in this zone</div>`;
    else {
      incList.innerHTML = arr.map(inc => `
        <div class="glass-panel hover-target" style="padding:15px; margin-bottom:10px; font-size:0.9rem; cursor:pointer;" onclick="panToIncident('${inc.driverId}')">
          <div style="display:flex; justify-content:space-between;">
             <div><strong>${inc.pname}</strong> - ${inc.condition}</div>
             <div class="badge badge-amber">${inc.status}</div>
          </div>
          <div style="color:var(--text-muted); margin-top:5px;">
            Driver: ${inc.driverName} | Dest: ${inc.hospitalName}
          </div>
        </div>
      `).join('');

      arr.forEach(inc => {
        if (inc.lat && inc.lng && !markers['inc_' + inc.id]) {
          const m = L.marker([inc.lat, inc.lng], { icon: iconInc }).bindPopup(`Incident: ${inc.condition}`);
          m.addTo(crMap);
          markers['inc_' + inc.id] = m;
        }
      });
    }
  }
}

function panToIncident(driverId) {
  if (markers[driverId] && crMap) {
    crMap.flyTo(markers[driverId].getLatLng(), 16);
    markers[driverId].openPopup();
  }
}

function simAI() {
  document.getElementById('ai-btn').classList.add('hidden');
  document.getElementById('ai-loader').classList.remove('hidden');

  const zones = getData('ra_zones');
  const cityData = zones[controlCity];

  const availDrivers = cityData.drivers.filter(d => {
    // Must not be in ra_dispatches
    return !(getData('ra_dispatches') || {})[d.id] && d.status === 'AVAILABLE';
  });
  const availHosp = cityData.hospitals.filter(h => h.accepting).sort((a, b) => b.score - a.score);

  setTimeout(() => {
    document.getElementById('ai-loader').classList.add('hidden');
    document.getElementById('ai-result').classList.remove('hidden');

    if (availDrivers.length === 0 || availHosp.length === 0) {
      document.getElementById('ai-result').innerHTML = `<div class="glass-panel text-center text-red" style="padding:20px;">NO ASSETS AVAILABLE IN THIS CITY!</div>`;
      return;
    }

    // Shuffle drivers
    const drvs = availDrivers.sort(() => 0.5 - Math.random());

    // Option 1: Top Rated / Far but clear traffic
    const h1 = availHosp[0];
    const d1 = drvs[0];

    // Option 2: Physically closer but traffic warning
    const h2 = availHosp.length > 1 ? availHosp[1] : availHosp[0];
    const d2 = drvs.length > 1 ? drvs[1] : drvs[0];

    // Option 3: Balanced
    const h3 = availHosp.length > 2 ? availHosp[2] : availHosp[0];
    const d3 = drvs.length > 2 ? drvs[2] : drvs[0];

    window.__ai_options = [
      { hsp: h1, drv: d1, reason: "14 km - Fastest Route (Clear Traffic)", eta: "12 mins", isBest: true },
      { hsp: h2, drv: d2, reason: "5 km - High Regional Traffic Delay", eta: "21 mins", isBest: false, warn: true },
      { hsp: h3, drv: d3, reason: "9 km - Moderate Traffic Route", eta: "16 mins", isBest: false }
    ];

    const resHTML = window.__ai_options.map((opt, i) => `
      <div class="glass-panel AI-card hover-target" style="padding:15px; margin-bottom:15px; border-color: ${opt.warn ? 'var(--accent-red)' : (opt.isBest ? 'var(--accent-blue)' : 'var(--glass-border)')}">
         <div style="display:flex; justify-content:space-between;">
            <h4 style="color:${opt.warn ? 'var(--accent-red)' : 'var(--accent-blue)'}; margin-bottom:5px;">
              ${opt.isBest ? '🏆 OPTION A (RECOMMENDED)' : (opt.warn ? '⚠️ OPTION B (CLOSEST/TRAFFIC)' : 'OPTION C (ALTERNATIVE)')}
            </h4>
            <span class="badge ${opt.warn ? 'badge-red' : 'badge-green'}">${opt.eta}</span>
         </div>
         <p><strong>Hospital:</strong> ${opt.hsp.name} <span class="text-muted">(${opt.hsp.specialty.join(', ')})</span></p>
         <p><strong>Driver:</strong> ${opt.drv.name} <span class="text-muted">(${opt.drv.amb})</span></p>
         <p style="margin-top:5px; color:${opt.warn ? 'var(--accent-red)' : 'var(--text-muted)'}; font-size:0.9rem;"><i>Reasoning: ${opt.reason}</i></p>
         <button class="btn btn-success" style="width:100%; margin-top:10px; padding:10px;" onclick="approveDispatch(${i})"><i class="fa-solid fa-check"></i> DISPATCH THIS</button>
      </div>
    `).join('');

    document.getElementById('ai-result').innerHTML = resHTML;
  }, 1500);
}

function approveDispatch(optIndex) {
  const opt = window.__ai_options[optIndex];
  const drv = opt.drv;
  const hsp = opt.hsp;
  const zones = getData('ra_zones');

  const dRef = zones[controlCity].drivers.find(d => d.id === drv.id);
  if (dRef) dRef.status = 'ON DUTY';
  setData('ra_zones', zones);

  const incId = Math.floor(1000 + Math.random() * 9000);
  const newInc = {
    id: incId,
    pname: document.getElementById('f-pname').value,
    condition: document.getElementById('f-cond').value,
    driverName: drv.name, driverId: drv.id,
    hospitalName: hsp.name, hospitalId: hsp.id,
    status: 'Dispatched', city: controlCity,
    etaStr: opt.eta,
    lat: drv.lat + (Math.random() * 0.03 - 0.015), lng: drv.lng + (Math.random() * 0.03 - 0.015)
  };

  const arr = getData('ra_incidents');
  arr.push(newInc);
  setData('ra_incidents', arr);

  const disps = getData('ra_dispatches');
  disps[drv.id] = newInc;
  disps[hsp.id] = newInc;
  setData('ra_dispatches', disps);

  showToast(`Initiating Dispatch: ${drv.amb} to ${hsp.name}`, 'success');

  // Re-roll hospitals for the NEXT patient input per requirement!
  reRollHospitals(controlCity);

  document.getElementById('ai-result').classList.add('hidden');
  document.getElementById('ai-btn').classList.remove('hidden');

  startMarkerAnimation(newInc.id);
}

function startMarkerAnimation(incidentId) {
  // Global loop that animates all active dispatches continuously
  if (window.__animLoop) return;
  window.__animLoop = setInterval(() => {
    const incs = getData('ra_incidents');
    const zs = getData('ra_zones');
    const disps = getData('ra_dispatches');

    let changed = false;

    incs.forEach(inc => {
      if (inc.status === 'Patient Delivered') return; // Dead task

      const drv = zs[inc.city]?.drivers.find(d => d.id === inc.driverId);
      const hsp = zs[inc.city]?.hospitals.find(h => h.id === inc.hospitalId) || [...DELHI_HOSPITALS, ...BLR_HOSPITALS].find(h => h.id === inc.hospitalId);

      if (!drv || !hsp) return;

      let targetLat = inc.lat;
      let targetLng = inc.lng;

      // If en route to hospital, change target to hospital coordinates
      if (inc.status === 'En Route') { targetLat = hsp.lat; targetLng = hsp.lng; }

      // Interpolate position
      const diffLat = targetLat - drv.lat;
      const diffLng = targetLng - drv.lng;
      const dist = Math.sqrt(diffLat * diffLat + diffLng * diffLng);

      if (dist > 0.0005) { // If not extremely close
        drv.lat += diffLat * 0.05; // Move 5% towards target per tick
        drv.lng += diffLng * 0.05;
        changed = true;
      }
    });

    if (changed) {
      setData('ra_zones', zs); // Sync to storage so all browsers/pages update map position natively
      // If we are currently driver or hospital, try to re-read and adjust lines? 
      // For prototype just let local storage trigger map redraws in interval if needed
    }
  }, 1000); // 1 tick per sec
}


// --- DRIVER ---
function initDrvMap() {
  const city = localStorage.getItem('ra_city') || 'Delhi';
  const center = city === 'Delhi' ? [28.6304, 77.2177] : [13.1005, 77.5963];
  const bounds = city === 'Delhi' ? [[28.4, 76.9], [28.8, 77.5]] : [[12.8, 77.4], [13.2, 77.8]];
  drvMap = L.map('driver-map', {
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
  }).setView(center, 12);
  L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`).addTo(drvMap);
}

function renderDriver() {
  const z = getData('ra_zones');
  let drv = z['Delhi'].drivers.find(d => d.id === currentUserId);
  let city = 'Delhi';
  if (!drv) { drv = z['Bengaluru'].drivers.find(d => d.id === currentUserId); city = 'Bengaluru'; }

  if (!drv) {
    document.getElementById('driver-name').innerText = "Unknown Driver";
    return;
  }

  const statusPanel = document.getElementById('d-availability-status');
  const activePanel = document.getElementById('d-active-dashboard');

  if (drv.status === 'OFF DUTY') {
    if (statusPanel) statusPanel.classList.remove('hidden');
    if (activePanel) activePanel.classList.add('hidden');
    return;
  } else {
    if (statusPanel) statusPanel.classList.add('hidden');
    if (activePanel) activePanel.classList.remove('hidden');
  }

  document.getElementById('driver-name').innerText = drv.name;
  document.getElementById('driver-amb').innerText = drv.amb;
  document.getElementById('driver-score').innerText = drv.score;
  document.getElementById('driver-city').innerText = city;

  checkDriverDispatch();
}

function checkDriverDispatch() {
  if (currentRole !== 'driver') return;
  const disps = getData('ra_dispatches');
  const myDisp = disps[currentUserId];
  const incs = getData('ra_incidents');
  const inc = myDisp ? incs.find(i => i.id === myDisp.id) : null;

  if (inc && inc.status === 'Dispatched') {
    document.getElementById('driver-popup').classList.remove('hidden');
    document.getElementById('dp-pname').innerText = inc.pname;
    document.getElementById('dp-cond').innerText = inc.condition;
    document.getElementById('dp-hosp').innerText = inc.hospitalName;
  } else if (inc && drvMap && document.getElementById('driver-popup').classList.contains('hidden')) {
    // Redraw active tracking
    const z = getData('ra_zones');
    const hsppool = [...DELHI_HOSPITALS, ...BLR_HOSPITALS];
    const hsp = hsppool.find(h => h.id === inc.hospitalId) || z[inc.city].hospitals.find(h => h.id === inc.hospitalId);
    const drv = z[inc.city].drivers.find(d => d.id === currentUserId);

    if (drv && hsp) {
      drvMap.eachLayer((layer) => { if (layer instanceof L.Marker || layer instanceof L.Polyline) drvMap.removeLayer(layer); });
      L.marker([inc.lat, inc.lng], { icon: iconInc }).bindPopup("Patient").addTo(drvMap);
      L.marker([hsp.lat, hsp.lng], { icon: iconHospGreen }).bindPopup(hsp.name).addTo(drvMap);
      L.marker([drv.lat, drv.lng], { icon: iconAmbYellow }).bindPopup("You").addTo(drvMap);

      let lineColor = inc.status === 'En Route' ? '#f59e0b' : '#3b82f6';
      let targetLat = inc.status === 'En Route' ? hsp.lat : inc.lat;
      let targetLng = inc.status === 'En Route' ? hsp.lng : inc.lng;
      L.polyline([[drv.lat, drv.lng], [targetLat, targetLng]], { color: lineColor, weight: 4, dashArray: '10, 10' }).addTo(drvMap);

      // Calc distance string roughly
      const diffLat = targetLat - drv.lat; const diffLng = targetLng - drv.lng;
      const distKm = Math.max(0.1, Math.sqrt(diffLat * diffLat + diffLng * diffLng) * 111).toFixed(1);
      document.getElementById('dt-eta').innerText = `${distKm} km remaining to target`;
    }
  }
}

function acceptDispatch() {
  // STRICTLY REMOVE POPUP FROM DOM
  const popup = document.getElementById('driver-popup');
  if (popup) popup.remove();
  document.getElementById('driver-map-section').classList.remove('hidden');
  document.getElementById('dt-btn-1').classList.remove('hidden');

  const incs = getData('ra_incidents');
  const myDisp = getData('ra_dispatches')[currentUserId];
  const inc = incs.find(i => i.id === myDisp.id);

  if (inc) {
    inc.status = 'Arrived at Location';
    setData('ra_incidents', incs);

    if (drvMap) {
      const z = getData('ra_zones');
      const hsppool = [...DELHI_HOSPITALS, ...BLR_HOSPITALS]; // Scan all authentic for coords
      const hsp = hsppool.find(h => h.id === inc.hospitalId) || z[inc.city].hospitals.find(h => h.id === inc.hospitalId);
      const drv = z[inc.city].drivers.find(d => d.id === currentUserId);
      drvMap.setView([drv.lat, drv.lng], 14);

      // Clear old
      drvMap.eachLayer((layer) => { if (layer instanceof L.Marker || layer instanceof L.Polyline) drvMap.removeLayer(layer); });

      L.marker([inc.lat, inc.lng], { icon: iconInc }).bindPopup("Patient").addTo(drvMap);
      L.marker([hsp.lat, hsp.lng], { icon: iconHospGreen }).bindPopup(hsp.name).addTo(drvMap);
      L.marker([drv.lat, drv.lng], { icon: iconAmbYellow }).bindPopup("You").addTo(drvMap);

      L.polyline([[drv.lat, drv.lng], [inc.lat, inc.lng], [hsp.lat, hsp.lng]], { color: '#3b82f6', weight: 4, dashArray: '10, 10' }).addTo(drvMap);

      document.getElementById('dt-eta').innerText = `ETA: ${Math.floor(Math.random() * 10) + 5} minutes`;
    }
  }
  showToast("Dispatch Accepted", "success");
}

function updateDriverStatus(step) {
  const incs = getData('ra_incidents');
  const myDisp = getData('ra_dispatches')[currentUserId];
  if (!myDisp) return;
  const inc = incs.find(i => i.id === myDisp.id);
  if (!inc) return;

  if (step === 1) {
    inc.status = 'Arrived at Location';
    document.getElementById('dt-btn-1').classList.add('hidden');
    document.getElementById('dt-btn-2').classList.remove('hidden');
  } else if (step === 2) {
    inc.status = 'En Route';
    document.getElementById('dt-btn-2').classList.add('hidden');
    document.getElementById('dt-btn-3').classList.remove('hidden');
  } else if (step === 3) {
    inc.status = 'Patient Delivered';
    document.getElementById('dt-btn-3').classList.add('hidden');
    document.getElementById('driver-map-section').classList.add('hidden');
    document.getElementById('dt-btn-1').classList.add('hidden'); // reset buttons

    const z = getData('ra_zones');
    const dRef = z[inc.city].drivers.find(d => d.id === currentUserId);
    if (dRef) dRef.status = 'AVAILABLE';
    setData('ra_zones', z);

    const disps = getData('ra_dispatches');
    delete disps[currentUserId];
    setData('ra_dispatches', disps);
    showToast("Trip Completed - Back Available", "success");
  }
  setData('ra_incidents', incs);
}

// --- HOSPITAL ---
function renderHospital() {
  const z = getData('ra_zones');
  const hsppool = [...DELHI_HOSPITALS, ...BLR_HOSPITALS];
  let h = z.Delhi.hospitals.find(x => x.id === currentUserId) || z.Bengaluru.hospitals.find(x => x.id === currentUserId) || hsppool.find(x => x.id === currentUserId);
  if (!h) return;

  const statusPanel = document.getElementById('h-availability-status');
  const activePanel = document.getElementById('h-active-dashboard');

  if (!h.accepting) {
    if (statusPanel) statusPanel.classList.remove('hidden');
    if (activePanel) activePanel.classList.add('hidden');
  } else {
    if (statusPanel) statusPanel.classList.add('hidden');
    if (activePanel) activePanel.classList.remove('hidden');
  }

  document.getElementById('hosp-name').innerText = h.name;
  document.getElementById('h-beds').innerText = h.beds;
  document.getElementById('h-total-beds').innerText = h.totalBeds;
  document.getElementById('h-icu').innerText = h.icu;
  document.getElementById('h-total-icu').innerText = h.totalIcu;
  document.getElementById('h-score').innerText = h.score;
  document.getElementById('h-toggle-acc').checked = h.accepting;

  checkHospitalDispatch();
}

function updateHospBeds(delta) {
  showToast("Bed count simulated.", "success");
}

function toggleHospAcc() {
  const z = getData('ra_zones');
  let h = z['Delhi'].hospitals.find(x => x.id === currentUserId) || z['Bengaluru'].hospitals.find(x => x.id === currentUserId);
  if (h) {
    h.accepting = document.getElementById('h-toggle-acc').checked;
    setData('ra_zones', z);
  }
}

function checkHospitalDispatch() {
  if (currentRole !== 'hospital') return;
  const disps = getData('ra_dispatches');
  const myDisp = disps[currentUserId];
  const inc = myDisp ? getData('ra_incidents').find(i => i.id === myDisp.id) : null;

  if (inc && inc.status === 'Dispatched') {
    document.getElementById('h-incoming-box').classList.remove('hidden');
    document.getElementById('hospital-map-section').classList.add('hidden');
    document.getElementById('hologram-btns').classList.remove('hidden');
    document.getElementById('hi-cond').innerText = inc.condition;
    document.getElementById('hi-driver').innerText = inc.driverName;
    document.getElementById('hi-eta').innerText = inc.etaStr || "10 mins";
  } else if (inc && window.hospMap) {
    // If accepted already
    document.getElementById('h-incoming-box').classList.remove('hidden');
    document.getElementById('hologram-btns').classList.add('hidden');
    document.getElementById('hospital-map-section').classList.remove('hidden');

    // Update amb marker tracking for hospital
    const z = getData('ra_zones');
    const drv = z[inc.city]?.drivers.find(d => d.id === inc.driverId);
    if (drv) {
      window.hospMap.eachLayer((layer) => { if (layer instanceof L.Marker || layer instanceof L.Polyline) window.hospMap.removeLayer(layer); });

      let targetLat = drv.lat; let targetLng = drv.lng;
      L.marker([targetLat, targetLng], { icon: iconAmbYellow }).bindPopup("Ambulance Approaching").addTo(window.hospMap);

      const hsp = z.Delhi.hospitals.find(x => x.id === currentUserId) || z.Bengaluru.hospitals.find(x => x.id === currentUserId) || [...DELHI_HOSPITALS, ...BLR_HOSPITALS].find(x => x.id === currentUserId);
      if (hsp) L.marker([hsp.lat, hsp.lng], { icon: iconHospGreen }).bindPopup("Your Hospital").addTo(window.hospMap);

      const diffLat = hsp.lat - drv.lat; const diffLng = hsp.lng - drv.lng;
      const distKm = Math.max(0.1, Math.sqrt(diffLat * diffLat + diffLng * diffLng) * 111).toFixed(1);
      document.getElementById('hi-eta').innerText = inc.status === 'Patient Delivered' ? "ARRIVED!" : `${distKm} km away`;
    }
  }
}

function ackAlertHospital() {
  document.getElementById('hologram-btns').classList.add('hidden');
  document.getElementById('h-checklist').classList.remove('hidden');
  document.getElementById('hospital-map-section').classList.remove('hidden');

  if (!window.hospMap) {
    window.hospMap = L.map('hospital-tracking-map', { zoomControl: false }).setView([0, 0], 12);
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`).addTo(window.hospMap);
  }

  const disps = getData('ra_dispatches');
  const myDisp = disps[currentUserId];
  if (myDisp) {
    setTimeout(() => {
      window.hospMap.invalidateSize();
      window.hospMap.setView([myDisp.lat, myDisp.lng], 14);
      window.hospMap.eachLayer((layer) => { if (layer instanceof L.Marker) window.hospMap.removeLayer(layer); });
      L.marker([myDisp.lat, myDisp.lng], { icon: iconInc }).bindPopup("Patient Incoming").addTo(window.hospMap);
    }, 300);
  }
  showToast("Incoming transmission accepted. Patient localized.", "success");
}

function checkPreps() { }

// --- INITIALIZE ---
window.addEventListener('storage', (e) => {
  if (currentRole === 'admin') renderControlRoom();
  if (currentRole === 'driver') { renderDriver(); checkDriverDispatch(); }
  if (currentRole === 'hospital') { renderHospital(); checkHospitalDispatch(); }
});

window.onload = () => {
  initData();
  checkRoute();
};
