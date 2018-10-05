function share(url){
  const win = window.open(`${url}${encodeURIComponent(window.location.href)}`, '_blank');
  win.focus();
}
