import React, { FC } from "react";
import "./index.scss";
import { BsLinkedin } from "react-icons/bs";
import { TbPhone, TbMail } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { RxDividerVertical } from "react-icons/rx";
import Stepper from "../base/Stepper";
import Tooltip from "../base/ToolTip";
import { UserCardProps } from "../../App";

const UserCard: FC<UserCardProps> = ({
  name,
  first_name,
  last_name,
  current_title,
  location,
  phone_number,
  personal_email,
  linkedIn,
  experience,
  education,
}) => {
  return (
    <div className="UserCard-content">
      <div className="UserCard-title-content">
        <div className="UserCard-title">
          <h3 className="UserCard-name">
            {first_name} {last_name}
          </h3>
          <div className="UserCard-links">
            {phone_number ? (
              <Tooltip text={phone_number?.toString()}>
                <TbPhone color="#8a898e" />
              </Tooltip>
            ) : (
              ""
            )}
            {personal_email ? (
              <Tooltip text={personal_email?.toString()}>
                <a href={`mailto:${personal_email}`}>
                  <TbMail color="#8a898e" />
                </a>
              </Tooltip>
            ) : (
              ""
            )}
            {linkedIn ? (
              <>
                <RxDividerVertical color="#ececec" />
                <a href={`http://${linkedIn}`}>
                  <BsLinkedin color="#2866b1" />
                </a>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="UserCard-subTitle">
          <h4 className="UserCard-currentTitle">{current_title}</h4>
          <RxDotFilled color="#ededed" />
          <h4 className="UserCard-location">{location}</h4>
        </div>
      </div>
      <hr className="UserCard-line" />
      <div className="UserCard-stepper-content">
        <div className="UserCard-stepper">
          <Stepper title="Experience" content={experience} />
          <Stepper title="Education" content={education} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
