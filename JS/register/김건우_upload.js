function setThumbnail(event) {
    for (var image of event.target.files) {
        var reader = new FileReader();

        reader.onload = function (event) {
            var img = document.createElement("img");
            img.setAttribute("src", event.target.result);
            document.querySelector("div#image_container").appendChild(img);
        };
        console.log(image);
        reader.readAsDataURL(image);
    }
}

const textarea = useRef();

const handleResizeHeight = () => {
  textarea.current.style.height = 'auto'; //height 초기화
  textarea.current.style.height = textarea.current.scrollHeight + 'px';
};


// 추가
function imgSize(which){
    var width = eval("document."+which+".width");
    var height = eval("document."+which+".height");
    var temp = 0; 
    var max_width= 600;   // 이미지의 가로 최대 크기    
    var max_height = 400; // 이미지의 세로 최대 크기
    
    if ( width > max_width ) {  // 이미지가 600보다 크다면 너비를 600으로 맞우고 비율에 맞춰 세로값을 변경한다.      
        height = height/(width / max_width);
        eval("document."+which+".width = max_width");     
        eval("document."+which+".height = height");
        width = max_width;     
    }
 
    if( height > max_height ) {
        width = width/(height / max_height);
        eval(document.getElementById(which).width = width);
        eval(document.getElementById(which).height = max_height);
    }
}