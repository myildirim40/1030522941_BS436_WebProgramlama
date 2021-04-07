import React from "react";
import  ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {Game} from "./game";
import home from "./home";

const notFound = () => {
    return (
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız sayfaya şu anda ulaşılamıyor.
                Lütfen daha sonra tekrar deneyiniz.
            </p>
        </div>
    )
}

class App extends React.Component{

   render() {
       return(
           <HashRouter>
           <Switch>
               <Router exact path='/game' Component={Game}/>
               <Router exact path='/' Component={home}/>
               <Route component={notFound}/>
           </Switch>
           </HashRouter>
       )
   }
}
ReactDOM.render(<App />, document.getElementById("root"));

