let fontScale = 0;

document.getElementById('bt-up-font').addEventListener('click', ()=>{
    fontScale++;
    changeFontScale(fontScale);
});
document.getElementById('bt-down-font').addEventListener('click', ()=>{
    fontScale--;
    changeFontScale(fontScale);
});

function changeFontScale(value) {
    document.documentElement.style.setProperty('--main-font-scale', `${value}px`);
}