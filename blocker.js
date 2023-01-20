//function remove_msg(){
//    document.querySelectorAll('[data-pre-plain-text*="+55 82 8889-4762: "]').forEach(e => e.closest('div[data-testid="msg-container"]').remove());
//}
var numero = "+55 32 8865-0690"
var nome = "Talvez Gui"
var nome2 = "Talvez Guilherme Augusto"
setInterval(function(){
    document.querySelectorAll('[data-pre-plain-text*="'+numero+': "]').forEach(e => e.closest('div[data-testid="msg-container"]').style.display = 'none');
    document.querySelectorAll('[aria-label="'+nome+'"]').forEach(e => e.closest('div[data-testid="msg-container"]').style.display = 'none');
    document.querySelectorAll('[aria-label="'+nome2+'"]').forEach(e => e.closest('div[data-testid="msg-container"]').style.display = 'none');

}, 1000);

//document.addEventListener("DOMContentLoaded", function() {
//    remove_msg();
//    document.querySelectorAll('[data-pre-plain-text*="+55 82 8889-4762: "]').forEach(e => e.closest('div[data-testid="msg-container"]').remove());
//  });