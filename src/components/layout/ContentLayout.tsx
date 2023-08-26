import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = {
    children: ReactNode;
};
const ContentLayout = (props: Props) => {
    return (
        <Container maxWidth="lg">
            {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
            <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", marginTop: 10 }}>
                {props.children}
            </Box>
        </Container>
    );
};

export default ContentLayout;
