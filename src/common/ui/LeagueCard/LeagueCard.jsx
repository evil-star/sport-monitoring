import PropTypes from "prop-types";
import { Paper, Skeleton, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LeagueCardStyled = styled(Paper)(() => ({
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textDecoration: "none",
}));

const LeagueCard = ({
    name = "",
    areaName = "",
    href = "",
    isFetching = false,
}) => {
    return (
        <LeagueCardStyled elevation={3} component={Link} to={href}>
            {isFetching ? (
                <Skeleton width="80%">
                    <Typography variant="h5" component="div" gutterBottom>
                        .
                    </Typography>
                </Skeleton>
            ) : (
                <Typography variant="h5" component="div" gutterBottom>
                    {name}
                </Typography>
            )}
            {isFetching ? (
                <Skeleton width="60%">
                    <Typography
                        variant="subtitle"
                        component="div"
                        sx={{ color: "#adabab" }}
                    >
                        .
                    </Typography>
                </Skeleton>
            ) : (
                <Typography
                    variant="subtitle"
                    component="div"
                    sx={{ color: "#adabab" }}
                >
                    {areaName}
                </Typography>
            )}
        </LeagueCardStyled>
    );
};

LeagueCard.propTypes = {
    name: PropTypes.string,
    areaName: PropTypes.string,
    href: PropTypes.string,
    isFetching: PropTypes.bool,
};

export default LeagueCard;
