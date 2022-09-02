// ######### Imports ###########
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';
import { fetchAll } from './apiCalls';
import './css/styles.css';
import './images/turing-logo.png'
import './images/Activity.png'
import './images/sleeping.png'
import './images/Hydrate.png'
import './images/activity2.png'
import './images/Clipboard.png'


// ######### Query Selectors ###########
const userWelcome =  document.querySelector('#userName')
const userInfo = document.querySelector('#userInfo')
const userStepComp = document.querySelector('#userSteps')
const hydrationCard = document.querySelector('#userHydro')
// ######### Global Variables ###########
  let singleUser;
  let usersData;
  let userRepository;
  let users;
  let sleep;
  let hydration;
  let singleHydro;
// let hydrationData;
// let sleepData;


// ######### Promises ###########
const getFetch = () => {
  fetchAll()
  .then(data => {
    console.log('data', data)
    users = data[0].userData;
    console.log('users', users)
    sleep = data[1].sleepData;
    hydration = data[2].hydrationData;
    singleUser = new User(users[getRandomUser()]);
    userRepository = new UserRepository(users);
    singleHydro = new Hydration(hydration);
    welcomeUser();
    displayUserData();
    displayStepGoalComp(userRepository);
    displayHydrationData(singleHydro)
  })

}



//findFriends function
//***find 1 friend and pass in 1 id***
//call the function mutilple times for each friend
//forEach over the friends
//grab friend id's and pass the id in as an arguement
//iterate over the users data & use a filter/find to find the ID's that match
//maybe have a nested loop for multiple friendsArray
//if user id = friend id, return object


// ######### Event Listeners ###########
window.addEventListener('load', getFetch);

function findUserName(users,singleUser) {

  const friendsArray = users.filter(user => {
      return  user[user] === singleUser.id


    })

   return friendsArray
}


// function convertFriendIDToName(userRepository) {
//  singleUser.friends.forEach(element => {
//          element =
//     })
// }







// ######### On-Load Function ###########
function getRandomUser() {
    return Math.floor(Math.random() * users.length);

}

function welcomeUser() {
    userWelcome.innerText = `Welcome Back, ${singleUser.returnUserName()} !`;
}

function displayUserData() {
    userInfo.innerHTML = `<ul class='user-data-details'>
  <li> Name: ${singleUser.name}</li>
  <li> Email: ${singleUser.email}</li>
  <li> Address: ${singleUser.address}</li>
  <li>Stride ${singleUser.strideLength}</li>
  <li>Step Goals  ${singleUser.dailyStepGoal}
  <li>Friends  ${singleUser.friends}
</ul>`
}

function displayStepGoalComp(userRepository) {
    userStepComp.innerHTML = `Your daily step goal :${singleUser.dailyStepGoal} <br> vs <br> All user average step goals:  ${userRepository.getAllUserAvgStepGoals()}`
    userStepComp.innerHTML = `<p class='user-step-details'>Your daily step goal: ${singleUser.dailyStepGoal}</p> <br> vs <br><p class='user-step-details'> All user average step goals:  ${userRepository.getAllUserAvgStepGoals()}</p>`
   

}

function displayHydrationData(singleHydro) {
  hydrationCard.innerHTML = `Today: ${singleHydro.usersDailyOunces(singleUser.id)} vs All Time ${singleHydro.getLifeTimeOunces()}`
}
//
// function displaySleepData() {
//   usersleepComp.innerHTML = `Today: ${} vs All Time ${}`
// }
