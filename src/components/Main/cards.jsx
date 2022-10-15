const Card = (data) => {
  const { title, image, desc } = data;
  console.log(data);
  return (
    <div className="cards">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
