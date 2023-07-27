import React, { useEffect,useState } from 'react'
import { Delete, Get, GetByPage } from '../Config/ApiMethods'
import Spinner from '../Component/Spinner'
import {motion} from 'framer-motion'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Carditem = () => {
  let navigate = useNavigate()
  const [data, setdata] = useState([
    {image:""},
    {image:""},
    {image:""},
    {image:""},
    {image:""},
    {image:""},
    {image:""},
    {image:""},
    {image:""},
  ])
  const [load, setload] = useState(true)
let Name = "Carditem"
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
    Delete("Carditem",id).then(()=>{
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
 const image ={
  offscreen:{x:-100,opacity:0},
  onscreen:{
    x:0,
    opacity:1,
    rotate:[10,20,10,0],
    transition:{
    type:"spring",
    bounce:0.4,
    duration:1 }
  }
}
  const texts ={
  offscreen:{y:100,opacity:0},
  onscreen:{
    y:0,
    opacity:1,
    transition:{
    type:"spring",
    bounce:0.4,
    duration:1.5 }
  }
 }
 const body ={
  offscreen:{x:100,opacity:0},
  onscreen:{
    x:0,
    opacity:1,
    transition:{
    type:"spring",
    bounce:0.4,
    duration:1 }
  }
 }
  return (
    <div>
      <Navbar/>
      <h1 className='head text-center mt-5 pt-5 '>Fruites </h1>
      <div  className='container main mx-auto '>
        <div className='row'>
          {false?<Spinner/>:data.map((x,i)=>{
              return(
                <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                transition={{staggerChildren:0.5}}
                viewport={{once:false,amount:1}} //card empty
                key={i} className='parent mx-auto mt-5 mx-2 card col-md-3 col-lg-3 col-sm-12 p-3 mb-5 rounded px-3 py-3 '>
                <motion.img  
                    variants={image}
                src={x.image} className='mx-auto rounded' width="240vh" height="170" />                
                <motion.h4
                 variants={texts}
                className='text-center mt-4 py-2'>Fruite and Vegitable</motion.h4>
                <motion.p
                 variants={body}
                className='mt-2 text-center'>Lorem the industry's standard dummy text  scramb....</motion.p>
                <button className='butt mx-5'><span className='span'></span> More</button>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Carditem

