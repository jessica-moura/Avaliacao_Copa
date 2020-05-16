import CopaView from "./view/CopaView";

let view = new CopaView();


window.onload = () => view.renderizarTabelaDeTimes();

function invocar(){

    let invocart = view.renderizarCards();

    return invocart;

}

invocar();