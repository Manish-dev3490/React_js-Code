// In this file i  am making a network call to  get the data from fakke store api which we will be going to use in our appplicationn to make it fullly dynamic 


 export const FetchDataFromApi= async ()=>{
    const response= await fetch("https://fakestoreapi.com/products?limit=5");
    const json= await response.json();
    console.log(json);
}
FetchDataFromApi();