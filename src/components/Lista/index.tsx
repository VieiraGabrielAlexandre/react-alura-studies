import React from "react";

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '20:00:00'
    }, {
        tarefa : 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '00:30:00'
    }]  
    return (
        <aside>
            <ul>
                <h2>Lista de estudos</h2>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>
                            {item.tarefa}
                        </h3>
                        <span>
                            {item.tempo}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;