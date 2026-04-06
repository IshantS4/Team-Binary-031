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

const darkMapStyle = [{ elementType: "geometry", stylers: [{ color: "#212121" }] }, { elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] }, { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] }, { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] }, { featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#e0e0e0" }] }, { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] }];
let infoWindow = null;
function getMapThemeStyles() { return document.body.classList.contains('light-theme') ? [] : darkMapStyle; }
function getGoogleIcon(type, color) {
  let path = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z';
  if (type === 'hospital') path = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 11h-2v2h-2v-2H9v-2h2V9h2v2h2v2z";
  else if (type === 'ambulance') path = "M19 7h-3V6a4 4 0 0 0-8 0v1H5c-1.1 0-2 .9-2 2v6h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-4l-3-4z M8 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-6H6V7h6v3zm6 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-3h-4V7h1.5l2.5 3.3V13z";
  else if (type === 'incident') path = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z";
  return { path: path, fillColor: color, fillOpacity: 1, strokeWeight: 1, strokeColor: "white", scale: 1.2, anchor: new google.maps.Point(12, 12) };
}

// --- CONTROL ROOM ---
function onCityChange() {
  controlCity = document.getElementById('cr-city-select').value;
  localStorage.setItem('ra_city', controlCity);
  window.__crMapInitialized = false;
  reRollHospitals(controlCity); // Reroll 5 hospitals immediately on switch
  renderControlRoom();
}

function initCRMap() {
  const city = controlCity;
  const center = city === 'Delhi' ? { lat: 28.6304, lng: 77.2177 } : { lat: 13.1005, lng: 77.5963 };
  crMap = new google.maps.Map(document.getElementById('cr-map'), {
    center: center,
    zoom: 13,
    styles: getMapThemeStyles(),
    disableDefaultUI: true
  });
  infoWindow = new google.maps.InfoWindow();
}

function renderControlRoom() {
  const zones = getData('ra_zones');
  const cityData = zones[controlCity];

  if (crMap) {
    if (!window.__crMapInitialized) {
      crMap.setCenter(cityData.center);
      window.__crMapInitialized = true;
    }

    const currentList = new Set();

    cityData.hospitals.forEach(h => {
      const mId = 'h_' + h.id;
      currentList.add(mId);
      let iconObj = getGoogleIcon('hospital', h.accepting ? '#22c55e' : '#ef4444');
      if (!markers[mId]) {
        const m = new google.maps.Marker({ position: { lat: h.lat, lng: h.lng }, map: crMap, icon: iconObj });
        m.addListener("mouseover", () => { infoWindow.setContent(`<b>${h.name}</b><br>Beds: ${h.beds}`); infoWindow.open(crMap, m); });
        m.addListener("mouseout", () => infoWindow.close());
        markers[mId] = m;
      } else {
        markers[mId].setPosition({ lat: h.lat, lng: h.lng });
        markers[mId].setIcon(iconObj);
      }
    });

    cityData.drivers.forEach(d => {
      const mId = 'd_' + d.id;
      currentList.add(mId);
      let iconObj = getGoogleIcon('ambulance', d.status === 'AVAILABLE' ? '#22c55e' : '#eab308');
      if (!markers[mId]) {
        const m = new google.maps.Marker({ position: { lat: d.lat, lng: d.lng }, map: crMap, icon: iconObj });
        m.addListener("mouseover", () => { infoWindow.setContent(`<b>${d.amb}</b><br>${d.status}<br>${d.name}`); infoWindow.open(crMap, m); });
        m.addListener("mouseout", () => infoWindow.close());
        markers[mId] = m;
      } else {
        markers[mId].setPosition({ lat: d.lat, lng: d.lng });
        markers[mId].setIcon(iconObj);
      }
    });

    // Remove old ones
    Object.keys(markers).forEach(k => {
      if (!currentList.has(k) && !k.startsWith('inc_')) {
        markers[k].setMap(null);
        delete markers[k];
      }
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
        if (inc.lat && inc.lng) {
          const mId = 'inc_' + inc.id;
          if (!markers[mId]) {
            const m = new google.maps.Marker({ position: { lat: inc.lat, lng: inc.lng }, map: crMap, icon: getGoogleIcon('incident', '#ef4444') });
            m.addListener("mouseover", () => { infoWindow.setContent(`<b>Incident</b><br>${inc.condition}`); infoWindow.open(crMap, m); });
            m.addListener("mouseout", () => infoWindow.close());
            markers[mId] = m;
          } else {
            markers[mId].setPosition({ lat: inc.lat, lng: inc.lng });
          }
        }
      });
    }
  }
}

