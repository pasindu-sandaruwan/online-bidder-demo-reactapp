import React, { useState, useEffect, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
// @material-ui/core components

// import themeColors from "assets/theme/colors";
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    makeStyles,
    Modal,
    Paper,
} from "@mui/material";

interface Props {
    children: ReactNode;
    show: boolean;
    title: string;
    hide(): boolean;
}

const CustomPopup = (props: Props) => {
    //const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    
    const handleClose = () => {
        setOpen(false);
        props.hide();
    };

    useEffect(() => {
        let isUnmounted = false;
        !isUnmounted && setOpen(props.show);
        return () => {
            isUnmounted = true;
        };
    }, [props.show]);

    return (
        <>
            <div>
                <Modal open={open}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: 8,
                            outline: "none",
                            width: "75%",
                        }}
                    >
                        <Paper
                            style={{
                                overflowY: "auto",
                                borderRadius: 10,
                            }}
                        >
                            <CardHeader
                                subheader={
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <Box component={"h5"} style={{ whiteSpace: "nowrap" }}>
                                                <strong> {props.title} </strong>
                                            </Box>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={6}
                                            style={{
                                                display: "flex",
                                                justifyContent: "right",
                                                alignItems: "center",
                                            }}
                                        >
                                            <IconButton onClick={handleClose}>
                                                <CloseIcon color="error" />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                }
                            ></CardHeader>
                            <CardContent
                                style={{
                                    width: "auto",
                                    maxHeight: "75vh",
                                    borderRadius: 8,
                                    outline: "none",
                                }}
                            >
                                {props.children}
                            </CardContent>
                        </Paper>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default CustomPopup;