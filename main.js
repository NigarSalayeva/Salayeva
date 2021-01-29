const banner = document.getElementsByClassName('banner')[0];
const blocks = document.getElementsByClassName ('blocks');
const team = document.getElementsByClassName ('team');
const member = document.getElementsByClassName ('member');
const green = document.getElementsByClassName ('green');
const brown = document.getElementsByClassName ('brown');
const blue = document.getElementsByClassName ('blue');
const nude = document.getElementsByClassName ('nude');

for(var i=1; i<400; i++){
banner.innerHTML += "<div class='blocks'></div>";
blocks[i].style.animationDelay = `${i * 0.05}s`;
}
