
import TeamImg1 from '../../assets/images/team/1.jpg';

const ComponentName = () => {
  return (
    <div className="text-center">
      <p className="text-lg text-[#FF3811]">Core Features</p>
      <h4 className="text-4xl font-bold">Why Choose Us</h4>
      <p className="text-base">
        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>

      <div className="card w-96 shadow-xl mt-4">
        <figure>
          <img src={TeamImg1} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Car Engine Plug</h2>
          <p>Engine Expert</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
