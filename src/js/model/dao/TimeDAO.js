import Time from '../entity/Time';
import * as db from '../../db/copa.json';

export default class TimeDAO {

    recuperarTodos() {
        let times =
            db.times.map(
                time => new Time(
                    time.nome_time,
                    time.ano,
                    time.nome_tecnico,
                    time.derrotado));

        return times;
    }
}