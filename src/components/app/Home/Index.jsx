// app/page.js (Main Page)
"use client";

import { Box } from "@chakra-ui/react";
import LoginForm from "./Login";
import InfoBanner from "./Info";
import FeatureCards from "./FeatureCards";

export default function HomePage() {
  return (
    <Box
      bgImage="url('/signup-bg.png')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
    >
     
      <LoginForm />
     
      <FeatureCards />
      
    </Box>
  );
}
