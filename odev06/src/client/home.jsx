import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
                <h2>Quiz Oyunu</h2>
                <p className="welcome-text">
                    Quiz oyununa hoş geldiniz. Bu oyunda, 4 şıktan oluşan bir dizi soru soracağız.
                    Şıklardan yalnızca biri doğrudur. Eğer sorulardan birini yanlış cevaplarsan, yenilirsin!
                    Oyunu kazanmak istiyorsan tamamını doğru cevaplamak zorundasın :)
                </p>
                <div className="action">
                    <Link to={"/match"} className="play">Oyna</Link>
                </div>
            </div>
        );
    }
}

