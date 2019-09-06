import React, { useState, useEffect }  from 'react';
import Table from '../../components/table/Table';
import Thead from '../../components/table/Thead';
import Tr from '../../components/table/Tr';
import Th from '../../components/table/Th';
import Td from '../../components/table/Td';
import Tbody from '../../components/table/Tbody';
import { getAll } from '../../service/hero.service';
import './Home.css';
import { MyContext } from '../../contex/MyContext'
import Content from '../../components/Content';
import H2 from '../../components/H2';
import InputLabel from '../../components/inputlabel/InputLabel';


const Home = ({props}) => {

    const handleOnChange = (event) => {
        
        const { name, value } = event.target;
        debugger;
        //this.setState({ [name]: value });
    }

    
    /**
     * Metodo manejador de evento click para boton que agrega tareas al array lista
     * @returns {undefined}
     */
    
    const changeState = (element,type) => {
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
    const handleAddTask = () => {
        const { tarea, lista } = this.state;
        lista.push(tarea);
        
        this.setState({
            lista,
            tarea: ''
        });
    }
    const addClass  = (element) => {
        const anillo = element.anillo === true ? "character-row anillo":"character-row";
        const kill = element.kill === true ? "kill":"";
        return `${anillo} ${kill}`;
    }
    

        const value = {
            handleOnChange: handleOnChange
          }

        const { parametroEjemplo } = this.props;
        const { search_input, lista } = this.state;
  
    return (
        <main className = "flex-shrink-0">
                
        <Content className="container">
            <h1 className = "mt-5">Fellowship of the Ring</h1>
            <Content >
                <input value={search_input} onChange={this.handleOnChange} name="search_input" />
            </Content>

            <Content className="row">
                <Content className="col">
                    <Table className="table table-bordered">
                        <Thead>
                            <Tr className="character-row">
                                
                                <Th scope="col">Name</Th>
                                <Th scope="col">Race</Th>
                                <Th scope="col">Age</Th>
                                <Th scope="col">Weapon</Th>
                                <Th scope="col" colspan = "2"></Th> 
                                
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
                                    <a onClick={() => {
                                            this.changeState(element,"kill");
                                        }}>
                                        â˜  Kill
                                    </a>
                                </Td>
                                <Td>
                                    <a className={element.anillo2 === true ? "anillo2":"" } onClick={() => {
                                            this.changeState(element,"anillo");
                                            //this.setState({ name: "James"});
                                        }}>
                                        ðŸ’ Use Ring
                                    </a>
                                </Td>
                            </Tr>
                        ))}
                        </Tbody>
                    </Table>



                </Content>
                <Content className="col">
                    <MyContext.Provider value={value}>
                    <form>
                        <Content class="form-group">
                            <InputLabel type="text" className="form-control" name="name" aria-describedby="emailHelp" placeholder="Name" label= "Name"></InputLabel>
                        </Content>
                        <Content class="form-group">
                            <InputLabel type="text" className="form-control" name="race" aria-describedby="emailHelp" placeholder="Name" label= "Race"></InputLabel>
                        </Content>
                        <Content class="form-group form-check">
                            <InputLabel type="text" className="form-control" name="age" aria-describedby="emailHelp" placeholder="Name" label= "Age"></InputLabel>
                        </Content>
                        <Content class="form-group form-check">
                            <InputLabel type="text" className="form-control" name="weapon" aria-describedby="emailHelp" placeholder="Name" label= "Weapon"></InputLabel>
                        </Content>
                        <button type="button" class="btn btn-primary">Guardar</button>
                    </form>
                    </MyContext.Provider>
                </Content>
            </Content>



            
        </Content>
    </main>
    )
  }
  
  export default Home;