function panToIncident(driverId) {
  let mId = 'd_' + driverId;
  if (markers[mId] && crMap) {
    crMap.panTo(markers[mId].getPosition()); crMap.setZoom(16);
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
      if (inc.status === 'Patient Delivered' || inc.status === 'Dispatched') return; // Dead task or waiting for driver

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
      if (dist > 0.0005) {
        drv.lat += diffLat * 0.1;
        drv.lng += diffLng * 0.1;
        changed = true;
      }
    });

    if (changed) {
      setData('ra_zones', zs); // Sync to storage
      if (currentRole === 'admin') renderControlRoom();
      // If we are currently driver or hospital, try to re-read and adjust lines? 
      // For prototype just let local storage trigger map redraws in interval if needed
    }
  }, 1000); // 1 tick per sec
}


// --- DRIVER ---
function initDrvMap() {
  const city = localStorage.getItem('ra_city') || 'Delhi';
  const center = city === 'Delhi' ? { lat: 28.6304, lng: 77.2177 } : { lat: 13.1005, lng: 77.5963 };
  drvMap = new google.maps.Map(document.getElementById('driver-map'), {
    center: center,
    zoom: 12,
    styles: getMapThemeStyles(),
    disableDefaultUI: true
  });
  if (!window.infoWindow) window.infoWindow = new google.maps.InfoWindow();
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

  document.getElementById('driver-map-section').classList.remove('hidden');
  if (drvMap) {
    if (!window.drvMarkersObj) window.drvMarkersObj = {};

    if (!window.drvMarkersObj.mYouIdle) {
      window.drvMarkersObj.mYouIdle = new google.maps.Marker({ position: { lat: drv.lat, lng: drv.lng }, map: drvMap, icon: getGoogleIcon('ambulance', '#eab308') });
      window.drvMarkersObj.mYouIdle.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Ambulance (You)</b><br>${drv.name}`); window.infoWindow.open(drvMap, window.drvMarkersObj.mYouIdle); });
      window.drvMarkersObj.mYouIdle.addListener("mouseout", () => window.infoWindow.close());
      setTimeout(() => { google.maps.event.trigger(drvMap, 'resize'); drvMap.setCenter({ lat: drv.lat, lng: drv.lng }); }, 300);
    } else {
      window.drvMarkersObj.mYouIdle.setPosition({ lat: drv.lat, lng: drv.lng });
    }
  }

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
      if (window.drvMarkersObj && window.drvMarkersObj.mYouIdle) {
        window.drvMarkersObj.mYouIdle.setMap(null);
        delete window.drvMarkersObj.mYouIdle;
      }
      let targetLat = inc.status === 'En Route' ? hsp.lat : inc.lat;
      let targetLng = inc.status === 'En Route' ? hsp.lng : inc.lng;

      if (!window.drvMarkersObj || !window.drvMarkersObj.mYou) {
        if (!window.drvMarkersObj) window.drvMarkersObj = {};
        window.drvMarkersObj.mPatient = new google.maps.Marker({ position: { lat: inc.lat, lng: inc.lng }, map: drvMap, icon: getGoogleIcon('incident', '#ef4444') });
        window.drvMarkersObj.mPatient.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Patient Location</b><br>${inc.pname}`); window.infoWindow.open(drvMap, window.drvMarkersObj.mPatient); });
        window.drvMarkersObj.mPatient.addListener("mouseout", () => window.infoWindow.close());

        window.drvMarkersObj.mHosp = new google.maps.Marker({ position: { lat: hsp.lat, lng: hsp.lng }, map: drvMap, icon: getGoogleIcon('hospital', '#22c55e') });
        window.drvMarkersObj.mHosp.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Hospital</b><br>${hsp.name}`); window.infoWindow.open(drvMap, window.drvMarkersObj.mHosp); });
        window.drvMarkersObj.mHosp.addListener("mouseout", () => window.infoWindow.close());

        window.drvMarkersObj.mYou = new google.maps.Marker({ position: { lat: drv.lat, lng: drv.lng }, map: drvMap, icon: getGoogleIcon('ambulance', '#eab308') });
        window.drvMarkersObj.mYou.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Ambulance (You)</b><br>${drv.name}`); window.infoWindow.open(drvMap, window.drvMarkersObj.mYou); });
        window.drvMarkersObj.mYou.addListener("mouseout", () => window.infoWindow.close());

        let lineColor = inc.status === 'En Route' ? '#f59e0b' : '#3b82f6';
        window.drvPolyline = new google.maps.Polyline({
          path: [{ lat: drv.lat, lng: drv.lng }, { lat: targetLat, lng: targetLng }],
          geodesic: true, strokeColor: lineColor, strokeOpacity: 1.0, strokeWeight: 4
        });
        window.drvPolyline.setMap(drvMap);
        setTimeout(() => { google.maps.event.trigger(drvMap, "resize"); drvMap.setCenter({ lat: targetLat, lng: targetLng }); }, 200);
      } else {
        window.drvMarkersObj.mPatient.setPosition({ lat: inc.lat, lng: inc.lng });
        window.drvMarkersObj.mHosp.setPosition({ lat: hsp.lat, lng: hsp.lng });
        window.drvMarkersObj.mYou.setPosition({ lat: drv.lat, lng: drv.lng });

        let lineColor = inc.status === 'En Route' ? '#f59e0b' : '#3b82f6';
        window.drvPolyline.setOptions({ strokeColor: lineColor });
        window.drvPolyline.setPath([{ lat: drv.lat, lng: drv.lng }, { lat: targetLat, lng: targetLng }]);
      }

      const distKm = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(drv.lat, drv.lng), new google.maps.LatLng(targetLat, targetLng)) / 1000).toFixed(1);
      if (!window.simulatingDriver) {
        document.getElementById('dt-eta').innerText = `${distKm} km remaining to target`;
      }

      if (inc.hospReady) {
        let hrBadge = document.getElementById('driver-hosp-ready');
        if (!hrBadge) {
          hrBadge = document.createElement('div');
          hrBadge.id = 'driver-hosp-ready';
          hrBadge.innerHTML = '<span class="badge badge-green" style="font-size:1rem; margin-top:15px; display:inline-block;"><i class="fa-solid fa-check-double"></i> DESTINATION HOSPITAL TEAM IS WAITING READY</span>';
          document.getElementById('driver-map-section').appendChild(hrBadge);
        }
      } else {
        let hrBadge = document.getElementById('driver-hosp-ready');
        if (hrBadge) hrBadge.remove();
      }
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
    inc.status = 'Accepted';
    setData('ra_incidents', incs);

    if (drvMap) {
      startDriverSimulation(inc.id, currentUserId);
    }
  }
  showToast("Dispatch Accepted! Navigating...", "success");
}

