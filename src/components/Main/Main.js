import "./Main.scss";
import { data } from "../data";
import Card from "./cards";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {data.map((item, id) => (
        <Card {...item} key={id} />
      ))}
    </div>
  );
};

export default Main;
