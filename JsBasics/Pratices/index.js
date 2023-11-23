let count = 0;

const theCount = document.getElementById('count');
const countPlus = document.getElementById('plus');
const countMinus = document.getElementById('minus');

theCount.innerText = count

countPlus.addEventListener("click", () => {
    count++;
    theCount.innerText = count
})
countMinus.addEventListener("click", () => {
    count--;
    theCount.innerText = count
})