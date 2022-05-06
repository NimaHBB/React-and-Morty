const CreateDetailsPage = ({ item }) => {
  console.log(item);

  return (
    <>
      <img alt="character image" src={item.image} />
      <p>Character's Name: {item.name}</p>
      <p>
        {item.name} is now {item.status}.
      </p>
      <p>Species: {item.species}</p>
      {item.type && <p>Type: {item.type}</p>}
      <p>Gender: {item.gender}</p>
      {item.location && <p>Location: {item.location.name}</p>}
    </>
  );
};

export default CreateDetailsPage;
