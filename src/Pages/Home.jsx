import React, { useEffect, useState } from 'react'
import Banner from '../Components/home/Banner'
import Category from '../Components/Categories/Category';

const Home = () => {
    const [categoris, setCategories] = useState();
    useEffect(()=>{
        async function load() {
            const categoryRes = await fetch("http://localhost:3000/categories");
            const categoryData = await categoryRes.json();
      
            setCategories(categoryData);
        }
        load();
    },[])
  return (
    <div>
      <Banner />
      <div className="w-full mx-auto">
        <h1 className="text-4xl my-20 text-center">Our Recipe Categories </h1>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-x-5 gap-y-7">
          {categoris?.map((category) => (
            <Category key={category?.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
