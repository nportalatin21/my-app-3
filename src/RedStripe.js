import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "./RedStripe.css";
import { useRecoilState } from "recoil";
import { userNameAtom } from "./atoms";

export const RedStripe = () => {
  //Add a state so we can display the username returned from the API.
  let [email, setEmail] = useState("");

  let [userName, setUserName] = useRecoilState(userNameAtom)

  

  const url = "https://jsonplaceholder.typicode.com/users/1";

  //Making an API call.

  //We are making a call our JSON Placeholder API when the component loads into the DOM or when the Browser window gains focus.

  //This means when user clicks off the browser and clicks on the browser.

  // React Query calls the API for us automatically

  //This line contains two arguments.

  //The first arguemnt is the name for our cache that is associated with the data returned from the API

  // The second argument is our function that we want to use to make the call to the API. In this case we are using the axios library to make a GET request.

  const usersQuery = useQuery(`users/1`, async () => await axios.get(url), {
    //Below would be considered the third arugment with two properties

    refetchOnWindow: false,

    enabled: false,
  });

  //We wait for the API call to finish. Once, finished, we log the data that we receieved from the API to the console.
  useEffect(() => {
    if (usersQuery.isFetched && userName === "") {
      //if we did not include this statement, our application would be caught in an infinite loop, and
  
      //the follow would be displayed on the console.
  
      //We are pulling the username from our userQuery.data property
  
      //and setting it to our component state.
  
      setUserName(usersQuery.data.data.name);
  
      setEmail(usersQuery.data.data.email);
  
      // console.log(usersQuery.data)
    }
  }, 
    [userName, 
      setEmail,
      setUserName,
      usersQuery.isFetched,
      usersQuery.data?.data.name,
      usersQuery.data?.data.email
    ])


  const onHandlePush = () => {
    // console.log("Hello")

    //we are calling the refetch() method on the usersQuery() object

    // to call the API when the button is pushed.

    usersQuery.refetch();
  };

  return (
    <div className="RedStripe">
      <button onClick={() => onHandlePush()}>Get User</button>
      Username:{userName} {email}
    </div>
  );
};
