import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'

const ListOfUsers = (props) => {
  localStorage.removeItem("otp")
  const inputField = localStorage.getItem("inputField")
  const [searchInput,setSearchinput] = useState(" ")
  const [fetchedData,setFetchedData] = useState(" ")
  const [offset,setOffset] = useState(0)
  const [limit,setLimit] = useState(8)
  const [option, setOption] = useState("Alphabetical")

  const apiquery = async()=>{
    const sessionToken = localStorage.getItem('sessionToken')
      const baseurl = 'http://172.232.70.228:8080/api/gql/query'
      const query1 = `query($searchQuery:NullString,$optionQuery:SortByOption,$offsetQuery:NullInt,$limitQuery:NullInt){
        users(search:{search:$searchQuery,sortBy:$optionQuery,offset:$offsetQuery,limit:$limitQuery}){
          users{
            id
            firstName
            lastName
            email
            phone
            role {
              id
            }
            organization{
              id
              name
              uid
              code
              website
              sector
              status
              logo{
                name
                url
              }
              
            }
            
          }
          }
        } 
      `
      const variables ={
          searchQuery:searchInput,
          optionQuery:option,
          offsetQuery:offset,
          limitQuery:limit
      }
      // console.log(variables)

      const options={
          method:'POST',
          headers : {
              "content-type":"application/json",
              "accept":"application/json",
              "authorization":sessionToken
          },
          // body:JSON.stringify({query:query1})
          body:JSON.stringify({query:query1,variables})
      }

      const response = await fetch(baseurl,options)
      
      const jsonData = await response.json()
      const data = jsonData.data.users.users
      setFetchedData(data)
      // console.log(data)    
  }


  useEffect(() =>{
    apiquery()
  }
  ,[searchInput,option,limit, offset])

  // console.log(limitOffsetLength)

  const searchFunction = (event) =>{
    setSearchinput(event.target.value)
  }



  const changeFuntion  = (event) =>{
    // console.log(event.target.name)
    if (event.target.name==="sortby"){
      setOption(event.target.value)
    }
    if (event.target.name==="offset"){

      setOffset(event.target.value)
    }
    if (event.target.name==="limit"){
      setLimit(event.target.value)
    }
  }

  const logoutFunction = () =>{
    const {history} = props
    localStorage.removeItem("sessionToken")
    localStorage.removeItem("inputField")
  
    history.replace('/')
    window.location.reload();
  }

  // console.log(fetchedData)
  return (
    <div className='css-userspage-container'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top css-navbar-property">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        {(fetchedData===" ")?<p>No Data</p>:(
        <ul class="navbar-nav mr-auto d-flex">
            <li class="nav-item m-2">
            <input  value={searchInput} onChange={searchFunction} type="search" placeholder="Search" aria-label="Search" />
            </li>
            <li class="nav-item m-2">
            <select class="form-select" aria-label="Default select example" value={offset} onChange={changeFuntion}  name="offset">
                    <option value="0">Offset - 0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
            </select>
            </li>
            <li class="nav-item m-2">
            <select value={limit} onChange={changeFuntion}  name="limit">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">Limit - 8</option>
                </select>
            </li>
            <li class="nav-item m-2">
            <select value={option} onChange={changeFuntion}  name="sortby">
                  <option value="Alphabetical">Sort by - Alphabetical</option>
                  <option value="DateCreated">DateCreated</option>
                  <option value="DateUpdated">DateUpdated</option>
                </select>
            </li>
          </ul>
        )
      }
          <div class="form-inline my-2 my-lg-0">
            <p>Welcome <span className='text-primary'>{inputField}</span></p>
            <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={logoutFunction}>Logout</button>
          </div>
        </div>
      </nav>
      {(fetchedData===" ")?<p>No Data</p>:(
      <>
    <table className='table table-responsive table-striped'>
      <thead>
            <tr>
              <th>Organisation</th>
              <th>Organisation Code</th>
              <th>UID</th>
              <th>Status</th>
              <th>First Name</th>
              <th >Last Name</th>
              <th >Email</th>
              <th >Phone Number</th>
            </tr>
            </thead>
            <tbody>
      {fetchedData.map(eachUser => 
      <tr key={eachUser.id}>
        <td>{eachUser.organization===null?'-':eachUser.organization.name}</td>
         <td >{eachUser.organization===null?'-':eachUser.organization.code}</td>
        <td >{eachUser.organization===null?'-':eachUser.organization.uid}</td>
        <td >{eachUser.organization===null?'-':eachUser.organization.status}</td>
        <td >{eachUser.firstName}</td>
        <td >{eachUser.lastName}</td>
        <td >{eachUser.email}</td>
        <td >{eachUser.phone}</td> 
      </tr>
      
        )}
        </tbody>
        </table>
        </>
    )}
    </div>
  )
}

export default ListOfUsers

