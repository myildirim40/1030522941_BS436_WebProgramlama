import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            trueIndex: Math.floor(Math.random()*3),
            hak:2
           
        }
   
    }

function game(element){
    console.log("tıklandı")
    if(element.id=="img"+trueIndex){
        element.setAttribute("src","../img/kedi.jpg");
        document.getElementById("img0").onclick= false;
        document.getElementById("img1").onclick= false;
        document.getElementById("img2").onclick= false;
        msg.innerHTML="TEBRIKLER... Kazandınız.. Yeni oyun için <a href='javascript:;' onclick='location.reload()'>tıklayınız..</a>";
    }
    else{
        element.setAttribute("src","./img/tavsan.jpg")
        this.setState({
            hak=hak-1
        })
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



render(){
    const { kart, durum } = this.state;
    return (
    <div>

        <div class="card my-3 bg-warning text-white text-center" >
            <div class="card-body">
            <h3>Kedi Bulmaca Oyunu</h3>
            </div>

        </div>

            <div class="card text-white bg-secondary " >
                <div class="card-header">Oyun Kuralları
                </div>
                <div class="GameLocal">
              
              <p class="card-text">Aşağıda 3 adet kapalı kart bulunmaktadır.Her kartta farklı resimler vardır.</p>
              
               <p>Oyun kuralına göre ilk tercihte kedi kartı çekilmezse 2. şans verilicektir.</p>
               
            
                </div>
            </div>
        
    

    <img id="img0" class="card-img-top my-5" style="width: 18rem;" src="./img/soru.jpg" onclick="game(this)">
    <img id="img1" class="card-img-top my-5" style="width: 18rem;" src="./img/soru.jpg" onclick="game(this)">
    <img id="img2" class="card-img-top my-5" style="width: 18rem;" src="./img/soru.jpg" onclick="game(this)">
    
        </div>
    </div>



        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));




// https://www.youtube.com/watch?v=sdVaGR_ZoOw
