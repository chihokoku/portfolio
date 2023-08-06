'use scrict'

let img_src = new Array("picture/IMG_5857.jpeg","image_67234561.JPG","picture/image_6483441.JPG","picture/IMG_5859.jpeg");
let num = -1;

slideshow_timer();

function slideshow_timer(){
    if(num == 3){
        num = 0;
    }else if(num == 0){
        num++;
    }else{
        num++;
    }
    document.getElementById("img").src = img_src[num];
    setTimeout("slideshow_timer()",4000);
};
