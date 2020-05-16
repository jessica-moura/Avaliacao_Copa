import copaController from "../controller/CopaController";

export default class CopaView {

    constructor() {
        this.copaCtrl = new copaController();
    }

    renderizarTabelaDeTimes() {
        let times = this.copaCtrl.recuperarTimes();

        let cabecalho = this.criarCabecalhoDaTabelaDeTimes();
        let corpo = this.criarCorpoDaTabelaDeTimes(times);

        let tabela = `<table>${cabecalho}${corpo}<table>`;


        document.getElementById('visualizacaoTimes').innerHTML = tabela;


    }



    criarCabecalhoDaTabelaDeTimes() {
        let cabecalho = `
            <thead>
                <tr>
                    <th>Seleção</th>
                    <th>Ano</th>
                    <th>Técnico</th>
                    <th>Derrotado</th>
                </tr>
            </thead>
        `;

        return cabecalho;
    }

    criarCorpoDaTabelaDeTimes(times) {
        let corpo = '';
        times.forEach(time => {
            let timeStr = `
                <tr>
                    <td>${time.nome_time}</td>
                    <td>${time.ano}</td>
                    <td>${time.nome_tecnico}</td>
                    <td>${time.derrotado}</td>
                </tr>
            `;

            corpo += timeStr;
        });

        let tbody = `<tbody>${corpo}</tbody>`;
        return tbody;
    }

   

    renderizarCards(){
        let times = this.copaCtrl.recuperarTimes();
        
        let lista = this.criarCard(times);

        let card  = lista;

        document.getElementById('cardsTimes').innerHTML = card;
    }

    criarCard(times){
        let lista = '';
        
        times.forEach(time => {
            let timeStr = `
                <div id="cards">
                    <span>Nome_Time: ${time.nome_time}</span>
                    <span>Ano: ${time.ano}</span>
                    <span>Nome_Técnico: ${time.nome_tecnico}</span>
                    <span>Time_Derrotado: ${time.nome_time_derrotafn}</span>
                </div>
            `;

            lista += timeStr;
        });

        
        return lista;
    }
}
