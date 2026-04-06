import re

def main():
    path = "app.js"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Replace Icons
    icons_regex = re.compile(r"const iconHospGreen = L\.divIcon.*?\n// Overriding with exact.*?iconHospRed\.options\.html = '[^']*';\n", re.DOTALL)
    
    google_icons = """const darkMapStyle = [{ elementType: "geometry", stylers: [{ color: "#212121" }] },{ elementType: "labels.icon", stylers: [{ visibility: "off" }] },{ elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },{ elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },{ featureType: "administrative", elementType: "geometry", stylers: [{ color: "#757575" }] },{ featureType: "administrative.country", elementType: "labels.text.fill", stylers: [{ color: "#e0e0e0" }] },{ featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#2c2c2c" }] },{ featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }] }];
let infoWindow = null;
function getMapThemeStyles() { return document.body.classList.contains('light-theme') ? [] : darkMapStyle; }
function getGoogleIcon(type, color) {
    let path = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z';
    if (type === 'hospital') path = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 11h-2v2h-2v-2H9v-2h2V9h2v2h2v2z"; 
    else if (type === 'ambulance') path = "M19 7h-3V6a4 4 0 0 0-8 0v1H5c-1.1 0-2 .9-2 2v6h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-4l-3-4z M8 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-6H6V7h6v3zm6 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-3h-4V7h1.5l2.5 3.3V13z";
    else if (type === 'incident') path = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z";
    return { path: path, fillColor: color, fillOpacity: 1, strokeWeight: 1, strokeColor: "white", scale: 1.2, anchor: new google.maps.Point(12, 12) };
}"""
    content = icons_regex.sub(google_icons + "\n", content)

    # 2. initCRMap
    init_cr_regex = re.compile(r"function initCRMap\(\) \{.*?\}\)\.addTo\(crMap\);\n\}", re.DOTALL)
    init_cr_gmaps = """function initCRMap() {
  const city = controlCity;
  const center = city === 'Delhi' ? {lat: 28.6304, lng: 77.2177} : {lat: 13.1005, lng: 77.5963};
  crMap = new google.maps.Map(document.getElementById('cr-map'), {
    center: center,
    zoom: 13,
    styles: getMapThemeStyles(),
    disableDefaultUI: true
  });
  infoWindow = new google.maps.InfoWindow();
}"""
    content = init_cr_regex.sub(init_cr_gmaps, content)

    # 3. renderControlRoom markers
    rcr_markers_regex = re.compile(r"Object\.values\(markers\)\.forEach\(m => crMap\.removeLayer\(m\)\);\n    markers = \{\};\n\n    cityData\.hospitals\.forEach.*?\}\);\n    \}\);", re.DOTALL)
    rcr_markers_gmaps = """Object.values(markers).forEach(m => m.setMap(null));
    markers = {};

    cityData.hospitals.forEach(h => {
       const m = new google.maps.Marker({ position: {lat: h.lat, lng: h.lng}, map: crMap, icon: getGoogleIcon('hospital', h.accepting ? '#22c55e' : '#ef4444'), title: h.name });
       m.addListener("mouseover", () => { infoWindow.setContent(`<b>${h.name}</b><br>Beds: ${h.beds}`); infoWindow.open(crMap, m); });
       m.addListener("mouseout", () => infoWindow.close());
       markers[h.id] = m;
    });

    cityData.drivers.forEach(d => {
       const m = new google.maps.Marker({ position: {lat: d.lat, lng: d.lng}, map: crMap, icon: getGoogleIcon('ambulance', d.status === 'AVAILABLE' ? '#22c55e' : '#eab308'), title: d.amb });
       m.addListener("mouseover", () => { infoWindow.setContent(`<b>${d.amb}</b><br>${d.status}<br>${d.name}`); infoWindow.open(crMap, m); });
       m.addListener("mouseout", () => infoWindow.close());
       markers[d.id] = m;
    });"""
    content = rcr_markers_regex.sub(rcr_markers_gmaps, content)

    # 4. renderControlRoom incident markers
    rcr_inc_regex = re.compile(r"if\(inc\.lat && inc\.lng([^}]*)\) \{\n.*?\}\);\n\n    \}\)", re.DOTALL)
    rcr_inc_gmaps = """if(inc.lat && inc.lng && !markers['inc_'+inc.id]) {
           const m = new google.maps.Marker({ position: {lat: inc.lat, lng: inc.lng}, map: crMap, icon: getGoogleIcon('incident', '#ef4444') });
           m.addListener("mouseover", () => { infoWindow.setContent(`<b>Incident</b><br>${inc.condition}`); infoWindow.open(crMap, m); });
           m.addListener("mouseout", () => infoWindow.close());
           markers['inc_'+inc.id] = m;
        }"""
    # Just string replace for safety
    content = content.replace("""if(inc.lat && inc.lng && !markers['inc_'+inc.id]) {
           const m = L.marker([inc.lat, inc.lng], {icon: iconInc}).bindPopup(`Incident: ${inc.condition}`);
           m.addTo(crMap);
           markers['inc_'+inc.id] = m;
        }""", rcr_inc_gmaps)

    # 4b. panToIncident
    content = content.replace("crMap.flyTo(markers[driverId].getLatLng(), 16);", "crMap.panTo(markers[driverId].getPosition()); crMap.setZoom(16);")
    content = content.replace("markers[driverId].openPopup();", "")

    # 5. Animated startMarkerAnimation changes
    # Remove the global interval completely since we do explicit simulation driver-side, but keep it for control room map
    anim_regex = re.compile(r"const diffLat = targetLat - drv\.lat;\n.*?changed = true;\n         \}", re.DOTALL)
    anim_gmaps = """const diffLat = targetLat - drv.lat;
         const diffLng = targetLng - drv.lng;
         const dist = Math.sqrt(diffLat*diffLat + diffLng*diffLng);
         if (dist > 0.0005) { 
             drv.lat += diffLat * 0.1; 
             drv.lng += diffLng * 0.1;
             changed = true;
         }"""
    content = anim_regex.sub(anim_gmaps, content)
    # Wait, if we rewrite, marker changes location but crMap markers aren't updated live smoothly unless we call renderControlRoom.
    content = content.replace("""setData('ra_zones', zs); // Sync to storage so all browsers/pages update map position natively""", """setData('ra_zones', zs); // Sync to storage
         if (currentRole === 'admin') renderControlRoom();""")

    # 6. initDrvMap
    init_drv_regex = re.compile(r"function initDrvMap\(\) \{.*?\}\)\.addTo\(drvMap\);\n\}", re.DOTALL)
    init_drv_gmaps = """function initDrvMap() {
  const city = localStorage.getItem('ra_city') || 'Delhi';
  const center = city === 'Delhi' ? {lat: 28.6304, lng: 77.2177} : {lat: 13.1005, lng: 77.5963};
  drvMap = new google.maps.Map(document.getElementById('driver-map'), {
    center: center,
    zoom: 12,
    styles: getMapThemeStyles(),
    disableDefaultUI: true
  });
  infoWindow = new google.maps.InfoWindow();
}"""
    content = init_drv_regex.sub(init_drv_gmaps, content)

    # 7. checkDriverDispatch
    drv_disp_regex = re.compile(r"if \(drv && hsp\) \{.*?const distKm = Math\.max\(0\.1, Math\.sqrt\(diffLat\*diffLat \+ diffLng\*diffLng\) \* 111\)\.toFixed\(1\);\n       document\.getElementById\('dt-eta'\)\.innerText = `\$\{distKm\} km remaining to target`;\n     \}", re.DOTALL)
    drv_disp_gmaps = """if (drv && hsp) {
       if (window.drvMarkers) window.drvMarkers.forEach(m => m.setMap(null));
       if (window.drvPolyline) window.drvPolyline.setMap(null);
       
       let targetLat = inc.status === 'En Route' ? hsp.lat : inc.lat;
       let targetLng = inc.status === 'En Route' ? hsp.lng : inc.lng;
       
       const mPatient = new google.maps.Marker({ position: {lat: inc.lat, lng: inc.lng}, map: drvMap, icon: getGoogleIcon('incident', '#ef4444') });
       const mHosp = new google.maps.Marker({ position: {lat: hsp.lat, lng: hsp.lng}, map: drvMap, icon: getGoogleIcon('hospital', '#22c55e') });
       const mYou = new google.maps.Marker({ position: {lat: drv.lat, lng: drv.lng}, map: drvMap, icon: getGoogleIcon('ambulance', '#eab308') });
       window.drvMarkers = [mPatient, mHosp, mYou];
       
       let lineColor = inc.status === 'En Route' ? '#f59e0b' : '#3b82f6';
       window.drvPolyline = new google.maps.Polyline({
          path: [{lat: drv.lat, lng: drv.lng}, {lat: targetLat, lng: targetLng}],
          geodesic: true, strokeColor: lineColor, strokeOpacity: 1.0, strokeWeight: 4
       });
       window.drvPolyline.setMap(drvMap);
       
       const distKm = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(drv.lat, drv.lng), new google.maps.LatLng(targetLat, targetLng)) / 1000).toFixed(1);
       if(!window.simulatingDriver) {
           document.getElementById('dt-eta').innerText = `${distKm} km remaining to target`;
       }
     }"""
    content = drv_disp_regex.sub(drv_disp_gmaps, content)

    # 8. acceptDispatch & simulation
    accept_regex = re.compile(r"if\(inc\) \{.*?showToast\(\"Dispatch Accepted\", \"success\"\);\n\}", re.DOTALL)
    accept_gmaps = """if(inc) {
    inc.status = 'Arrived at Location'; 
    setData('ra_incidents', incs);
    
    if(drvMap) {
      startDriverSimulation(inc.id, currentUserId);
    }
  }
  showToast("Dispatch Accepted! Navigating...", "success");
}

function startDriverSimulation(incId, drvId) {
    if(window.simulatingDriver) clearInterval(window.simulatingDriver);
    
    window.simulatingDriver = setInterval(() => {
       const inc = getData('ra_incidents').find(i => i.id === incId);
       const zs = getData('ra_zones');
       const drv = zs[inc.city].drivers.find(d => d.id === drvId);
       const hsp = [...DELHI_HOSPITALS, ...BLR_HOSPITALS].find(h=>h.id === inc.hospitalId) || zs[inc.city].hospitals.find(h=>h.id === inc.hospitalId);
       
       if (!inc || !drv || !hsp) return;
       
       let targetLat = inc.lat; let targetLng = inc.lng;
       if (inc.status === 'En Route') { targetLat = hsp.lat; targetLng = hsp.lng; }
       if (inc.status === 'Patient Delivered') { clearInterval(window.simulatingDriver); window.simulatingDriver=null; return; }
       
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
           document.getElementById('dt-eta').innerText = `ETA: ${etaMins} mins (${(dist/1000).toFixed(1)} km)`;
           drvMap.panTo(newPos);
       } else {
           // Reached milestone
           if (inc.status === 'Arrived at Location') {
               updateDriverStatus(2); // Set to En Route automatically when reaching patient
               showToast("Reached Patient. En route to Hospital...", "success");
           } else if (inc.status === 'En Route') {
               updateDriverStatus(3); // Set to Delivered
           }
       }
    }, 1000);
}

function closeCompletionModal() {
    document.getElementById('driver-completion-modal').classList.add('hidden');
    document.getElementById('driver-map-section').classList.add('hidden');
}"""
    content = accept_regex.sub(accept_gmaps, content)

    # 9. updateDriverStatus additions
    status_3_regex = re.compile(r"document\.getElementById\('dt-btn-3'\)\.classList\.add\('hidden'\);\n    document\.getElementById\('driver-map-section'\)\.classList\.add\('hidden'\);\n    document\.getElementById\('dt-btn-1'\)\.classList\.add\('hidden'\); // reset buttons", re.DOTALL)
    status_3_gmaps = """document.getElementById('dt-btn-3').classList.add('hidden');
    document.getElementById('dt-btn-1').classList.add('hidden');
    
    document.getElementById('dc-time').innerText = "14m 32s";
    document.getElementById('driver-completion-modal').classList.remove('hidden');"""
    content = status_3_regex.sub(status_3_gmaps, content)

    # 10. ackAlertHospital
    ack_hosp_regex = re.compile(r"if \(\!window\.hospMap\) \{.*?\}\)\.addTo\(window\.hospMap\);\n  \}", re.DOTALL)
    ack_hosp_gmaps = """if (!window.hospMap) {
     window.hospMap = new google.maps.Map(document.getElementById('hospital-tracking-map'), {
        center: {lat: 28.6304, lng: 77.2177},
        zoom: 12,
        styles: getMapThemeStyles(),
        disableDefaultUI: true
     });
     infoWindow = new google.maps.InfoWindow();
  }"""
    content = ack_hosp_regex.sub(ack_hosp_gmaps, content)

    hosp_disp_regex = re.compile(r"window\.hospMap\.invalidateSize\(\).*?\}\), 300\);", re.DOTALL)
    hosp_disp_gmaps = """google.maps.event.trigger(window.hospMap, "resize");
        window.hospMap.setCenter({lat: myDisp.lat, lng: myDisp.lng});
        window.hospMap.setZoom(14);
        if(window.hM) window.hM.setMap(null);
        window.hM = new google.maps.Marker({position: {lat: myDisp.lat, lng: myDisp.lng}, map: window.hospMap, icon: getGoogleIcon('incident', '#ef4444')});
      }, 300);"""
    content = hosp_disp_regex.sub(hosp_disp_gmaps, content)

    # 11. checkHospitalDispatch (amb updates)
    check_hosp_regex = re.compile(r"if \(drv\) \{.*?const distKm", re.DOTALL)
    check_hosp_gmaps = """if (drv) {
        if(window.hM1) window.hM1.setMap(null);
        if(window.hM2) window.hM2.setMap(null);
        
        let targetLat = drv.lat; let targetLng = drv.lng;
        window.hM1 = new google.maps.Marker({position: {lat: targetLat, lng: targetLng}, map: window.hospMap, icon: getGoogleIcon('ambulance', '#eab308')});
        
        const hsp = z.Delhi.hospitals.find(x => x.id === currentUserId) || z.Bengaluru.hospitals.find(x => x.id === currentUserId) || [...DELHI_HOSPITALS, ...BLR_HOSPITALS].find(x => x.id === currentUserId);
        if (hsp) {
           window.hM2 = new google.maps.Marker({position: {lat: hsp.lat, lng: hsp.lng}, map: window.hospMap, icon: getGoogleIcon('hospital', '#22c55e')});
        }
        
        const distKm"""
    content = check_hosp_regex.sub(check_hosp_gmaps, content)

    # 12. toggleTheme (remove tileLayer updates)
    toggle_regex = re.compile(r"const mapTheme = isLight \? 'light_all' : 'dark_all'.*?if\(window\.hospMap\).*?\}\); \}\n\}", re.DOTALL)
    toggle_gmaps = """const styles = getMapThemeStyles();
  if(crMap) crMap.setOptions({styles: styles});
  if(drvMap) drvMap.setOptions({styles: styles});
  if(window.hospMap) window.hospMap.setOptions({styles: styles});
}"""
    content = toggle_regex.sub(toggle_gmaps, content)

    # Save
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    main()
