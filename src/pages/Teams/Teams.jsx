import {Container} from "@mui/material";
import TeamsListContainer from "../../common/containers/TeamsListContainer";

const Teams = () => {
  return (
    <Container maxWidth="lg">
      <TeamsListContainer teamsPerPage={10} />
    </Container>
  );
};

export default Teams;
