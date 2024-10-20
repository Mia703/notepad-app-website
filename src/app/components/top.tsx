"use client";
import { Button, Container, IconButton } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
export default function Top() {
  // onclick scrolls to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container component={"div"} className="fixed bottom-4 right-4 text-right lg:hidden">
      <IconButton
        sx={{
          backgroundColor: "#E054B9",
          "&:hover": {
            backgroundColor: "#E054B9",
          },
        }}
        size="large"
        onClick={scrollToTop}
        aria-label="scroll to top"
      >
        <KeyboardDoubleArrowUpIcon />
      </IconButton>
    </Container>
  );
}
