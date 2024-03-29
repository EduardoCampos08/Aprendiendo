import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta ={
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','jamon'],
            calorias: 400
        }
        return(

            <React.Fragment>
                <h1>{'Receta:'+receta.nombre}</h1>
                <h3>{'Calorias:' + receta.calorias}</h3>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i)=>{
                            console.log(ingrediente);
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                
                <hr/> 
                
                
            </React.Fragment>
            
        )
    }
}

export default MiComponente;