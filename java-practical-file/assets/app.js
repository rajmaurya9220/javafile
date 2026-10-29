(function(){
var P=window.PROFILE||{},B=document.body,EXT=['png'],SHOTS='../../output/';
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
document.querySelectorAll('[data-profile]').forEach(function(el){var v=P[el.getAttribute('data-profile')];if(v){el.textContent=v}else{var r=el.closest('[data-row]');if(r)r.hidden=true}});
function probe(base,ok,fail){var i=0;(function next(){if(i>=EXT.length)return fail();var url=base+'.'+EXT[i++],img=new Image();img.onload=function(){ok(url)};img.onerror=next;img.src=url})()}
var rows=document.querySelectorAll('.row[data-class]');
if(rows.length){var done=0,pr=document.getElementById('progress');function upd(){if(pr)pr.textContent=done+' of '+rows.length+' outputs added.'}upd();
rows.forEach(function(r){probe(SHOTS+r.dataset.shot,function(){done++;upd()},function(){})});
var f=document.getElementById('filter');if(f)f.addEventListener('input',function(){var q=f.value.trim().toLowerCase();rows.forEach(function(r){r.hidden=!!q&&r.dataset.text.indexOf(q)<0})})}
})();
