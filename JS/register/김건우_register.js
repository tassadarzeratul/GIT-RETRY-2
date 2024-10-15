// 팝업 사이즈
// function showPopup() { 
//     window.open("registerpop.html", "a", "width=450, height=450, top=200, left=400"); 
// }

// 

import React, {useState} from "react";
function AddDynamicInput(){
    const [val, setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleChange=(onChangeValue,i)=>{
        const inputdata=[...val]
        inputdata[i]=onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete=(i)=>{
        const deleteVal=[...val]
        deleteVal.splice(i)
        setVal(deleteVal)
    }
    console.log(val,"data-")
return(
    <>
    <button onClick={()=>handleAdd()}>Add</button>
        {val.map((data,i)=>{
            return(
                <div>
                    <input onChange={e=>handleChange(e,i)} />
                    <button onClick={()=>handleDelete(i)}>x</button>
                </div>
            )
        })}
    </>
    )
}

// 

const registerTheme = document.getElementsByClassName('theme');
const registerDetails = document.getElementsByClassName('details');
const registerBt = document.getElementsByClassName('button');

const registerPopBtn = () => {
    let isValid = true; 

    if (registerTheme.value.length < 1 || registerDetails.value.length < 1 ) {
        registerBt.style.backgroundColor = 'rgb(252, 146, 146)';
        registerBt.disabled = true;
        isValid = false;
    } else if (isValid) {
        registerBt.style.backgroundColor = "#0095F6";
        registerBt.disabled = false;
    }
}

const joinToMain = () => {
    location.replace('../../HTML/mainpage/main.html');
}

// 로그인 버튼 클릭
registerBt.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 동작 방지
    registerPopBtn(); // 입력검사 호출
    if (!registerBt.disabled) { // 버튼이 활성화된 경우에만 이동
        registerPopBtn();
    }
});

// 각 입력 필드에서 입력이 변경될 때마다 join_user 호출
registerTheme.addEventListener('input', registerPopBtn);
registerDetails.addEventListener('input', registerPopBtn);