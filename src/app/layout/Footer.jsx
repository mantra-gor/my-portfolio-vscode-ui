import React from "react";
import { Box, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import {
  VscRemote,
  VscError,
  VscWarning,
  VscBell,
  VscFeedback,
  VscCheck,
} from "react-icons/vsc";
import { IoIosGitBranch } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n } = useTranslation();
  return (
    <Box
      component={Paper}
      square
      elevation={0}
      // sx={{ height: '3vh' }}
      sx={{ height: "20px", color: "white", width: "100vw" }}
      display="flex"
    >
      <Grid container>
        {/* Remote Icon Panel */}
        <Grid
          item
          sx={{
            width: 35,
            backgroundColor: "#2E8461",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#329171",
            },
          }}
        >
          <VscRemote fontSize="0.9rem" />
        </Grid>

        {/* Git Branch + Error/Warning Panel */}
        <Grid
          item
          sx={{
            backgroundColor: "#3279CB",
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ pl: 1, alignItems: "center" }}
          >
            {/* Git Branch Link */}
            <Box
              component={Link}
              href="https://github.com/mantra-gor/my-vscode-portfolio"
              target="_blank"
              underline="none"
              color="white"
              sx={{
                px: 0.5,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1f8ad2",
                },
              }}
            >
              <IoIosGitBranch fontSize="0.9rem" />
              <Typography sx={{ ml: 0.5, fontSize: "0.6rem" }}>main</Typography>
            </Box>

            {/* Error & Warning Section */}
            <Stack direction="row" spacing={0.5} alignItems="center">
              {/* Errors */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  px: 0.5,
                  py: 0.3,
                  "&:hover": {
                    backgroundColor: "#1f8ad2",
                  },
                }}
              >
                <VscError fontSize="0.9rem" />
              </Box>
              <Typography sx={{ fontSize: "0.6rem" }}>0</Typography>

              {/* Warnings */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  px: 0.5,
                  py: 0.3,
                  "&:hover": {
                    backgroundColor: "#1f8ad2",
                  },
                }}
              >
                <VscWarning fontSize="0.9rem" />
              </Box>
              <Typography sx={{ fontSize: "0.6rem" }}>0</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Right Panel - DE | Prettier | Feedback | Bell */}
        <Grid
          item
          sx={{
            backgroundColor: "#3279CB",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 2,
          }}
        >
          <Stack direction="row" spacing={0.8}>
            {/* DE */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1f8ad2",
                },
              }}
            >
              <Typography
                sx={{ fontSize: "0.6rem", textTransform: "uppercase" }}
              >
                {i18n.language}
              </Typography>
            </Box>

            {/* Prettier */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1f8ad2",
                },
              }}
            >
              <VscCheck fontSize="0.9rem" />
              <Typography sx={{ ml: 0.5, fontSize: "0.6rem" }}>
                Prettier
              </Typography>
            </Box>

            {/* Feedback */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1f8ad2",
                },
              }}
            >
              <VscFeedback fontSize="0.9rem" />
            </Box>

            {/* Notifications */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.5,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#1f8ad2",
                },
              }}
            >
              <VscBell fontSize="0.9rem" />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
