import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
            <div>
                <h2>Kart oyunu</h2>
                <p className="welcome-text">
                    Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte kediyi bulamazsan 2. bir şans verilecektir
                </p>
                <div className="action">
                    <Link className="oyna" to={"/game.jsx"}></Link>

                </div>
            </div>
        )
    }
}
