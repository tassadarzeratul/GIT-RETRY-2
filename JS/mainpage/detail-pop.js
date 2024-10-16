function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }else if(number === 0) {
        number = parseInt(number) === 0;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }


  document.getElementById("myButton").onclick = function() {
    const userConfirmed = window.confirm("결제하시겠습니까?");
    if (userConfirmed) {
        alert("결제가 완료되었습니다.");
    } else {
        alert("결제가 취소되었습니다.");
    }
};