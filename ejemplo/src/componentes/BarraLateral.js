import React from 'react';

class BarraLateral extends React.Component{

    render(){
        return(
            //uso del div para crear en cada h1 como en este ejemplo se crea un div para cada h1
            <div className='Barra-Lateral'>
                <h1>Soy una barra lateral</h1>
                <hr/>
            </div>
        )
    }
}

export default BarraLateral;