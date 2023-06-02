import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import UserCard from "./components/UserCard";

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
  const responseData: UserCardProps[] = [
    {
      name: "James Hiddleston",
      first_name: "James",
      last_name: "Hiddleston",
      current_title: "UI/UX Designer at Facebook Sep",
      location: "San Francisco Bay Area",
      phone_number: "+1-323-643-3828",
      personal_email: "angela.miller@gmail.com",
      linkedIn: "James Hiddleston",
      experience: [
        {
          logo: "./company/1.png",
          title: "Senior Machine Learning Engineer at Google Oct",
        },
        {
          logo: "./company/2.png",
          title: "Senior Machine Learning Engineer at Google Oct",
        },
      ],
      education: [
        {
          logo: "./education/1.png",
          title: "Standard University, M. S., Computer Science Oct",
        },
      ],
    },
    {
      name: "Angela Miller",
      first_name: "Angela",
      last_name: "Miller",
      current_title: "Product Designer at Apple Inc. Nov",
      location: "San Francisco Bay Area",
      phone_number: "+1-555-555-5555",
      personal_email: "angela.miller@gmail.com",
      linkedIn: "linkedin.com/in/angelamiller",
      experience: [
        {
          logo: "./company/2.png",
          title: "UI/UX Designer at Google Jan",
        },
        {
          logo: "./company/4.png",
          title: "Product Designer at Dropbox Feb",
        },
        {
          logo: "./company/2.png",
          title: "UI/UX Designer at Google Jan",
        },
        {
          logo: "./company/4.png",
          title: "Product Designer at Dropbox Feb",
        },
      ],
      education: [
        {
          logo: "./education/2.png",
          title: "Master of Fine Arts - Graphic Design Jan",
        },
        {
          logo: "./education/3.png",
          title: "Bachelor of Science in Computer Science Sep",
        },
      ],
    },
    {
      name: "John Smith",
      first_name: "John",
      last_name: "Smith",
      current_title: "Software Engineer at Microsoft Oct",
      location: "Greater Seattle Area",
      phone_number: "+1-555-555-5555",
      personal_email: "john.smith@gmail.com",
      linkedIn: "linkedin.com/in/johnsmith",
      experience: [
        {
          logo: "./company/3.png",
          title: "Software Developer at Oracle Oct",
        },
        {
          logo: "./company/1.png",
          title: "Software Engineer at Amazon Apr",
        },
      ],
      education: [
        {
          logo: "./education/3.png",
          title: "Bachelor of Science in Computer Science Sep",
        },
      ],
    },
    {
      name: "Emily Watson",
      first_name: "Emily",
      last_name: "Watson",
      current_title: "Marketing Manager at HubSpot Oct",
      location: "Greater Boston Area",
      phone_number: "+1-555-555-5555",
      personal_email: "emily.watson@gmail.com",
      linkedIn: "linkedin.com/in/emilywatson",
      experience: [
        {
          logo: "./company/4.png",
          title: "Brand Manager at PepsiCo Aug",
        },
      ],
      education: [
        {
          logo: "./education/3.png",
          title: "Master of Business Administration - Marketing Aug",
        },
        {
          logo: "./education/1.png",
          title: "Master of Science in Statistics Jan",
        },
      ],
    },
    {
      name: "Michael Brown",
      first_name: "Michael",
      last_name: "Brown",
      current_title: "Data Analyst at Airbnb Nov",
      location: "Greater San Diego Area",
      phone_number: "+1-555-555-5555",
      personal_email: "michael.brown@gmail.com",
      linkedIn: "linkedin.com/in/michaelbrown",
      experience: [
        {
          logo: "./company/4.png",
          title: "Business Insights Analyst at Google Feb",
        },
        {
          logo: "./company/2.png",
          title: "Data Analyst at Apple Inc. Dec",
        },
      ],
      education: [
        {
          logo: "./education/1.png",
          title: "Master of Science in Statistics Jan",
        },
      ],
    },
    {
      name: "Linda Davis",
      first_name: "Linda",
      last_name: "Davis",
      current_title: "HR Manager at Amazon Jan",
      location: "Greater Seattle Area",
      phone_number: "+1-555-555-5555",
      personal_email: "linda.davis@gmail.com",
      linkedIn: "linkedin.com/in/lindadavis",
      experience: [
        {
          logo: "./company/6.png",
          title: "Recruitment Specialist at Microsoft Jun",
        },
        {
          logo: "./company/6.png",
          title: "HR Manager at Alphabet Inc. Oct",
        },
      ],
      education: [
        {
          logo: "./education/6.png",
          title: "Master of Science in Human Resource Management Sep",
        },
      ],
    },
    {
      name: "David Lee",
      first_name: "David",
      last_name: "Lee",
      current_title: "Product Manager at Facebook Sep",
      location: "San Francisco Bay Area",
      phone_number: "+1-555-555-5555",
      personal_email: "david.lee@gmail.com",
      linkedIn: "linkedin.com/in/davidlee",
      experience: [
        {
          logo: "./company/7.png",
          title: "Product Manager at Amazon Web Services Sep",
        },
        {
          logo: "./company/7.png",
          title: "Product Manager at Salesforce.com Jan",
        },
      ],
      education: [
        {
          logo: "./education/7.png",
          title: "Master of Business Administration - Management Oct",
        },
      ],
    },
    {
      name: "Julia Sanchez",
      first_name: "Julia",
      last_name: "Sanchez",
      current_title: "Data Scientist at Google Oct",
      location: "Greater New York City Area",
      phone_number: "+1-555-555-5555",
      personal_email: "julia.sanchez@gmail.com",
      linkedIn: "linkedin.com/in/juliasanchez",
      experience: [
        { logo: "./company/8.png", title: "Data Analyst at Microsoft Jun" },
        {
          logo: "./company/8.png",
          title: "Data Scientist at Amazon Web Services Sep",
        },
      ],
      education: [
        { logo: "./company/8.png", title: "Ph.D. in Computer Science Nov" },
      ],
    },
    {
      name: "Eric Johnson",
      first_name: "Eric",
      last_name: "Johnson",
      current_title: "Software Engineer at Apple Inc. Sep",
      location: "San Francisco Bay Area",
      phone_number: "+1-555-555-5555",
      personal_email: "eric.johnson@gmail.com",
      linkedIn: "linkedin.com/in/ericjohnson",
      experience: [
        { logo: "./company/1.png", title: "Software Engineer at Google Jan" },
        {
          logo: "./company/2.png",
          title: "Software Developer at Microsoft Jun",
        },
      ],
      education: [
        {
          logo: "./education/9.png",
          title: "Bachelor of Science in Computer Science Sep",
        },
      ],
    },
    {
      name: "Karen Kim",
      first_name: "Karen",
      last_name: "Kim",
      current_title: "Marketing Director at Yelp Inc. Oct",
      location: "San Francisco Bay Area",
      phone_number: "+1-555-555-5555",
      personal_email: "karen.kim@gmail.com",
      linkedIn: "linkedin.com/in/karenkim",
      experience: [
        { logo: "./company/1.png", title: "Marketing Manager at Dropbox Feb" },
        { logo: "./company/3.png", title: "Brand Manager at PepsiCo Aug" },
      ],
      education: [
        {
          logo: "./education/10.png",
          title: "Master of Business Administration - Marketing Aug",
        },
      ],
    },
    {
      name: "Daniel Lee",
      first_name: "Daniel",
      last_name: "Lee",
      current_title: "Data Analyst at Airbnb Nov",
      location: "Greater San Diego Area",
      phone_number: "+1-555-555-5555",
      personal_email: "daniel.lee@gmail.com",
      linkedIn: "linkedin.com/in/daniellee",
      experience: [
        {
          logo: "./company/11.png",
          title: "Business Insights Analyst at Google Feb",
        },
        {
          logo: "./company/11.png",
          title: "Marketing Analyst at Facebook Sep",
        },
      ],
      education: [
        {
          logo: "./education/1.png",
          title: "Master of Science in Statistics Jan",
        },
      ],
    },
    {
      name: "Samantha Lee",
      first_name: "Samantha",
      last_name: "Lee",
      current_title: "Frontend Developer at Microsoft Oct",
      location: "Greater Seattle Area",
      phone_number: "+1-555-555-5555",
      personal_email: "samantha.lee@gmail.com",
      linkedIn: "linkedin.com/in/samanthalee",
      experience: [
        { logo: "./company/4.png", title: "UI/UX Designer at Google Jan" },
        {
          logo: "./company/3.png",
          title: "Frontend Developer at Amazon Web Services Sep",
        },
        {
          logo: "./company/11.png",
          title: "Marketing Analyst at Facebook Sep",
        },
      ],
      education: [
        {
          logo: "./education/4.png",
          title: "Bachelor of Science in Computer Science Sep",
        },
        {
          logo: "./education/1.png",
          title: "Master of Science in Statistics Jan",
        },
      ],
    },
    {
      name: "Andrew Park",
      first_name: "Andrew",
      last_name: "Park",
      current_title: "Product Marketing Manager at Facebook Sep",
      location: "San Francisco Bay Area",
      phone_number: "+1-555-555-5555",
      personal_email: "andrew.park@gmail.com",
      linkedIn: "linkedin.com/in/andrewpark",
      experience: [
        { logo: "./company/13.png", title: "Product Manager at Google Jan" },
        { logo: "./company/13.png", title: "Brand Manager at PepsiCo Aug" },
      ],
      education: [
        {
          logo: "./education/13.png",
          title: "Master of Business Administration - Marketing Aug",
        },
      ],
    },
  ];
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
