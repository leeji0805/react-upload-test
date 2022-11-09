// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           해보자구~!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{Component, component} from "react";
import axios from "axios";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      seletedFile: null,
    }
  }

  handleFileInput = (e) =>{
    this.setState({
      seletedFile : e.target.files[0],
    })
  }

  handlePost=async()=>{
    const formData = new FormData();
    formData.append('file',this.state.seletedFile);
    console.log(formData);

    await axios.post("/api/upload",formData).then(res=>{alert('성공')}).catch(err=>{alert('실패')})
  }

  render(){
    return(
      <div>
        <input type="file" name="file" onChange={e=>this.handleFileInput(e)}/>
        <button type="button" onClick={this.handlePost}>업로드</button>
      </div>
    )
  }
}

export default App