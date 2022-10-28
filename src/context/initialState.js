import { fetchUser } from "../utils/fetchlocalStorage"

const userInfo = fetchUser();
console.log(userInfo);

export const initialState = {
       user: userInfo, 
}