import './App.css';
import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here
  const h = props.an()
  
  return(
    <>
      {
        h.map((item,index) =>{
          return(
            <div key={index}>
              <img src={item.img} alt="" />
            </div>
          )
        })
      }      
    </>
  )
}

export default App;
