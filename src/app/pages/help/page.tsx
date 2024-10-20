'use client';
import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import { Container } from "@mui/material";

export default function Help() {
	return <Container>
		<Navigation current={'help'}/>
		<Footer/>
	</Container>;
}