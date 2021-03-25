const Hero = (props) => {
  return (
    <div className="container-hero">
      <div className="description-hero">
        <h1>{props.data.restaurant.name}</h1>
        <span>{props.data.restaurant.description}</span>
      </div>

      <img
        src={props.data.restaurant.picture}
        alt={props.data.restaurant.description}
      />
    </div>
  );
};

export default Hero;
