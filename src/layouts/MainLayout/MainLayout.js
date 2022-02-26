import {AppBar, Box, Container, Stack} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";
import {AppBarLinks} from "../../constants";
import AppBarLink from "../../common/ui/AppBarLink/AppBarLink";
import Logo from "../../common/ui/Logo/Logo";

const MainLayout = ({children}) => {
  return (
    <Box sx={{pb: "30px"}}>
      <AppBar position="static" sx={{mb: "30px"}}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "70px",
            }}
          >
            <Box to="/" component={NavLink} sx={{mr: "10px"}}>
              <Logo />
            </Box>
            <Stack spacing={2} direction="row">
              {AppBarLinks.map(({name, to}) => (
                <AppBarLink to={to} component={NavLink} key={name}>
                  {name}
                </AppBarLink>
              ))}
            </Stack>
          </Box>
        </Container>
      </AppBar>
      {children}
    </Box>
  );
};

export default MainLayout;
