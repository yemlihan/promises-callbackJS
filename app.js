
let data = [
    {"name" : "yemlihan","surname" : "sapan"},
    {"name" : "serdar" , "surname" : "sapan"}
]

function getData(){
    setTimeout(() => {
        data.map((item,index) => {
            console.log('getData',item,index)
        })
    }, 1000);
}



function createData(post){
    return new Promise((resolve,reject) => {
        data.push(post)
        const error = false;
        if(!error){
            resolve()
        }else{
            reject("Bir hata var!")
        }
    })
}

async function init(){
    await createData({"name" : "veysel" , "surname" : "sapan"})
    getData();
}
init()



function createData(post){
    return new Promise((resolve,reject) => {
        data.push(post)
        const error = false;
        if(!error){
            resolve()
        }else{
            reject("Bir hata var!")
        }
    })
}

createData({"name" : "veysel" , "surname" : "sapan"})
.then(getData())
.catch(err => console.log(err))




function createData(newData,callback){
    setTimeout(() => {
        data.push(newData)
        callback();
    }, 2000);
}

createData({"name" : "veysel" , "surname" : "sapan"},getData);
