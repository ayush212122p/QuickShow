import { Inngest } from "inngest";
import User from "../model/user.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "my-ticket-booking" });

// inngest fn to save user data to the database

const syncUserCreation = inngest.createFunction(
    {id:"sync-user-from-clerk"},
    {email:"clerk/user.created"},
    async ({event})=>{
        const {id,first_name,last_name,email_addresses,image_url}=event.data;
        const userData={
            _id:id,
            email:email_addresses[0].email_addresses,
            name:first_name+ " "+last_name,
            image:image_url
        }
        await User.create(userData)
    }
)


// inngest fn to delete a user data to the database
const syncUserDeletion = inngest.createFunction(
    {id:"delete-user-with-clerk"},
    {email:"clerk/user.deleted"},
    async ({event})=>{
      const {id}=event.data
      await User.findByIdAndDelete(id)
    }
)

// inngest fn to update user data to the database

const syncUserUpdation = inngest.createFunction(
    {id:"update-user-from-clerk"},
    {email:"clerk/user.updated"},
    async ({event})=>{
        const {id,first_name,last_name,email_addresses,image_url}=event.data;
        const userData={
            _id:id,
            email:email_addresses[0].email_addresses,
            name:first_name+ " "+last_name,
            image:image_url
        }
        await User.findByIdAndUpdate(id,userData)
    }
)



// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];
