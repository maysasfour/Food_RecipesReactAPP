import data from './data.json';
import CardComp from './card';
import './main.css';
//data[0]."title"
function Main(){
    return (
        <>
        <div id="container">
      
       {data.map(function(item)       {
        return(

        <CardComp image={item.image_url} title={item.title} description={item.description}/>
       )
       }
       )
        }
        </div>
      
        </>

      );
    }
export default Main;