import React, { useState } from 'react'
import { useFormik } from 'formik'
import'./Price.css';
import * as Yup from 'yup'
import { categoryOptions } from './EntityList';
import { Weights,seatingOptions } from './EntityList';
import { StateOptions } from './EntityList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Price() {
 
 
const [rtos,setRtos]=useState([])
const [state,setState]=useState("select")
const [showli,setShowli]=useState(false)
  const formik = useFormik({
    initialValues: {
      service_for: '',
      s_or_p: '',
      rto: ''
    },
    onSubmit : values =>{
      console.log('Form data',values)
    },
   validationSchema:Yup.object({
    category:Yup.string().required("category is required"),
    seating:Yup.string().required("seating is required"),
    rto:Yup.string().required("rto is required"),
   })
  })
  
  return (
       <>
   <div className='price_text'>
   <h3 className="h1 h1--blue center-align">Pricing</h3>
  <p className="herounit_h2 center-align h2_display">Start with our competitive pay-as-you-go pricing.<br/> For deeper discounts on committed spend as you scale, talk with
    our sales team.<br/></p>
  <a className="hero_unit-cta" href="#" data-title-cache="Contact sales for volume discounts →"
    title="Contact sales for volume discounts →" style={{color: '#03a94a',marginTop:'20px'}}>Contact sales for volume discounts →</a>
  
   </div>
    
      <form className='price_form' onSubmit={formik. handleSubmit}>
<div style={{width:"100%",padding:"10px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
<div className='field'>
                    <label htmlFor='service_for'>Select category</label>
                    
        
                        <select name = "service_for"
                        {...formik.getFieldProps("service_for")}
                        >
                           
                            <option value = "">select</option>
                        {
                          categoryOptions.map((option)=>{
                            return (
                              <option value = {option.name} key={option.name}>{option.label}</option>
                            )
                          })
                        }
                        </select>
                                            
                </div>
                {/* <div className='field'>
                    <label htmlFor='service_for'>{
                       formik.values.service_for==="construction_eqp"|| 
                       formik.values.service_for==="farm_eqp"||
                       formik.values.service_for==="loading"?
                       "select passing":
                       formik.values.service_for==="bus"||
                        formik.values.service_for==="motor_cab"?
                       "select seating":null

                    }</label>
                    
        
                       {
                        formik.values.service_for==="construction_eqp"|| 
                        formik.values.service_for==="farm_eqp"||
                        formik.values.service_for==="loading"?
                        
                         <select name="s_or_p"
                         {...formik.getFieldProps("s_or_p")}>
                         <option value="">select</option>
                         {
                          Weights.map((val)=>{
                            return(
                              <option value={val}key={val}>{val}</option>
                            )
                          })
                         }
                         </select>
                         :
                     
                        formik.values.service_for==="bus"||
                        formik.values.service_for==="motor_cab"?

                        <select name="s_or_p"
                         {...formik.getFieldProps("s_or_p")}>
                         <option value="">select</option>
                         {
                          seatingOptions.map((val)=>{
                            return(
                              <option value={val}key={val}>{val}</option>
                            )
                          })
                         }
                         </select>:null

                       }
                                            
                </div> */}
                <div className='field'>
                    <label htmlFor='service_for'>Select state</label>
                    
                <div className='field_input' onClick={()=>{setShowli(!showli)}} style={{display:'flex',alignItems:'center',fontSize:'13px',justifyContent:'space-between',padding:'2px'}}>
                  <span>{state}</span>
                  <KeyboardArrowDownIcon  style={{fontWeight:'lighter',fontSize:'16px'}}></KeyboardArrowDownIcon>
                </div>
               {
                showli?
                <ul className='field_options'>
                {
                          StateOptions.map((option)=>{
                            return (
                             
                              < li value = {option.name}onClick={()=>{
                                const arrIndex=StateOptions.findIndex((state)=>{
                                  return state.code===option.code 
                                })
                                console.log(StateOptions[arrIndex])
                                setState(option.name)
                                setRtos(StateOptions[arrIndex].rtos)
                                setShowli(!showli)
                              }}key={option.name} >{option.name} </li>
                              
                            )
                          })
                        }
                </ul>
                :null
               }
                       
                                            
                </div>
                {
                  rtos.length>0?
                  <div className='field'>
                    <label htmlFor='service_for'>Select RTO</label>
                    
        
                        <select name = "rto"
                           {...formik.getFieldProps("rto")}>
                            <option value = "">select</option>
                        {
                          rtos.map((option)=>{
                            return (
                              <option value = {option} key={option}>{option}</option>
                            )
                          })
                        }
                        </select>
                                            
                </div>:null
                }
                </div>
                </form >
                </>
                )

              }
              
              export default Price




                
    
    
    
  







