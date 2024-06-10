import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    message: ""
  });
  const [navbarList, setNavbarList] = useState([
    {
      title: "Home",
      url: "/",
      active: true
    },
    {
      title: "About Us",
      url: "/about-us",
      active: false
    },
    {
      title: "Service",
      url: "/service",
      active: false
    }
  ]);

  const handleClick = (list) => {
    console.log(list);
    // setNavbarList((preValue) => console.log(preValue));

    setNavbarList((preValue) => {
      return preValue.map((item) => {
        if (item.title === list.title) {
          return {
            ...item,
            active: true
          };
        } else {
          return {
            ...item,
            active: false
          };
        }
      });
    });
  };

  useEffect(() => {
    if (password.length < 5 && password.length > 0) {
      setError({
        name: "password",
        message: "Password must be greater than 5!!"
      });
    } else {
      setError({
        name: "",
        message: ""
      });
    }
    console.log("useEffect called");
  }, [password]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="bg-gray-300">
      <Navbar fluid rounded className="bg-gray-300 max-w-screen-xl mx-auto">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navbarList.map((list, index) => {
            return (
              <Navbar.Link
                key={index}
                as={Link}
                to={list.url}
                active={list.active}
                onClick={() => handleClick(list)}
              >
                {list.title}
              </Navbar.Link>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
      <h2 className="m-8">{name}</h2>
      {/* <div>
        <form action="#">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            className="m-8"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputPassword}
            type="password"
            id="password"
            className="m-8"
          />
          <p className="text-red-700">{error.message}</p>
        </form>
      </div> */}
    </div>
  );
}
