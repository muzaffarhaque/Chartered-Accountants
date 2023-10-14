import axios from "axios"

const featchedData=async()=>{
   try{
    const res=await axios.get("https://muzaffarhaque.github.io/db/CA.json");
    return res;
   }catch(error){
    return error;
   }
}
export default featchedData;