const getUser = async () =>{
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const res = await fetch(url);
    const user = await res.json();

    return user; 
}

export { getUser }; 