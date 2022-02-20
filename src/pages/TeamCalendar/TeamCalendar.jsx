import {
    Breadcrumbs,
    Container,
    Link,
    Skeleton,
    Typography,
} from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetTeamQuery } from "../../api/teamsApi";
import MatchesDataContainer from "../../common/containers/MatchesDataContainer";

const TeamCalendar = () => {
    const { teamId } = useParams();
    const { data, error, isLoading } = useGetTeamQuery({
        id: teamId,
    });

    return (
        <Container maxWidth="lg">
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: "30px" }}>
                <Link
                    underline="hover"
                    color="inherit"
                    component={NavLink}
                    to="/teams"
                >
                    Команды
                </Link>
                <Typography color="text.primary">
                    {error ? (
                        ""
                    ) : isLoading ? (
                        <Skeleton sx={{ width: "100px" }} />
                    ) : (
                        data?.name
                    )}
                </Typography>
            </Breadcrumbs>

            <Typography variant="h3" component="div" sx={{ mb: "20px" }}>
                Матчи
            </Typography>

            <MatchesDataContainer queryHookType="team" matchesPerPage={7} />
        </Container>
    );
};

export default TeamCalendar;
