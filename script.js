
function openInvite(){
 document.getElementById('cover').classList.add('open');
 setTimeout(()=>{
  document.getElementById('cover').style.display='none';
  document.getElementById('invite').classList.remove('hidden');
 },1800);
}
function show(id){document.getElementById(id).classList.remove('hidden');}
function hideAll(){document.querySelectorAll('.modal').forEach(x=>x.classList.add('hidden'));}
function copyPix(){navigator.clipboard.writeText('456.713.048-06');alert('Pix copiado!');}
