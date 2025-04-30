// crate an instant to call xmlhttprequest class

const obj= new XMLHttpRequest()

// call the open method to establisg connection

obj.open('get','https://jsonplaceholder.typicode.com/todos')

// call send method to request data

obj.send()

// to set time to get response at 4th stage

console.log(obj.readyState);

obj.onreadystatechange = () =>{ //function to chnage ready state property
    console.log(obj.readyState);

    if(obj.readyState == 4){
        if(obj.status>=200 && obj.status<300){
            // console.log(obj.responseText);

            // convert the string to array of objects

            let alltodo=JSON.parse(obj.responseText)
            console.log(alltodo);
// ...........................................................


            // add data to table from array
            alltodo.forEach((item)=>{
                result.innerHTML+=`
                <tr>
                        <td> ${item.userId}</td>
                         <td>${item.id}</td>
                          <td>${item.title}</td>
                           <td>${item.completed}</td>
                </tr>`
            })
            
            
        }
        else{
            console.log('no response');
            
        }
        
    }
    else{
        console.log('no response');
        
    }
    
}