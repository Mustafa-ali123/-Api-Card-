import React, { useEffect,useState } from 'react'
import { Delete, Get, GetByPage } from '../Config/ApiMethods'
import Spinner from '../Component/Spinner'
import Buttons from '../Component/Buttons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Institute = () => {
  let navigate = useNavigate()
  const [data, setdata] = useState([])
  const [load, setload] = useState(true)
let Name = "institute"
  const getdata= () => {
    Get("/card").then((res)=>{
      setdata(res.data.data)
      console.log(res.data.data)
      setload(false)    
    }).catch(e=>console.log(e))
  }
  useEffect(()=>{
    getdata()
  },[])
  const del= (x,id) => {
    Delete("institute",id).then(()=>{
      let updatedData =data.filter((x,i)=>x._id !== id)
      setdata(updatedData)
    }).catch(e=>console.log(e))
  }
  const edit= (x) => {
    navigate("/putdata", {
    state:{
      name:Name,
      editdata:x,
      data
    }
  })
}
 
  return (
    <div>
      <h1 className='head text-center mt-3 '>Fruites </h1>
      {/* <Buttons click={() =>navigate ("/postdata",{
        state:{
          name:Name,
          data
        }
      })} classes='leftbtn px-5' label="Post" color='primary' /> */}
      <div  className='container  mx-auto '>
        <div className='row'>
          {load?<Spinner/>:data.map((x,i)=>{
              return(
                <div key={i} className=' mx-auto mt-5 mx-2 card col-md-3 col-lg-3 col-sm-12 p-3 mb-5 rounded px-3 py-3 '>
                  <img src={x.image} className='mx-auto rounded' width="240vh" height="170" />
                <h3 className='text-center mt-5'>Fruite and Vegitable</h3>
                <p className='mt-2'>Lorem the industry's standard dummy text  scramb....</p>
                {/* <Buttons click={() => del(x, x._id)} classes='mt-2' label="Delete" color='error' />
                <Buttons click={() => edit(x)} classes='mx-2 mt-2' label="Edit" color='success' /> */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Institute

