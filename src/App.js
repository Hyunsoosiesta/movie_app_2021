import React from "react";
import { HashRouter, Route } from "react-router-dom";
// BrowserRouter도 가능한데, github page에서 관리하기가 힘듦
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
// import {About as Potato} from "./routes/About" 이라고 하면 Route의  component={Potato}라고 적을 수 있다.
import Navigation from "./components/Navigation"


// path로 가면 component로 이동함
// path="/"가 보이면 /먼저 확인하고 + "/about"을 확인해서 두 내용이 겹칠 수 있다.
// 그래서 exact={true}를 쓰면 this page (no including any other pages)를 내포함

// BrowserRouter도 쓸 수 있지만, github page에서 관리 힘듦

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />

    </HashRouter>
  )
}

export default App;