import {addUser,addUserWhithList,userLogIn,userLogOut,getUserByUserName,updateUser,deleteUser} from '../../../REST/Users'
import createUserBody from '../../../fixtures/createUserBody.json'
import createUserWithList from '../../../fixtures/createUserWithList.json'


export class UserSteps {

    response;


    addUser(url) {
        
        addUser(url)
        .then((responseBody) => {
           this.response=responseBody;
           
        })   
}

addUserWhithList(url) {
        
    addUserWhithList(url)
    .then((responseBody) => {
       this.response=responseBody;
       
    })   
}

userLogOut(url) {
        
    userLogOut(url)
    .then((responseBody) => {
       this.response=responseBody;
       
    })   
}

userLogIn(url) {
        
    userLogIn(url,this.response.body.username,this.response.body.password)
    .then((responseBody) => {
       this.response=responseBody;
       
    })   
}

getUserByUserName(url) {
        
    getUserByUserName(url,this.response.body.username)
    .then((responseBody) => {
       this.response=responseBody;
       
    })   
}

updateUser(url) {
        
    updateUser(url,this.response.body.username)
    .then((responseBody) => {
       this.response=responseBody;
       
    })   
}

deleteUser(url) {
        
    deleteUser(url,this.response.body.username)
    .then((responseBody) => {
       this.response=responseBody;
       
    })   
}

checkStatus(){
    expect(this.response.status).to.eq(200);
}

checkName(){
    expect(this.response.body.firstName).to.eq(createUserBody.firstName);
}

checkPhone(){
    expect(this.response.body.phone).to.eq(createUserBody.phone);
}

checkNameWithList(){
    expect(this.response.body[0].firstName).to.eq(createUserWithList[0].firstName);
}

checkPhoneWithList(){
    expect(this.response.body[0].phone).to.eq(createUserWithList[0].phone);
}




  
}