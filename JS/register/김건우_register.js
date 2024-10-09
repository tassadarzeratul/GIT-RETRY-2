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