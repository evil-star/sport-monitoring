import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetLeagueMatchesQuery } from "../../api/leaguesApi";
import MatchesDataContainer from "../../common/containers/MatchesDataContainer";
import Breadcrumbs from "../../common/ui/Breadcrumbs/Breadcrumbs";

const LeagueCalendar = () => {
    const { leagueId } = useParams();
    const { data, error, isLoading } = useGetLeagueMatchesQuery({
        id: leagueId,
    });

    const crumbs = [
        { name: "Лиги", href: "/leagues" },
        {
            name: error ? "" : data?.competition.name,
            href: `/leagues/${leagueId}/league-calendar`,
            isLoading,
        },
    ];

    return (
        <Container maxWidth="lg">
            <Breadcrumbs crumbs={crumbs} sx={{ mb: "30px" }} />

            <Typography variant="h3" component="div" sx={{ mb: "20px" }}>
                Матчи
            </Typography>

            <MatchesDataContainer matchesPerPage={7} />
        </Container>
    );
};

export default LeagueCalendar;
