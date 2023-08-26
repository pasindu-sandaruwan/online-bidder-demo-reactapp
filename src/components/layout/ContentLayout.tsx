import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = {
    children: ReactNode;
};
const ContentLayout = (props: Props) => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
            {props.children}
        </Container>
    );
};

export default ContentLayout;
