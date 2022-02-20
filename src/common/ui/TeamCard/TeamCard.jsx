import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    CardHeader,
    Skeleton,
    Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const TeamCard = ({
    name = "",
    logoUrl = "",
    href = "",
    isFetching = false,
}) => {
    return (
        <Card elevation={3} sx={{ height: "100%" }}>
            <Box
                component={Link}
                to={href}
                sx={{
                    textDecoration: "none",
                    color: grey["900"],
                }}
            >
                <CardHeader
                    title={
                        isFetching ? (
                            <Skeleton />
                        ) : (
                            <Typography
                                variant="body1"
                                component="div"
                                align="center"
                            >
                                {name}
                            </Typography>
                        )
                    }
                />
                <CardContent
                    sx={{
                        textAlign: "center",
                        height: "200px",
                    }}
                >
                    {isFetching ? (
                        <Skeleton sx={{ height: "100%" }} />
                    ) : (
                        <img
                            src={logoUrl}
                            alt="Team logo"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        />
                    )}
                </CardContent>
            </Box>
        </Card>
    );
};

TeamCard.TeamCard = {
    name: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    href: PropTypes.string,
    isFetching: PropTypes.bool,
};

export default TeamCard;
