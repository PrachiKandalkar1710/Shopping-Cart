import { Products } from './components/Products';
import Content from './Content';
import Header from "./components/Header";


export default function App() {
    return(
       <>
       <Header/>
           <div className='App'>
               {/* <Header/> */}
               {Content.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       kilometerperLiter={contents.kilometerperLiter}
                       
                   />
               ))}
           </div>
       </>
    )
}