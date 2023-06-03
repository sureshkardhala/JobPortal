import axios from "axios"

export const uploadAction = (formData) =>{
    axios({
        url:"https://udyogashala-api-default-rtdb.firebaseio.com/jobs",
        method:"POST",
        data:formData,
    })
    .then((res)=>{console.log(res)})
    .catch((err)=> {console.log(err)});
}