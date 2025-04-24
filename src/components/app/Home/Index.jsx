// app/page.js (Main Page)
"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoginForm from "./Login";
import FeatureCards from "./FeatureCards";

export default function HomePage() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    let image = "";

    if (hour >= 5 && hour < 12) {
      // Morning
      image = "https://images.unsplash.com/photo-1505483531331-361a4f54774a?auto=format&fit=crop&w=1600&q=80";
    } else if (hour >= 12 && hour < 17) {
      // Afternoon
      image = "https://images.unsplash.com/photo-151808107327825471?auto=format&fit=crop&w=1600&q=80";
    } else if (hour >= 17 && hour < 20) {
      // Evening
      image = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80";
    } else {
      // Night
      image = "https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?auto=format&fit=crop&w=1600&q=80";
    }

    setBgImage(image);
  }, []);

  return (
    <Box
      bgImage={`url('${bgImage}')`}
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
    >
      <LoginForm />
      <FeatureCards />
    </Box>
  );
}
