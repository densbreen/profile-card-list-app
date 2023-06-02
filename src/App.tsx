import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import UserCard from "./components/UserCard";
import { responseData } from "./constant";
export interface CareerProps {
  logo: string;
  title: string;
}
export interface UserCardProps {
  name: string;
  first_name: string;
  last_name: string;
  current_title: string;
  location: string;
  phone_number?: string;
  personal_email?: string;
  linkedIn?: string;
  experience: CareerProps[];
  education: CareerProps[];
}
function App() {
  return (
    <div className="App">
      {responseData.map((item: UserCardProps, i) => (
        <UserCard
          key={i}
          name={item.name}
          first_name={item.first_name}
          last_name={item.last_name}
          current_title={item.current_title}
          location={item.location}
          phone_number={item.phone_number}
          personal_email={item.personal_email}
          linkedIn={item.linkedIn}
          experience={item.experience}
          education={item.education}
        />
      ))}
    </div>
  );
}

export default App;
