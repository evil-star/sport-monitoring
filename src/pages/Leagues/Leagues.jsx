import { Container } from "@mui/material";
import LeaguesListContainer from "../../common/containers/LeaguesListContainer";

const Home = () => {
    return (
        <Container maxWidth="lg">
            <LeaguesListContainer leaguesPerPage={9} />
        </Container>
    );
};

export default Home;
