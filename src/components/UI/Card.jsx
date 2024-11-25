import { Fragment } from "react";

const Card = (props) => {
  return (
    <Fragment>
      <div className="bg-gray-50	w-full	">{props.children}</div>
    </Fragment>
  );
};

export default Card;