function startDriverSimulation(incId, drvId) {
  if (window.simulatingDriver) clearInterval(window.simulatingDriver);

  window.simulatingDriver = setInterval(() => {
    const inc = getData('ra_incidents').find(i => i.id === incId);
    const zs = getData('ra_zones');
    const drv = zs[inc.city].drivers.find(d => d.id === drvId);
    const hsp = [...DELHI_HOSPITALS, ...BLR_HOSPITALS].find(h => h.id === inc.hospitalId) || zs[inc.city].hospitals.find(h => h.id === inc.hospitalId);

    if (!inc || !drv || !hsp) return;

    let targetLat = inc.lat; let targetLng = inc.lng;
    if (inc.status === 'En Route') { targetLat = hsp.lat; targetLng = hsp.lng; }
    if (inc.status === 'Patient Delivered') { clearInterval(window.simulatingDriver); window.simulatingDriver = null; return; }

    const start = new google.maps.LatLng(drv.lat, drv.lng);
    const end = new google.maps.LatLng(targetLat, targetLng);
    const dist = google.maps.geometry.spherical.computeDistanceBetween(start, end);

    if (dist > 50) {
      // Move
      const fraction = 100 / dist; // 100 meters per tick
      const newPos = google.maps.geometry.spherical.interpolate(start, end, fraction);
      drv.lat = newPos.lat(); drv.lng = newPos.lng();
      setData('ra_zones', zs);

      // Update ETA string explicitly
      const etaMins = Math.max(1, Math.floor((dist / 1000) * 1.5)); // rough ETA logic
      document.getElementById('dt-eta').innerText = `ETA: ${etaMins} mins (${(dist / 1000).toFixed(1)} km)`;
      drvMap.panTo(newPos);
    } else {
      // Reached milestone
      if (inc.status === 'Accepted') {
        updateDriverStatus(1); // Set to Arrived at Location
        showToast("Reached Patient. Ready to transport.", "success");
      } else if (inc.status === 'En Route') {
        updateDriverStatus(3); // Set to Delivered
      }
    }
  }, 1000);
}

