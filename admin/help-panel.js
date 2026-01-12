function toggleHelpPanel(){const p=document.getElementById("helpPanel"),o=document.getElementById("helpOverlay");p.classList.toggle("active");o.classList.toggle("active")}
function showHelpTab(t){document.querySelectorAll(".help-tab").forEach(e=>e.classList.remove("active"));document.querySelectorAll(".help-tab-content").forEach(e=>e.classList.remove("active"));event.target.classList.add("active");document.getElementById("helpTab-"+t).classList.add("active")}
function toggleSettings(){document.getElementById("settingsModal").classList.toggle("active")}
function showStorageInfo(){const k=Object.keys(localStorage).filter(i=>i.startsWith("content-studio"));let s=0;k.forEach(i=>s+=localStorage.getItem(i).length);alert("저장 키: "+k.length+"개, 크기: "+(s/1024).toFixed(2)+" KB")}
function confirmResetAll(){if(confirm("모든 설정이 초기화됩니다")){Object.keys(localStorage).filter(k=>k.startsWith("content-studio")).forEach(k=>localStorage.removeItem(k));location.reload()}}
function saveSettings(){localStorage.setItem("cs-settings",JSON.stringify({auto:document.getElementById("settingAutoSave")?.checked}));if(typeof showToast==="function")showToast("설정 저장됨","success");toggleSettings()}
