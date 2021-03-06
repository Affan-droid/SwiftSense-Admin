import React, {createContext, Component} from 'react';

export const SalesContext = createContext();

class SalesContextProvider extends Component {
    state = { 
        isLightTheme:true, 
        light:{syntax:'#555',ui:'#ddd', bg:'#eee'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
     }
    render() { 
        return ( 
            <SalesContext.Provider value={{...this.state}}>
                {this.props.children}
            </SalesContext.Provider>
         );
    }
}
 
export default SalesContextProvider;