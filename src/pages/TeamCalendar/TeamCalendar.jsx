import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetTeamQuery } from "../../api/teamsApi";
import MatchesDataContainer from "../../common/containers/MatchesDataContainer";
import Breadcrumbs from "../../common/ui/Breadcrumbs/Breadcrumbs";

const TeamCalendar = () => {
    const { teamId } = useParams();
    const { data, error, isLoading } = useGetTeamQuery({
        id: teamId,
    });

    const crumbs = [
        { name: "Команды", href: "/teams" },
        {
            name: error ? "" : data?.name,
            href: `/teams/${teamId}/team-calendar`,
            isLoading,
        },
    ];

    return (
        <Container maxWidth="lg">
            <Breadcrumbs crumbs={crumbs} sx={{ mb: "30px" }} />

            <Typography variant="h3" component="div" sx={{ mb: "20px" }}>
                Матчи
            </Typography>

            <MatchesDataContainer queryHookType="team" matchesPerPage={7} />
        </Container>
    );
};

export default TeamCalendar;
