
function toggleMenu(){ document.querySelector('.nav').classList.toggle('active'); }
document.addEventListener('DOMContentLoaded', function(){
  var search = document.getElementById('searchClassificados');
  if(search){
    search.addEventListener('input', function(){
      var termo = this.value.trim().toLowerCase();
      document.querySelectorAll('.grid-classificados .item').forEach(function(it){
        var txt = it.textContent.toLowerCase();
        it.style.display = txt.includes(termo) ? 'block' : 'none';
      });
    });
  }
});
