
import { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './CategoryList/categoryList';
import Header from './Header/header';
import axios from './axios';
import Loading from './Loading/loading';
import FastFoodList from './FastFoodList/fastFoodList';

function App() {
  const [loading , setLoading] = useState(false);
  const [fastFoodItems , setFastFood] = useState([])
  const fetchData = async(categoryId = null)=>{
    setLoading(true)
    const response = await axios.get(`/FastFood/list${categoryId ? '?categoryId=' + categoryId : ''}`)
    setLoading(false)
    setFastFood(response.data)
  }
  useEffect(() => {
  fetchData();
  }, []);

const renderContent = ()=>{
  if(loading){
    return <Loading theme='dark'/>
  }
  return <FastFoodList fastFoodItems={fastFoodItems}/>
}


  return (
<div className='wrapper bg-faded-dark'>
<Header></Header>
<CategoryList></CategoryList>
<div className='container mt-4'>
  {renderContent()}
</div>
</div>
  );
}

export default App;
