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
// function loadFile(input) {
//     let file = input.files[0]; // 선택파일 가져오기

//     let newImage = document.createElement("img"); //새 이미지 태그 생성

//     //이미지 source 가져오기
//     newImage.src = URL.createObjectURL(file);
//     newImage.style.width = "100%"; //div에 꽉차게 넣으려고
//     newImage.style.height = "100%";
//     newImage.style.objectFit = "cover"; // div에 넘치지 않고 들어가게

//     //이미지를 image-show div에 추가
//     let container = document.getElementById('image-show');
//     container.appendChild(newImage);
// }