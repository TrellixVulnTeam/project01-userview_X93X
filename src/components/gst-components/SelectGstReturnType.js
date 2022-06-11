import React, { useEffect, useState } from 'react'
import GstNavigation from '../Navigation/gstNavigation'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function SelectGstReturnType() {
    const [token, setToken] = useState()
    const [all_product, setAllProduct] = useState()
    const [composition_gst, setCompositionGst] = useState()
    const [non_composition_gst, setNonCompositionGst] = useState()
    useEffect(() => {
        async function checkToken() {
            let token;
            try {
                token = await JSON.parse(localStorage.getItem('token'))
                let product_list = await JSON.parse(localStorage.getItem('product_list') || "[]")
                console.log(product_list)
                if (token === null || token === undefined) {
                    navigate('/')
                }
                console.log("token set")
                setToken(token)
            } catch (e) {
                console.log(e)
            }
            axios({
                method:"GET",
                url:"3.108.219.92:3800/v1/user/allproduct",
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              }).then(data => {
                let products = data.data.data
                // console.log(products)
                let composition_temp_products = products.filter(product => {
                  if(product.category == 'gst-product' && product.subcategory == 'composition')
                    return product
                })
                let non_composition_temp_products = products.filter(product => {
                    if(product.category == 'gst-product' && product.subcategory == 'non-composition')
                      return product
                  })

                console.log('composition gst products are', composition_temp_products)
                console.log('non-composition gst products are', non_composition_temp_products)
                setCompositionGst(composition_temp_products)
                setNonCompositionGst(non_composition_temp_products)
            }).catch(error => {
                console.log(error)
              })
      
        }
        checkToken()

    }, [])
    const navigate = useNavigate()
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December','Jan to Mar', 'Apr to Jun', 'Jul to Sep', 'Oct to Dec']
    const quarterArray = ['Jan to Mar', 'Apr to Jun', 'Jul to Sep', 'Oct to Dec']
    const yearArray = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
    const compositionGst = [
        {
            "id":'1',
            "value":"GSTR-4 Quarterly (Composition Return) From 01/07/2017 Upto 31/03/201",
            "type":"month"
        },
        {
            "id":'2',
            "value":"CMP-08 (Composition Return) Nill",
            "type":""
        },
        {
            "id":'3',
            "value":"Annual Return for Composition Return at Nil(GSTR-4)",
            "type":""
        },
        {
            "id":'4',
            "value":"CMP-08 (Composition Return) From 01-04-2019",
            "type":""
        },
        {
            "id":'5',
            "value":"Annual Return for Composition Return with DATA(GSTR-4)",
            "type":""
        }
    ]
    const nonCompositionGst = [
        {
            "id":'6',
            "value":"GSTR9 Annual Return (on NILL)PN-309.1",
            "type":"",
            "file_url":""
        },
        {
            "id":'7',
            "value":"GSTR-10 (GST Final return) FOR DATA PN-308",
            "type":"",
            "file_url":""
        },
        {
            "id":'8',
            "value":"GSTR-7 (UPTO 10 BILLS) PN-311",
            "type":"",
            "file_url":""
        },
        {
            "id":'9',
            "value":"GSTR-1",
            "type":"",
            "file_url":""
        },
        {
            "id":'10',
            "value":"GSTR-2 Purchases (Input match) for 1 Year GST-02",
            "type":"",
            "file_url":""
        },
        {
            "id":'11',
            "value":"GSTR-8 E-Commerce PN-312",
            "type":"",
            "file_url":""
        },
        {
            "id":'12',
            "value":"GSTR-1 NILL RETURN'",
            "type":"",
            "file_url":""
        },
        {
            "id":'13',
            "value":"GSTR 3B Return (with data) PN-297",
            "type":"",
            "file_url":""
        },
        {
            "id":'14',
            "value":"GSTR-9 Annual Return (with DATA) PN-309",
            "type":"",
            "file_url":""
        },
        {
            "id":'15',
            "value":"GSTR-10 (GST Final return) For Nil Data PN-307",
            "type":"",
            "file_url":""
        },
        {
            "id":'16',
            "value":"GSTR 3B (NILL) RETURN PN-297(A)",
            "type":"",
            "file_url":""
        },
        {
            "id":'17',
            "value":"IFF (Only Register sales) & PMT-06",
            "type":"",
            "file_url":""
        },
        
    ]

    const [gstPrimaryType, setGstPrimaryType] = useState()
    const [gstSecondaryType, setGstSecondaryType] = useState()
    const [gstObject, setGstObject] = useState({})
    const [secondary_id, setSecondaryId] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    useEffect(() => {
        let gst_object = []
        console.log(gstPrimaryType)
        console.log(gstSecondaryType)
        if(gstPrimaryType == "composition") {
            gst_object = composition_gst.filter(gst => {
                console.log(gst)
                if(gst._id == secondary_id) {
                    return gst
                }
            })
        } else if(gstPrimaryType == 'non-composition') {
            gst_object = non_composition_gst.filter(gst => {
                if(gst._id == secondary_id) {
                    return gst
                }
            })
        }
         console.log("gst object is",  gst_object[0])
        setGstObject(gst_object[0])
    }, [secondary_id])

    const handleSubmit = async () => {
        // console.log("gst object is", gstObject)
        let gst
        try {
             gst = await JSON.parse(localStorage.getItem('gst'))
             console.log(gst)
             gst.gst_type = gstPrimaryType
             gst.gst_subtype = gstObject.name
             localStorage.setItem('gst', JSON.stringify(gst))
            
        } catch (e) {
            console.log(e)
        }
        let data = {
            gst_type: gstPrimaryType,
            gst_subtype: gstObject.name,
            month: month,
            year: year,
            id: gst._id
        }
        console.log(data)
        // /gst/return/type
        axios({
            method:"POST",
            url:"3.108.219.92:3800/v1/user/gst/return/type",
            headers: {
                "Authorization":`Bearer ${token}`
            }, 
            data: data
        }).then(async data => {
            if(data.status == 200) {
                // try {
                //     let gst = await JSON.parse(localStorage.getItem('gst'))
                    
                // } catch(e) {}
               navigate('/gst/return/submit', {state: {data: gstObject}})
            } else {
                //write a popup for error message
            }
        }).catch(error => {
            console.log(error)
        })
       
    }

    return (
        <>
     <GstNavigation />
            <div className='container'>
                <div className='row m-0 p-0 border'>
                    <span className="fs-3 text-uppercase itr-heading-text">GST Return - Select GST Type</span>
                </div>

                <div className='row m-0 p-0'>
                    <fieldset className='border p-4'>
                        <legend className='float-none fw-bold '>GST Return - Select GST Type</legend>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>GST Type</label>
                                <label for="last-name" className='form-label'>Month</label>
                                <select className='form-select' aria-label="--Select--" value={gstPrimaryType} onChange={(e) => setGstPrimaryType(e.target.value)}>
                                    <option>---Select---</option>
                                    <option value="composition">Composition</option>
                                    <option value="non-composition">Non Composition</option>
                                </select>
                            </div>
                            <div className='col-md-8 col-sm-12'>
                            <label for="last-name" className='form-label'>Select GST Subtype</label>
                                <select className='form-select' aria-label="--Select--" value={secondary_id} onChange={(e) => setSecondaryId(e.target.value)}>
                                    <option>---Select---</option>
                                    {gstPrimaryType == "composition" ? composition_gst.map((gst, index) => (
                                        <option value={gst._id}>{gst.name}</option>
                                    )) : gstPrimaryType == "non-composition" ? non_composition_gst.map((gst, index) => (
                                        <option value={gst._id}>{gst.name}</option> 
                                    )) : null
                                }
                                </select>
                            </div>
                        </div>
                        <div className='row m-0 p-0'>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Month</label>
                                <select className='form-select' aria-label="--Select--" value={month} onChange={(e) => setMonth(e.target.value)}>
                                    <option>---Select---</option>
                                    {monthArray.map((month, index) => (
                                        <option value={month}>{month}</option>
                                    ))}

                                </select>
                            </div>
                            <div className='col-md-3 col-sm-12'>
                                <label for="last-name" className='form-label'>Year</label>
                                <select className='form-select' aria-label="--Select--" value={year} onChange={(e) => setYear(e.target.value)}>
                                    <option>---Select---</option>
                                    {yearArray.map((year, index) => (
                                        <option value={year}>{year}</option>
                                    ))}

                                </select>
                            </div>
                        </div>

                    </fieldset>
                </div>


                <div className='row m-0 p-3'>
                    <button className='submit-button' onClick={handleSubmit} >Click Here To Apply For GST</button>
                </div>
            </div>
        </>
    )
}
// onClick={() => navigate('/gst/return/submit')