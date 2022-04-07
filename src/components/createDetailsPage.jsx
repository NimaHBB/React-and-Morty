
const CreateDetailsPage=({item})=>{
   // console.log(item)

return(
<>
<img alt="character image" src={item.image} />
<p>Character's Name: {item.name}</p>
<p>{item.name} is now {item.status}.</p>
<p>Species: {item.species}</p>
<p>Type: {item.type}</p>
<p>Gender: {item.gender}</p>
<p>Location: {item.gender}</p>
</>

);

}

export default CreateDetailsPage