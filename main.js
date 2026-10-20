(function(){var S=window.SITE||{};
document.querySelectorAll('[data-email]').forEach(function(a){a.href='mailto:'+S.email;if(a.hasAttribute('data-show'))a.textContent=S.email});
var wa=(S.whatsapp||'').replace(/\D/g,'');
document.querySelectorAll('[data-wa]').forEach(function(a){if(wa){a.href='https://wa.me/'+wa+'?text='+encodeURIComponent('Hello Mantsopa Financial Services, I would like to enquire about your services.');a.target='_blank';a.rel='noopener'}else a.hidden=true});
document.querySelectorAll('[data-nowa]').forEach(function(e){e.hidden=!!wa});
document.querySelectorAll('[data-area]').forEach(function(e){e.textContent=S.area});
var b=document.querySelector('.mb'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var f=document.getElementById('qf');if(!f)return;
var sel=f.Service,pr=document.getElementById('pay'),m=document.getElementById('msg');
function tog(){var p=/^Payroll/.test(sel.value);pr.hidden=!p;pr.querySelectorAll('input,select').forEach(function(i){i.disabled=!p})}
var q=new URLSearchParams(location.search).get('service');
if(q)Array.from(sel.options).forEach(function(o){if(o.dataset.k===q)sel.value=o.value});
sel.addEventListener('change',tog);tog();
f.addEventListener('submit',async function(e){e.preventDefault();
if(f.website.value)return;
if(!f.checkValidity()){f.reportValidity();m.className='msg err';m.textContent='Please complete the required fields marked with *.';return}
var d=Object.fromEntries(new FormData(f));delete d.website;
var lines=Object.keys(d).filter(function(k){return d[k]}).map(function(k){return k.replace(/_/g,' ')+': '+d[k]}).join('\n');
if(S.formEndpoint){try{var r=await fetch(S.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});
if(r.ok){f.reset();tog();m.className='msg ok';m.textContent='Thank you. Your enquiry has been sent and we will contact you by your preferred method.';return}}catch(x){}
m.className='msg err';m.textContent='Your enquiry could not be sent. Please email us at '+S.email+' or use the WhatsApp button on the Contact page.';return}
location.href='mailto:'+S.email+'?subject='+encodeURIComponent('Quote request: '+d.Service)+'&body='+encodeURIComponent(lines);
m.className='msg info';m.textContent='Your email app should now open with your enquiry filled in. It is only sent once you press Send there. If nothing opened, email us at '+S.email+'.'});
})();
