import { backdropClasses, Box } from "@mui/material";
import { styled } from "@mui/system";
export const LinkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  gap: "5px",
  "& img": {
    width: "100%",
  },
}));

