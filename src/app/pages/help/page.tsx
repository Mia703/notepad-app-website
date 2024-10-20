"use client";
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import SearchIcon from "@mui/icons-material/Search";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SchoolIcon from "@mui/icons-material/School";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChatIcon from "@mui/icons-material/Chat";
import Top from "@/app/components/top";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

const CardList = [
  {
    key: 1,
    icon: <PowerSettingsNewIcon sx={{ color: "#121212" }} />,
    title: "Get started with Notepad",
    desc: "Welcome to Notepad! Learn how to use the app so you can get organized today!",
  },
  {
    key: 2,
    icon: <HelpOutlineIcon sx={{ color: "#121212" }} />,
    title: "FQ&A",
    desc: "Here you will find quick answers to commonly asked questions.",
  },
  {
    key: 3,
    icon: <SchoolIcon sx={{ color: "#121212" }} />,
    title: "Knowledge Base",
    desc: "Explore in-depth articles and guides to help you make the most of Notepad's capabilities.",
  },
  {
    key: 4,
    icon: <YouTubeIcon sx={{ color: "#121212" }} />,
    title: "Video Tutorials",
    desc: "Watch step-by-step videos on how to use all the key features and tools within Notepad.",
  },
  {
    key: 5,
    icon: <ChatIcon sx={{ color: "#121212" }} />,
    title: "Live Chat",
    desc: "Get instant support from our team to resolve any issues or answer any questions you have in real time.",
  },
];

export default function Help() {
  // prevents the search button's default submit of the search bar
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Container id="help-container">
      <Top />
      <Navigation current={"help"} />
      <Box
        component={"div"}
        id="search-container"
        className="my-[2rem] text-center"
      >
        <Typography variant="h2" className="mb-8 capitalize">
          How can we help you?
        </Typography>
        <Container
          component={"form"}
          id="search-form"
          className="inline-flex w-full"
        >
          <TextField
            id="search-bar"
            label="Search"
            type="text"
            name="search-bar"
            fullWidth
            autoFocus
            placeholder="Search..."
            variant="outlined"
            aria-label="search bar"
          />
          <IconButton
            id="search-bar-submit"
            type="submit"
            sx={{
              bgcolor: "#E054B9",
              borderRadius: "5px",
              p: 2,
              ml: 1,
            }}
            aria-label="search submit"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </IconButton>
        </Container>
      </Box>
      <Box
        component={"div"}
        id="help-cards-container"
        className="my-[4rem] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {CardList.map((cardItem) => {
          return (
            <Card
              variant="outlined"
              key={cardItem.key}
              className="border-2 border-transparent p-4 transition duration-200 ease-in-out hover:border-white"
            >
              <CardContent>
                <IconButton
                  size="large"
                  sx={{
                    mb: 2,
                    "&.Mui-disabled": {
                      backgroundColor: "#E0E0E0",
                    },
                  }}
                  disabled
                >
                  {cardItem.icon}
                </IconButton>
                <Typography
                  variant="h5"
                  className="mb-4 font-semibold text-white"
                >
                  {cardItem.title}
                </Typography>
                <Typography variant="body1">{cardItem.desc}</Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
      <Footer />
    </Container>
  );
}
