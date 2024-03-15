const btnEls = document.querySelectorAll('.btn')
// ...
// 반복문
btnEls.forEach(btnEl => {
  // 리스너 추가
  btnEl.addEventListener('click', () => {
    btnEl.classList.add('loading')  
    setTimeout(() => {
      btnEl.classList.remove('loading')  
      // 3초 타이머
    }, 3000)
  })
})

// func을 활용해 작성(공부용)
function addLoadingClass(btnEl) {
  btnEl.classList.add('loading')
  setTimeout(() => {
    btnEl.classList.remove('loading')
  }, 3000)
}