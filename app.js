
const form = document.getElementById('searchForm');
const input = document.getElementById('query');
const results = document.getElementById('results');
const message = document.getElementById('message');

function normalize(value){
  return String(value || '').trim().toUpperCase().replace(/\s+/g,'');
}
function maskDni(dni){
  return dni.slice(0,4) + '****';
}
function certificateCard(c){
  const pdf = c.pdf
    ? `<a class="download" href="${c.pdf}" target="_blank" rel="noopener">Descargar certificado PDF</a>`
    : `<div class="notice">El PDF todavía no ha sido publicado en esta plataforma.</div>`;
  return `
  <article class="card">
    <div class="card-head">
      <div>
        <div class="code">${c.codigo}</div>
        <small>Certificado verificado</small>
      </div>
      <span class="status">✓ ${c.estado}</span>
    </div>
    <div class="card-body">
      <div class="item full"><small>Participante</small><strong>${c.nombre}</strong></div>
      <div class="item"><small>DNI</small><strong>${maskDni(c.dni)}</strong></div>
      <div class="item"><small>Horas</small><strong>${c.horas}</strong></div>
      <div class="item full"><small>Curso</small><strong>${c.curso}</strong></div>
      <div class="item"><small>Fecha de emisión</small><strong>${c.emision}</strong></div>
      <div class="item"><small>Válido hasta</small><strong>${c.vencimiento}</strong></div>
      <div class="item full"><small>Entidad emisora</small><strong>${c.empresa}</strong></div>
      <div class="item full"><small>Instructor</small><strong>${c.instructor}</strong></div>
      <div class="item full">${pdf}</div>
    </div>
  </article>`;
}
function search(value, updateUrl=true){
  const q = normalize(value);
  results.innerHTML = '';
  message.textContent = '';
  if(!q){ message.textContent = 'Ingresa un código o DNI.'; return; }

  const matches = window.CERTIFICADOS.filter(c =>
    normalize(c.codigo) === q || normalize(c.dni) === q
  );

  if(!matches.length){
    message.textContent = 'No se encontró ningún certificado con esos datos.';
    if(updateUrl) history.replaceState({},'',location.pathname);
    return;
  }
  results.innerHTML = matches.map(certificateCard).join('');
  if(updateUrl && matches.length === 1){
    const url = new URL(location.href);
    url.searchParams.set('codigo', matches[0].codigo);
    history.replaceState({},'',url);
  }
}
form.addEventListener('submit', e => { e.preventDefault(); search(input.value); });

const params = new URLSearchParams(location.search);
const initial = params.get('codigo') || params.get('dni');
if(initial){ input.value = initial; search(initial,false); }
