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
    handleAddTask = () => {
        const { tarea, lista } = this.state;
        lista.push(tarea);
        
        this.setState({
            lista,
            tarea: ''
        });
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
                                <Th>
                                    
                                </Th> 
                                
                            </Tr>
                        </Thead>
                        <Tbody>
                        {lista.map((element)=>(
                            <Tr className="character-row" key = {element.id}>
                                <Td>{element.name}</Td>
                                <Td>{element.race}</Td>
                                <Td>{element.age}</Td>
                                <Td>{element.weapon}</Td>
                                <Td>
                                    <Content className="controls">
                                        <Content>â˜  Kill</Content>
                                        <Content>ðŸ’ Use Ring</Content>
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