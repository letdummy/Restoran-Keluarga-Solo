import * as React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";                     
import CustomDrawer from "./CustomDrawer";

export default function MyNavbar(){
  const [value, setValue] = React.useState(); // Declare state variables for the value of the selected tab and the logo image
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md")); // Check if screen width is smaller than medium

   // scrollTo function scrolls to the element with the specified id
  const scrollTo = (id) => {
    const menuElement = document.getElementById(id);
    window.scrollTo({
      top: menuElement.offsetTop - 75,
      left: 0,
      behavior: 'smooth'
    });
  };

  
  const [logo, setLogo] = React.useState(null); // Declare state variable for the logo image and set it to null initially

  React.useEffect(() => {
    // Fetch the logo image from the API
    fetch("https://restorankeluarga-solo.up.railway.app/api/profile/")
      .then((response) => response.json())
      .then((data) => {
        setLogo(data[0].logo);
      });
  }, []);

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: "#1A1A1A", paddingX: isMedium ? 3 : 9.5 }}>
        <Toolbar>
          <img 
          src={logo} 
          alt="Logo" 
          style={{ width: "50px", height: "50px",  borderRadius: "50%", cursor: "pointer"}} 
          onClick={() => { window.location.href = '/home'; }} 
          />
          {isMedium ? // If screen width is smaller than medium, render the drawer
            (<CustomDrawer />) 
            : 
            (
                <>
                <Tabs
                    sx={{ marginLeft: "auto" }}
                    indicatorColor=""
                    textColor="inherit"
                    value={value}
                    onChange={(e, value) => setValue(value)}
                >
                    <Tab label="Home" onClick={()=>{scrollTo('home')}}/>
                    <Tab label="Menu" onClick={()=>{scrollTo('menu')}} />
                    <Tab label="FAQ" onClick={()=>{scrollTo('faq')}}/>
                    <Tab label="Contact Us" onClick={()=>{scrollTo('contact')}}/>
                </Tabs>
                </>
            )
          }
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};