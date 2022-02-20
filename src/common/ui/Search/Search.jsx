import { InputBase, styled, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledSearch = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "300px",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
}));

const Search = (props) => (
    <StyledSearch>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase {...props} inputProps={{ "aria-label": "search" }} />
    </StyledSearch>
);

export default Search;