function closeCompletionModal() {
  document.getElementById('driver-completion-modal').classList.add('hidden');
  document.getElementById('driver-map-section').classList.add('hidden');
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
    document.getElementById('dt-btn-1').classList.add('hidden');

    document.getElementById('dc-time').innerText = "14m 32s";
    document.getElementById('driver-completion-modal').classList.remove('hidden');

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

  const noNotifEl = document.getElementById('h-no-notif');
  const incomingBoxEl = document.getElementById('h-incoming-box');
  const hologramBtns = document.getElementById('hologram-btns');
  const mapSection = document.getElementById('hospital-map-section');
  const checkList = document.getElementById('h-checklist');

  if (!inc || inc.status === 'Patient Delivered') {
    incomingBoxEl.classList.add('hidden');
    mapSection.classList.add('hidden');
    if (noNotifEl) noNotifEl.classList.remove('hidden');
    return;
  }

  // Active incident exists
  if (noNotifEl) noNotifEl.classList.add('hidden');
  incomingBoxEl.classList.remove('hidden');

  document.getElementById('hi-cond').innerText = inc.condition;
  document.getElementById('hi-driver').innerText = inc.driverName;

  if (inc.status === 'Dispatched') {
    mapSection.classList.add('hidden');
    hologramBtns.classList.remove('hidden');
    document.getElementById('hi-eta').innerText = inc.etaStr || "10 mins";
  } else {
    hologramBtns.classList.add('hidden');
    checkList.classList.remove('hidden');
    mapSection.classList.remove('hidden');

    if (!window.hospMap) {
      window.hospMap = new google.maps.Map(document.getElementById('hospital-tracking-map'), {
        center: { lat: 28.6304, lng: 77.2177 },
        zoom: 12,
        styles: getMapThemeStyles(),
        disableDefaultUI: true
      });
      if (!window.infoWindow) window.infoWindow = new google.maps.InfoWindow();
      setTimeout(() => {
        google.maps.event.trigger(window.hospMap, "resize");
        window.hospMap.setCenter({ lat: inc.lat, lng: inc.lng });
        window.hospMap.setZoom(14);
        if (window.hM) window.hM.setMap(null);
        window.hM = new google.maps.Marker({ position: { lat: inc.lat, lng: inc.lng }, map: window.hospMap, icon: getGoogleIcon('incident', '#ef4444') });
        window.hM.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Injured Location</b><br>${inc.pname}`); window.infoWindow.open(window.hospMap, window.hM); });
        window.hM.addListener("mouseout", () => window.infoWindow.close());
      }, 300);
    }

    const z = getData('ra_zones');
    const drv = z[inc.city]?.drivers.find(d => d.id === inc.driverId);
    if (drv) {
      if (window.hM1) window.hM1.setMap(null);
      if (window.hM2) window.hM2.setMap(null);

      let targetLat = drv.lat; let targetLng = drv.lng;
      window.hM1 = new google.maps.Marker({ position: { lat: targetLat, lng: targetLng }, map: window.hospMap, icon: getGoogleIcon('ambulance', '#eab308') });
      window.hM1.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Ambulance</b><br>${drv.name}`); window.infoWindow.open(window.hospMap, window.hM1); });
      window.hM1.addListener("mouseout", () => window.infoWindow.close());

      const hsppool = [...DELHI_HOSPITALS, ...BLR_HOSPITALS];
      const hsp = z.Delhi.hospitals.find(x => x.id === currentUserId) || z.Bengaluru.hospitals.find(x => x.id === currentUserId) || hsppool.find(x => x.id === currentUserId);
      if (hsp) {
        window.hM2 = new google.maps.Marker({ position: { lat: hsp.lat, lng: hsp.lng }, map: window.hospMap, icon: getGoogleIcon('hospital', '#22c55e') });
        window.hM2.addListener("mouseover", () => { window.infoWindow.setContent(`<b>Hospital (You)</b><br>${hsp.name}`); window.infoWindow.open(window.hospMap, window.hM2); });
        window.hM2.addListener("mouseout", () => window.infoWindow.close());
      }

      let pathLineColor = inc.status === 'Accepted' ? '#f59e0b' : '#3b82f6';
      let targetL = inc.status === 'Accepted' ? inc.lat : (hsp ? hsp.lat : inc.lat);
      let targetLn = inc.status === 'Accepted' ? inc.lng : (hsp ? hsp.lng : inc.lng);

      if (!window.hPolyline) {
        window.hPolyline = new google.maps.Polyline({
          path: [{ lat: drv.lat, lng: drv.lng }, { lat: targetL, lng: targetLn }],
          geodesic: true, strokeColor: pathLineColor, strokeOpacity: 1.0, strokeWeight: 4
        });
        window.hPolyline.setMap(window.hospMap);
      } else {
        window.hPolyline.setOptions({ strokeColor: pathLineColor });
        window.hPolyline.setPath([{ lat: drv.lat, lng: drv.lng }, { lat: targetL, lng: targetLn }]);
      }

      const diffLat = hsp ? (hsp.lat - drv.lat) : 0;
      const diffLng = hsp ? (hsp.lng - drv.lng) : 0;
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
    window.hospMap = new google.maps.Map(document.getElementById('hospital-tracking-map'), {
      center: { lat: 28.6304, lng: 77.2177 },
      zoom: 12,
      styles: getMapThemeStyles(),
      disableDefaultUI: true
    });
    if (!window.infoWindow) window.infoWindow = new google.maps.InfoWindow();
  }

  const disps = getData('ra_dispatches');
  const myDisp = disps[currentUserId];
  if (myDisp) {
    setTimeout(() => {
      google.maps.event.trigger(window.hospMap, "resize");
      window.hospMap.setCenter({ lat: myDisp.lat, lng: myDisp.lng });
      window.hospMap.setZoom(14);
      if (window.hM) window.hM.setMap(null);
      window.hM = new google.maps.Marker({ position: { lat: myDisp.lat, lng: myDisp.lng }, map: window.hospMap, icon: getGoogleIcon('incident', '#ef4444') });
    }, 300);
  }
  showToast("Incoming transmission accepted. Patient localized.", "success");
}

