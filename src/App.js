import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './features/gitUserSlice';

function App() {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.app;
  })

  console.log(data);

  return (
    <div className="App">
      {/* <h1>Fetch Data Using Redux Toolkit</h1> */}
      <h1>Frontend :- React Javascript CSS</h1>
      <h1>Backend :- Node Express MongoDb</h1>
      <button className='btn' onClick={() => dispatch(getAllData())}>Get User Data</button>
      <table className='table' border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Company</th>
            <th>Rating</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {
            data.users.myProducts && data.users.myProducts.map((item,index)=>{
              return(
                <tr key={item._id}>
                  <td>{index+1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}k</td>
                  <td>{item.company}</td>
                  <td>{item.rating}</td>
                  <td>{item.createdAt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};

export default App;
