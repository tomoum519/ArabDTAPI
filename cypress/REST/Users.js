import createUserBody from '../fixtures/createUserBody.json'
import createUserWithList from '../fixtures/createUserWithList.json'
import {genRandomEnglishString,generateRandomNumStr} from '../REST/Dependencies'

// const parser = new DOMParser();
// const requestBody = createUserBody
//     ;

const username =genRandomEnglishString(5)
const firstName =genRandomEnglishString(5)
const phone =generateRandomNumStr(5)

const updateusername =genRandomEnglishString(5)
const updatefirstName =genRandomEnglishString(5)
const updatephone =generateRandomNumStr(5)

export const deleteUser = (apiPath,username) => {

    return cy.request({
        
        method: 'DELETE',
        url: apiPath+'/'+username,
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}

export const updateUser = (apiPath,username) => {
  
    createUserBody.firstName = updatefirstName
    createUserBody.phone = updatephone


    return cy.request({
        
        method: 'PUT',
        url: apiPath+'/'+username,
        body: createUserBody,
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}

export const getUserByUserName = (apiPath,username) => {
    
    return cy.request({
        
        method: 'GET',
        url: apiPath+'/'+username,
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}

export const userLogIn = (apiPath,username,password) => {
    
    return cy.request({
        
        method: 'GET',
        url: apiPath.replace('{username}', username).replace('{password}', password),
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}

export const userLogOut = (apiPath) => {
    
    return cy.request({
        
        method: 'GET',
        url: apiPath,
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}

export const addUserWhithList = (apiPath) => {

    createUserWithList[0].firstName = firstName
    createUserWithList[0].phone = phone

    return cy.request({
        
        method: 'POST',
        url: apiPath,
        body: createUserWithList,
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}

  export const addUser = (apiPath) => {
  
    createUserBody.firstName = firstName
    createUserBody.phone = phone
    createUserBody.username = username


    return cy.request({
        
        method: 'POST',
        url: apiPath,
        body: createUserBody,
        headers: {  
        'Content-Type': 'application/json',
        'accept': 'application/json'
    },
      })
}
module.exports = {
addUser,addUserWhithList,userLogIn,userLogOut,getUserByUserName,updateUser,deleteUser
};