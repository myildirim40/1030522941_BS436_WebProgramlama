var trueIndex= Math.floor(Math.random() * 3);

var hak=2;
console.log(trueIndex);
const msg = document.getElementById("alanId");

function select(element){
    if(element.id=="img"+trueIndex){
        element.setAttribute("src","/img/kedi.jpg");
        document.getElementById("img0").onclick= false;
        document.getElementById("img1").onclick= false;
        document.getElementById("img2").onclick= false;
        msg.innerHTML="TEBRIKLER... Kazandınız.. Yeni oyun için <a href='javascript:;' onclick='location.reload()'>tıklayınız..</a>";
    }
    else{
        element.setAttribute("src","/img/tavsan.jpg")
        hak--;
        if(element.id==element.id){
            document.getElementById(element.id).onclick= false;
        }
        if(hak==0){
            msg.innerHTML="Kaybettiniz... Yeni oyun için <a href='javascript:;' onclick='location.reload()'>tıklayınız..</a>";
            document.getElementById("img0").onclick= false;
            document.getElementById("img1").onclick= false;
            document.getElementById("img2").onclick= false;
        }
    }
}

// https://www.youtube.com/watch?v=sdVaGR_ZoOw
