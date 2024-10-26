import React, { useState } from "react";
import { Box,
   Typography, 
   useMediaQuery ,
} from "@mui/material";
import sam from "../assets/sam.jpg"; // Replace with actual image paths
import { Add as AddIcon } from "@mui/icons-material"; // Plus sign icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import InputBase from "@mui/material/InputBase";

import leilaImg from "../assets/leila.jpg";
import johnImg from "../assets/john.jpg";
import samImg from "../assets/sam.jpg";
import TravelerLayout from "./TravelerLayOut"; // Import the layout component

const TravelerHome = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleRequest = () => {
    navigate("/traveler-request"); // Navigate to request page
  };

  return (
    <TravelerLayout>
      <Box sx={{ display: "flex" }}>
        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "white",
            padding: "20px",
            marginTop: "60px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap", // Enable wrapping on smaller screens
              justifyContent: "center",
              marginTop: "20px",
              gap: "20px", // Space between boxes
              padding: { xs: "10px", sm: "20px" }, // Add padding for mobile
              overflow: "hidden", // Prevent horizontal scroll
            }}
          >
            {/* First Box */}
            <Box
              sx={{
                flex: "1 1 100%", // Full width on small screens
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 20px)",
                  md: "calc(33.33% - 20px)",
                },
                height: { xs: "140px", md: "180px" }, // Adjust height for smaller screens
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                textAlign: "center",
                color: "inherit",
                cursor: "pointer",
              }}
              onClick={handleRequest}
            >
              <AddIcon sx={{ color: "#F66F1E", fontSize: "30px" }} />
              <Typography
                sx={{
                  color: "#210947",
                  fontSize: { xs: "12px", md: "16px" },
                  marginTop: "10px",
                }}
              >
                Upload Traveler Details
              </Typography>
            </Box>

            {/* Second Box */}
            <Box
              sx={{
                flex: "1 1 100%",
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 20px)",
                  md: "calc(33.33% - 20px)",
                },
                height: { xs: "140px", md: "180px" },
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "10px",
                boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                padding: "20px",
              }}
            >
              <Typography
                sx={{
                  color: "#F66F1E",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", md: "16px" },
                  textAlign: "center",
                }}
              >
                Sender
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={sam}
                  alt="Profile"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    color: "#210947",
                    fontSize: { xs: "12px", md: "14px" },
                    textAlign: "center",
                  }}
                >
                  Ken Bonolo
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#210947",
                  fontSize: { xs: "14px", md: "18px" },
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hand Bags
              </Typography>

              <Typography
                sx={{
                  color: "green",
                  fontSize: { xs: "10px", md: "14px" },
                  marginLeft: "5px",
                  textAlign: "center",
                }}
              >
                You're 5 Hours Away
              </Typography>
            </Box>

            {/* Third Box */}
            <Box
              sx={{
                flex: "1 1 100%",
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 20px)",
                  md: "calc(33.33% - 20px)",
                },
                height: { xs: "140px", md: "180px" },
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  alignSelf: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#F66F1E",
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Monthly
                </Typography>
                <ArrowDropDownIcon
                  sx={{
                    color: "#F66F1E",
                    fontSize: { xs: "18px", md: "20px" },
                    marginLeft: "5px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#210947",
                  fontSize: { xs: "20px", md: "28px" },
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                51
              </Typography>
              <Typography
                sx={{
                  color: "#210947",
                  fontSize: { xs: "12px", md: "14px" },
                  marginTop: "5px",
                }}
              >
                Total Amount of Package Delivered
              </Typography>
            </Box>

            {/* Fourth Box */}
            <Box
              sx={{
                flex: "1 1 100%",
                maxWidth: {
                  xs: "100%",
                  sm: "calc(50% - 20px)",
                  md: "calc(33.33% - 20px)",
                },
                height: { xs: "140px", md: "180px" },
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ color: "#F66F1E", fontSize: { xs: "14px", md: "16px" } }}
              >
                Wallet
              </Typography>
              <Typography
                sx={{
                  color: "#210947",
                  fontSize: { xs: "20px", md: "28px" },
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                $2,000
              </Typography>
              <Typography
                sx={{
                  color: "green",
                  fontSize: { xs: "12px", md: "14px" },
                  marginTop: "5px",
                }}
              >
                Withdraw
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              marginLeft: { xs: "10px", sm: "15px", md: "20px" },
              marginTop: { xs: "30px", sm: "40px", md: "50px" },
              marginBottom: "20px",
            }}
          >
            Deliveries
          </Typography>

          {/* White Container */}
          <Box
            sx={{
              backgroundColor: "white",
              padding: {
                xs: "10px",
                sm: "15px",
                md: "20px",
              },
              borderRadius: "10px",
              boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
              marginTop: "20px",
              width: "100%",
              height: {
                xs: "auto",
                sm: "auto",
                md: "100vh",
              },
              position: "relative",
              overflow: "auto",
            }}
          >
            {/* Header Row for Items, Traveler, Status */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                borderRadius: "10px",
                padding: {
                  xs: "5px",
                  sm: "8px",
                  md: "10px",
                },
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              {["Items to be Delivered", "Traveler", "Status"].map(
                (text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "12px", md: "16px" },
                      textAlign: "center",
                      flex: { xs: "1 1 100%", md: "auto" },
                    }}
                  >
                    {text}
                  </Typography>
                )
              )}
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                borderRadius: "22.5px",
                width: "100%",
                maxWidth: { md: "450px" },
                height: "45px",
                padding: "0 10px",
                marginBottom: "20px",
              }}
            >
              <SearchIcon sx={{ color: "#F66F1E" }} />
              <InputBase
                placeholder="Search"
                sx={{ marginLeft: "10px", flex: 1 }}
              />
            </Box>

            {/* Item List */}
            <Box sx={{ marginBottom: "20px" }}>
              {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
                (item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                      borderBottom: index < 3 ? "1px solid #E0E0E0" : "none",
                      paddingBottom: "10px",
                      paddingX: { xs: "10px", sm: "0" },
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    {/* Item Name and Checkbox */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox size="small" />
                      <Typography
                        sx={{
                          marginLeft: "10px",
                          fontSize: { xs: "14px", md: "16px" },
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>

                    {/* Traveler Information */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: { xs: "8px", md: "0" },
                      }}
                    >
                      <Box
                        component="img"
                        src={[johnImg, leilaImg, samImg, johnImg][index]}
                        alt="profile"
                        sx={{
                          width: 25,
                          height: 25,
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        {
                          [
                            "Sam Kethin",
                            "John Durelo",
                            "Leila Adebayo",
                            "Sam Kethin",
                          ][index]
                        }
                      </Typography>
                    </Box>

                    {/* Status Information */}
                    <Box
                      sx={{
                        borderRadius: "4px",
                        padding: "5px 10px",
                        textAlign: "end",
                        color:
                          index === 1 ? "red" : index === 2 ? "green" : "blue",
                        fontSize: { xs: "14px", md: "16px" },
                        marginTop: { xs: "8px", md: "0" },
                      }}
                    >
                      {
                        ["In Process", "Failed", "Delivered", "In Process"][
                          index
                        ]
                      }
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </TravelerLayout>
  );
};

export default TravelerHome;
