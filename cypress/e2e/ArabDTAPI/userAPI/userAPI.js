import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {addUser} from '../../../REST/Users'
import {UserSteps} from './userAPISteps'

let user = new UserSteps()

Given('Create user', ()=> {

  // cy.log('hello world')
  // addUser('http://localhost:8080/api/v3/user').then((response) => {
  //   expect(response.body.firstName).to.eq('ahmed');

  //       expect(response.status).to.eq(200);
  // });

  user.addUser('http://localhost:8080/api/v3/user')

})

Given('Create user with list', ()=> {

  // cy.log('hello world')
  // addUser('http://localhost:8080/api/v3/user').then((response) => {
  //   expect(response.body.firstName).to.eq('ahmed');

  //       expect(response.status).to.eq(200);
  // });

  user.addUserWhithList('http://localhost:8080/api/v3/user/createWithList')

})
Given('user logout', ()=> {

  user.userLogOut('http://localhost:8080/api/v3/user/logout')

})

When('user login', ()=> {

  user.userLogIn('http://localhost:8080/api/v3/user/login?username={username}&password={password}')

})

When('Get user', ()=> {

  user.getUserByUserName('http://localhost:8080/api/v3/user')

})

When('update user', ()=> {

  user.updateUser('http://localhost:8080/api/v3/user')

})

When('Delete user', ()=> {

  user.deleteUser('http://localhost:8080/api/v3/user')

})

Then('Check name and phone', ()=> {
  user.checkName()
  user.checkPhone()
  user.checkStatus()
  

})

Then('Check name and phone with list', ()=> {
  user.checkNameWithList()
  user.checkPhoneWithList()
  user.checkStatus()

})

Then('Check response succsufuly', ()=> {
  user.checkStatus()
})

