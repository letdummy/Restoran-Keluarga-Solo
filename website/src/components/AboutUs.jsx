import { 
    Box, 
    Container, 
    styled, 
    Typography 
  } from "@mui/material";
  import React from "react";
  
  
  
  const AboutUs = () => {
    // CustomContainer is a styled Container component with additional styles for media queries
    const CustomContainer = styled(Container)(({ theme }) => ({
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginBottom: theme.spacing(4),
      },
    }));
  
    // CustomBox is a styled Box component with additional styles for media queries
    const CustomBox = styled(Box)(({ theme }) => ({
      [theme.breakpoints.down("md")]: {
          maxWidth: "15rem",
      }, [theme.breakpoints.down("sm")]: {
          maxWidth: "15rem",
      },
      alignContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    }));
  
  
    return (
      <Box sx={{ mt: 5 }}>

        {/* Render a CustomBox component with an image and Typography component */}
        <CustomContainer>
          <CustomBox>
            <img src='../images/place3.jpg' alt="Dishes" style={{ maxWidth: "20rem" }} />
            <Typography
              variant="body2"
              sx={{
                color: "#FDA021",
                fontSize: "16px",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Variety of Traditional Dishes
            </Typography>
          </CustomBox>

          {/* Render a CustomBox component with an image and Typography component */}
          <CustomBox>
            <img src='../images/place2.jpg' alt="Place" style={{ maxWidth: "20rem" }} />
            <Typography
              variant="body2"
              sx={{
                color: "#FDA021",
                fontSize: "16px",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Reservations Available
            </Typography>
          </CustomBox>

          {/* Render a CustomBox component with an image and Typography component */}
          <CustomBox>
            <img src='../images/place1.jpg' alt="Place" style={{ maxWidth: "20rem" }} />
            <Typography
              variant="body2"
              sx={{
                color: "#FDA021",
                fontSize: "16px",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Beautiful Scenery
            </Typography>
          </CustomBox>
        </CustomContainer>
      </Box>
    );
  };
  
  export default AboutUs;