function checkPreps() { }

function notifyTeamReady() {
  const disps = getData('ra_dispatches');
  const myDisp = disps[currentUserId];
  if (!myDisp) return;

  const incs = getData('ra_incidents');
  const inc = incs.find(i => i.id === myDisp.id);
  if (inc) {
    inc.hospReady = true;
    setData('ra_incidents', incs);
    showToast("Ambulance notified that hospital team is ready!", "success");
    const btn = document.getElementById('btn-team-ready');
    if (btn) {
      btn.innerText = "TEAM IS READY (NOTIFIED)";
      btn.classList.replace('btn-primary', 'btn-success');
      btn.disabled = true;
    }
  }
}

// --- INITIALIZE ---
// --- THEME ---
function applyStoredTheme() {
  const theme = localStorage.getItem('ra_theme') || 'dark';
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    const icon = document.getElementById('theme-icon');
    if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  const newTheme = isLight ? 'light' : 'dark';
  localStorage.setItem('ra_theme', newTheme);

  const icon = document.getElementById('theme-icon');
  if (icon) {
    if (isLight) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    else { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
  }

  const styles = getMapThemeStyles();
  if (crMap) crMap.setOptions({ styles: styles });
  if (drvMap) drvMap.setOptions({ styles: styles });
  if (window.hospMap) window.hospMap.setOptions({ styles: styles });
}

window.addEventListener('storage', (e) => {
  if (currentRole === 'admin') renderControlRoom();
  if (currentRole === 'driver') { renderDriver(); checkDriverDispatch(); }
  if (currentRole === 'hospital') { renderHospital(); checkHospitalDispatch(); }
});

window.onload = () => {
  applyStoredTheme();
  initData();
  checkRoute();
};
