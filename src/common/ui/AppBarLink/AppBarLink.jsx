import {Button, styled} from "@mui/material";

const AppBarLink = styled(Button)(() => ({
  color: "white",
  backgroundColor: "transparent",
  "&.active": {
    backgroundColor: "white",
    color: "#1976d2",
  },
}));

export default AppBarLink;
