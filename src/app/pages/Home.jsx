import {
  Box,
  Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import mantra_gor from "../../static/avatar.png";
import { useLocation } from "react-router-dom";
import { links } from "./links";
import "../styles/style.css";

export default function Home({ setSelectedIndex }) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = "Mantra Gor | Portfolio";
  }, [pathname]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
    >
      <Grid item xs={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box display="flex" sx={{ justifyContent: "center" }}>
            <img
              src={mantra_gor}
              width="120px"
              height="120px"
              alt="Mantra Gor"
              loading="lazy"
            />
          </Box>
          <Box>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <h1 className="heading">Mantra Gor</h1>
              {/* <Typography variant="h3">Mantra Gor</Typography> */}
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Typography className="title" variant="subtitle1" gutterBottom>
                ReactJS Developer{" "}
                <Link
                  sx={{
                    fontStyle: "italic",
                    cursor: "pointer",
                  }}
                >
                  @AeonX Digital Solutions
                </Link>{" "}
                | MERN Stack Developer | Java Enthusiast |
                <Typography>Crafting Tomorrow's Digital Solutions</Typography>
              </Typography>
            </Grid>
            <Grid
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
            >
              <Stack direction="row" spacing={0.4}>
                {links.map((link) => (
                  <Tooltip key={link.index} title={link.title} arrow>
                    <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                    >
                      <IconButton color="inherit">{link.icon}</IconButton>
                    </Link>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
