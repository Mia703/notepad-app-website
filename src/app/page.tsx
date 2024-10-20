import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import HomeScreen from "/public/home-screen.png";
import SearchScreen from "/public/search-screen.png";
import FilterScreen from "/public/filter-screen.png";
import TagScreen from "/public/tag-screen.png";
import Top from "./components/top";

const FeaturesList = [
  {
    key: 1,
    name: "Instant Search",
    desc: "Quickly find notes as you type with your responsive search bar, ensuring you never lose track of important information.",
    image: SearchScreen,
    imageAlt:
      "Screenshot of the Notepad app's search bar, located in the lower middle of the screen, displaying search results based on relevant keywords.",
  },
  {
    key: 2,
    name: "Filter by Time or Date",
    desc: "Easily organize your notes by filtering the based on the time or date notes were created or modified, giving you quick access to relevant content.",
    image: FilterScreen,
    imageAlt:
      "Screenshot of the Notepad app's filter dropdown menu. Located on top right, the drop down menu allows users to filter notes by time or date, with options titled 'By Time' or 'By Date'",
  },
  {
    key: 3,
    name: "Tagging System",
    desc: "Add customizable tags to your notes for efficient organization, making it simple to categorize and retrieve notes based on topics or themes.",
    image: TagScreen,
    imageAlt:
      "Screenshot of the Notepad app's customisable tags drop down men. Located on the top left, the drop down menu allows users organize and categorize notes by user-created hash tags",
  },
];

export default function Home() {
  return (
    <Container id="main-content" component={"main"}>
      <Top />
      {/* main navigation */}
      <Navigation current={"home"} />
      {/* header container */}
      <Box
        id="header-content"
        component={"div"}
        className="mt-5 grid grid-cols-1 md:grid-cols-2"
      >
        <Box
          component={"div"}
          className="left-container md:flex md:flex-col md:justify-center"
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "3em",
                lg: "5em",
              },
              marginBottom: 3,
            }}
          >
            All your notes, <span className="text-highlight">effortlessly</span>{" "}
            managed
          </Typography>
          <Typography variant="body1">
            Staying organized shouldn't slow you down. Notepad is designed for
            busy people who need a quick way to manage their thoughts, tasks,
            and ideas.
          </Typography>
          <Box component={"div"} className="buttons-container my-4">
            <Button
              variant="contained"
              startIcon={<AppleIcon />}
              size="medium"
              sx={{
                m: '0.3rem 1rem',
                ml: 0,
              }}
            >
              Apple App Store
            </Button>
            <Button
              variant="contained"
              startIcon={<GoogleIcon />}
              size="medium"
              sx={{
                m: '0.3rem 1rem',
                ml: 0,
              }}
            >
              Google Play Store
            </Button>
          </Box>
        </Box>
        <Box
          component={"div"}
          className="right-container my-10 flex flex-row justify-center"
        >
          <Image
            src={HomeScreen}
            alt="Notepad's home screen. Featuring a minimalist interface with options to organize notes by tag on the top left or by date or time on the top right. Notes are located horizontally in the middle of the screen, with mobile menu at the bottom with the home, search, new note, and settings button"
            className="md:w-[60%]"
          />
        </Box>
      </Box>
      {/* feature container */}
      <Box
        id="feature-content"
        component={"div"}
        className="my-[5rem] text-center"
      >
        <Typography variant="h2">
          Designed for{" "}
          <span className="text-highlight">Speed & Simplicity</span>
        </Typography>
        <Container
          id="features-container"
          className="my-[2rem] grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {FeaturesList.map((featureItem) => {
            return (
              <Container
                component={"div"}
                key={featureItem.key}
                className="feature my-[4rem] md:my-0 md:mt-[2rem]"
              >
                <Box>
                  <Image src={featureItem.image} alt={featureItem.imageAlt} />
                </Box>
                <Box className="feature-content my-4">
                  <Typography variant="h6" className="mb-4 text-white">
                    {featureItem.name}
                  </Typography>
                  <Typography variant="body1">{featureItem.desc}</Typography>
                </Box>
              </Container>
            );
          })}
        </Container>
      </Box>
      {/* call to action container */}
      <Container
        id="call-to-action"
        component={"div"}
        className="rounded-lg bg-[#585858] p-6 text-center sm:my-[5rem] lg:p-20"
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "3em",
              lg: "5em",
            },
            marginBottom: 3,
          }}
        >
          Try Notepad today
        </Typography>
        <Typography variant="body1">
          Start simplifying your life today with Notepad - where efficiency
          meets ease.
        </Typography>
        <Box component={"div"} className="buttons-container my-4 text-center">
          <Button
            variant="contained"
            startIcon={<AppleIcon />}
            size="medium"
            sx={{
                m: '0.3rem 1rem',
                ml: 0,
              }}
          >
            Apple App Store
          </Button>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            size="medium"
            sx={{
                m: '0.3rem 1rem',
                ml: 0,
              }}
          >
            Google Play Store
          </Button>
        </Box>
      </Container>
      {/* footer */}
      <Footer />
    </Container>
  );
}
