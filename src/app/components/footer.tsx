import { Box, Container } from "@mui/material";
import Link from "next/link";

const NavigationList = [
  {
    key: 1,
    name: "Home",
    link: "/",
  },
  {
    key: 2,
    name: "About",
    link: "#",
  },
  {
    key: 3,
    name: "Help Center",
    link: "/pages/help",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="my-[1rem] flex flex-row items-center justify-between text-sm text-[#C1C1C1]"
    >
      <Box id="logo" component={"div"}>
        <Link href={"/"}>Notepadd</Link>
      </Box>
      <Box component={"div"}>
        {NavigationList.map((navItem) => {
          return (
            <Link key={navItem.key} href={navItem.link} className="mx-4">
              {navItem.name}
            </Link>
          );
        })}
      </Box>
    </footer>
  );
}