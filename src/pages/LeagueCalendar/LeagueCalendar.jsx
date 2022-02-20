import {
    Breadcrumbs,
    Container,
    Link,
    Skeleton,
    Typography,
} from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetLeagueMatchesQuery } from "../../api/leaguesApi";
import MatchesDataContainer from "../../common/containers/MatchesDataContainer";

const LeagueCalendar = () => {
    const { leagueId } = useParams();
    const { data, error, isLoading } = useGetLeagueMatchesQuery({
        id: leagueId,
    });

    return (
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: "30px" }}>
                <Link
                    underline="hover"
                    color="inherit"
                    component={NavLink}
                    to="/"
                >
                    Лиги
                </Link>
                <Typography color="text.primary">
                    {error ? (
                        ""
                    ) : isLoading ? (
                        <Skeleton sx={{ width: "100px" }} />
                    ) : (
                        data?.competition.name
                    )}
                </Typography>
            </Breadcrumbs>

            <Typography variant="h3" component="div" sx={{ mb: "20px" }}>
                Матчи
            </Typography>

            <MatchesDataContainer matchesPerPage={7} />
        </Container>
    );
};

export default LeagueCalendar;
