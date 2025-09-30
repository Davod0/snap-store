import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#008080",
        color: "white",
        py: 3,
        mt: { xs: 6, sm: 10 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ mb: 1.5, fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        Snap Store
      </Typography>
      <Typography
        variant="body2"
        sx={{
          opacity: 0.85,
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        All rights reserved 2025
      </Typography>
    </Box>
  );
}
