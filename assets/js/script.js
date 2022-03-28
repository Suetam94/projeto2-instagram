const slider = tns({
    container: '.stories',
    items: 7,
    mouseDrag: true,
    controls: true,
})

const buttons = document.querySelectorAll('.tns-controls button');

buttons.forEach(button => {
    if (button.innerText === 'next') {
        button.innerHTML = "<img src='../assets/img/story/next.svg' alt='next' />";
    } else if (button.innerText === 'prev') {
        button.innerHTML = "<img style='transform: rotate(180deg)' src='../assets/img/story/next.svg' alt='prev' />";
    }
})