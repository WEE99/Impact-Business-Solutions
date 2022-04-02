let json = '{"payload":[{"name": "John Doe","age": 26},{"name": "Alex","age": 23},{"name": "Khalif","age": 64}]}'
let parsed = JSON.parse(json);
let length = Object.keys(parsed.payload).length;


for (let position = 0 ; position< length ; position ++)
{
    console.log("name at position " + position + " : " + parsed.payload[position].name);
    
}



 


