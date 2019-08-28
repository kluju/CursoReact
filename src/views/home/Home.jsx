import React, { Component } from 'react';
import Table from '../../components/table/Table';
import Thead from '../../components/table/Thead';
import Tr from '../../components/table/Tr';
import Th from '../../components/table/Th';
import Td from '../../components/table/Td';
import Tbody from '../../components/table/Tbody';
import { getAll } from '../../service/hero.service';
import './Home.css';
import Content from '../../components/Content';
import H2 from '../../components/H2';

/**
 * Componente basado en clase, utilizado como vista en una aplicacion
 * 
 * @version 1.0.0
 * @author Claudio Rojas <claudio.dcv(a)gmail.com>
 */
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_input: '',
            password: '*****',
            tarea: '',
            lista: getAll(),
        };
    }

    /**
     * Metodo generico manejador de evento cambio para inputs
     * @param {HTMLElement} event - evento default al realizar un cambio de estado en un elemento input
     * @returns {undefined}
     */
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    
    /**
     * Metodo manejador de evento click para boton que agrega tareas al array lista
     * @returns {undefined}
     */
    
    changeState = (element,type) => {
        const { lista } = this.state;
        const listaAux = [];
        
        if(type == "anillo"){
        lista.map((elementL)=>{
                if(element === elementL ){
                    element.anillo = true;
                }
                elementL.anillo2 = true;
        });
        }else{
            var i = lista.indexOf( element );
            if ( i !== -1 ) {
                lista.splice( i, 1 );
            }
            lista.push(element);
            lista.map((elementL)=>{
                if(element === elementL ){
                    element.kill = true;
                }
        });
        }
        
        //lista = listaAux;
        this.setState({
            lista,
            tarea: ''
        });
    }
    handleAddTask = () => {
        const { tarea, lista } = this.state;
        lista.push(tarea);
        
        this.setState({
            lista,
            tarea: ''
        });
    }
    addClass  = (element) => {
        const anillo = element.anillo === true ? "character-row anillo":"character-row";
        const kill = element.kill === true ? "kill":"";
        return `${anillo} ${kill}`;
    }
    render() {
        const { parametroEjemplo } = this.props;
        const { search_input, lista } = this.state;
        
        return (
            <Content className = "index">
                <H2>Fellowship of the Ring</H2>
                <Content className="container">
                    <Content >
                        <input value={search_input} onChange={this.handleOnChange} name="search_input" />
                    </Content>
                    <Table class_name="characters-table">
                        <Thead>
                            <Tr className="character-row">
                                
                                <Th>Name</Th>
                                <Th>Race</Th>
                                <Th>Age</Th>
                                <Th>Weapon</Th>
                                <Th></Th> 
                                
                            </Tr>
                        </Thead>
                        <Tbody>
                        {lista.map((element)=>(
                           
                            <Tr className={this.addClass(element) } key = {element.id}>
                                <Td>{element.name}</Td>
                                <Td>{element.race}</Td>
                                <Td>{element.age}</Td>
                                <Td>{element.weapon}</Td>
                                <Td>
                                    <Content className="controls">
                                        <Content><a onClick={() => {
                                            this.changeState(element,"kill");
                                        }}>
                                        â˜  Kill
                                        </a></Content>
                                        <Content  ><a className={element.anillo2 === true ? "anillo2":"" } onClick={() => {
                                            this.changeState(element,"anillo");
                                            //this.setState({ name: "James"});
                                        }}>
                                        ðŸ’ Use Ring
                                        </a></Content>

                                    </Content>
                                </Td>
                            </Tr>
                        ))}
                        </Tbody>
                    </Table>
                </Content>
            </Content>
        );
    }
}

export default Home;