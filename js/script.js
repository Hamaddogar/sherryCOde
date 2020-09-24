function myfunction(event){
 event.preventDefault()
 let uname=document.getElementById("uname").value
 let fname=document.getElementById("fname").value
 let city=document.getElementById("city").value
   let gender = document.querySelector('input[name="gender"]:checked').value

 const myobject={uname,fname,city,gender}
let myarray=[]
myarray.push(myobject)
 localStorage.setItem("MY-Data",JSON.stringify(myarray))
  let getData= localStorage.getItem("MY-Data")
  console.log(getData)

} 