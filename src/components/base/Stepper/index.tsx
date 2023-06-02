import React, { FC } from "react";
import "./index.scss";
import { CareerProps } from "../../../App";

interface StepperProps {
  title: string;
  content: CareerProps[];
}

const Stepper: FC<StepperProps> = ({ title, content }) => {
  return (
    <div className="Stepper-wrapper">
      <h4 className="Stepper-title">{title}</h4>
      <ol className="Stepper-stepper">
        {content.map((item) => (
          <li className="Stepper-stepper-item">
            <img className="Stepper-stepper-logo" src={item.logo} />
            <p className="Stepper-stepper-content">{item.title}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Stepper;
