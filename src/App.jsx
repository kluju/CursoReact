import React, { useState, useEffect }  from 'react';


import Table from './components/table/Table';
import Thead from './components/table/Thead';
import Tr from './components/table/Tr';
import Th from './components/table/Th';
import Td from './components/table/Td';
import Tbody from './components/table/Tbody';
import { getAll } from './service/hero.service';
import { MyContext } from './contex/MyContext';
import Content from './components/Content';
import H2 from './components/H2';
import InputLabel from './components/inputlabel/InputLabel';



import './App.css';


function App() {
    const [name, setName] = React.useState("");
    const [race, setRace] = React.useState("")
    const [age, setAge] = React.useState("")
    const [weapon, setWeapon] = React.useState("")
    const [search_input, setInputSearch] = React.useState("Text")
    const [lista, setLista] = React.useState(getAll())
    const [visible, setvisible] = React.useState(false)
    useEffect(() => {
      //console.log('useEffect : fetchUsers');
      //fetchUsers();
    }, []);
  
    // component did update
    // se testea el cambio de valores de idUser para ejecutarce
    // se ejecuta segun la cantidad de elementos dentro y cantidad de cambios de estado
    useEffect(() => {
      //console.log(`useEffect : idUser ${idUser}`);
    }, [name, race,age,weapon,search_input,lista,visible]);
    function changeText(newText) {
        //setText(newText);
    };
    const handleOnChange = (event) => {
      const { name, value } = event.target;
      
      switch (name) {
        case "name":
          setName(value);
          break;
        case "race":
          setRace(value);
          break;
        case "age":
          setAge(value);
          break;
        case "weapon":
          setWeapon(value);
        default:
          break;
      }
      //this.setState({ [name]: value });
    } 
    const makeHandleClick = (element,type) => {
      return event => {
        
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
          const listaAux = lista.map((task) => task );
          setLista(listaAux);
      };
    }



    const changeState = (element,type) => {
      
      
      
      
      
  }
    const agregar = () => {
      setvisible(true);
    }
    const saveInsList = () =>  {
      const listaAux = lista.map((task) => task );
      const objNew = {name:name,race:race,age:age,weapon:weapon, anillo: false, anillo2: false};
      listaAux.push(objNew);
      setLista(listaAux);
      clearInput();
    }
    const clearInput = () => {
      setName("");
      setRace("");
      setAge("");
      setWeapon("");
    }
    const addClass  = (element) => {
      const anillo = element.anillo === true ? "character-row anillo":"character-row";
      const kill = element.kill === true ? "table-secondary":"";
      return `${anillo} ${kill}`;
    }
    const value = {
      handleOnChange: handleOnChange
    }


    return (
      <main className = "flex-shrink-0">
                
      <Content className="container">

          <Content className="row">
            <Content className = "col col-lg-8">
                <h1 className = "mt-5">Fellowship of the Ring</h1>
            </Content>
          </Content>
          
          <Content className="row">
            <Content className = "col col-lg-8">
                <input value={search_input} onChange={handleOnChange} name="search_input" />
            </Content>
            
            <Content className = "col col-lg-2"><button type="button" className="btn btn-primary float-right" onClick={agregar}>Agergar</button></Content>
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
                      
                          <Tr className={addClass(element) } key = {element.id}>
                              <Td>{element.name}</Td>
                              <Td>{element.race}</Td>
                              <Td>{element.age}</Td>
                              <Td>{element.weapon}</Td>
                              <Td>
                                  <a className="btn btn-primary" onClick={makeHandleClick(element,"kill")}>
                                      Kill
                                  </a>
                              </Td>
                              <Td>
                                  <a className={element.anillo2 === true ? "btn-primary anillo2":"btn btn-primary" } onClick={makeHandleClick(element,"anillo")}>
                                      Ring
                                  </a>
                              </Td>
                          </Tr>
                      ))}
                      </Tbody>
                  </Table>



              </Content>
              <Content className="col" style={{display:visible === true ? "block":"none"}}>
                  <MyContext.Provider value={value}>
                  <form>
                      <Content class="form-group">
                          <InputLabel type="text" className="form-control" value={name} name="name" aria-describedby="emailHelp" placeholder="Name" label= "Name"></InputLabel>
                      </Content>
                      <Content class="form-group">
                          <InputLabel type="text" className="form-control" value={race} name="race" aria-describedby="emailHelp" placeholder="Name" label= "Race"></InputLabel>
                      </Content>
                      <Content class="form-group form-check">
                          <InputLabel type="text" className="form-control" value={age} name="age" aria-describedby="emailHelp" placeholder="Name" label= "Age"></InputLabel>
                      </Content>
                      <Content class="form-group form-check">
                          <InputLabel type="text" className="form-control" value={weapon} name="weapon" aria-describedby="emailHelp" placeholder="Name" label= "Weapon"></InputLabel>
                      </Content>
                      <button type="button" class="btn btn-primary" onClick={saveInsList}>Guardar</button>
                  </form>
                  </MyContext.Provider>
              </Content>
          </Content>



          
      </Content>
  </main>
    );
}
export default App;