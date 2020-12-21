import './App.css';
import ShowData from './ShowData';

function App() {
  return (
    <div className="container">
      <div className="card border-0 shadow my-5">
        <div className="card-body p-5">
          <h1 style={{textAlign:'center'}} className='mb-5'>Covid-19 Tracker</h1>
          <hr></hr>
          <ShowData/>
        </div>
      </div>
    </div> 
  );
}

export default App;
