let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener('click',() => {
    document.getElementsByClassName("text")[0].textContent = "버튼이 클릭되었습니다!";
    console.log("Button clicked!");
});
