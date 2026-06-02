
function abrirConvite(){document.getElementById('cover').style.display='none';document.getElementById('invite').classList.remove('hidden');}
function abrirPresentes(){document.getElementById('presentes').classList.remove('hidden');}
function abrirDress(){document.getElementById('dress').classList.remove('hidden');}
function fechar(){document.querySelectorAll('.modal').forEach(m=>m.classList.add('hidden'));}
function copiarPix(){navigator.clipboard.writeText('456.713.048-06');alert('Pix copiado!');}
