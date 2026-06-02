import thumbnailHealthBridge from "../../../assets/thumbnails/healthbridge.png";
import thumbnailTodo from "../../../assets/thumbnails/todo.png";
import thumbnailSmartGhat from "../../../assets/thumbnails/smartghat.png";
import thumbnailNexus from "../../../assets/thumbnails/nexus.png";
import thumbnailDataViz from "../../../assets/thumbnails/dataviz.png";
import thumbnailPortfolio from "../../../assets/thumbnails/portfolio3d.png";
import thumbnailAI from "../../../assets/thumbnails/ai-assistant.png";
import thumbnailMusic from "../../../assets/thumbnails/music-player.png";

import type { ProjectPreview } from "../../types";



export default [
  {
    title: "HealthBridge",
    slug: "healthbridge",
    thumbnail: thumbnailHealthBridge,
    description:
      "Emergency healthcare platform with real-time hospital bed & blood availability and AI-powered recommendations",
    link: "https://github.com/kuntal131204/HealthBridge-Emergency-Healthcare-Resource-Platform.git"
  },
  {
    title: "To-Do List",
    slug: "todo",
    thumbnail: thumbnailTodo,
    description:
      "Android task management app with reminders, notifications, and persistent storage",
    link: "https://github.com/kuntal131204/To-Do-List"
  },
  {
    title: "Smart Ghat",
    slug: "smartghat",
    thumbnail: thumbnailSmartGhat,
    description:
      "IoT-based dashboard for monitoring Kolkata’s heritage ghats with real-time data and analytics",
    link: "https://github.com/kuntal131204/Smart-Ghat-CalcuttaHacks"
  },
  {
    title: "Nexus",
    slug: "nexus",
    thumbnail: thumbnailNexus,
    description:
      "Real-time chat and communication platform with WebSocket-based messaging and modern UI",
    link: "https://github.com/kuntal131204/nexus"
  },
  {
    title: "DataViz Dashboard",
    slug: "dataviz",
    thumbnail: thumbnailDataViz,
    description:
      "Interactive analytics dashboard with charts, real-time data streaming, and exportable reports",
    link: "https://github.com/kuntal131204/dataviz"
  },
  {
    title: "Immersive 3D Portfolio",
    slug: "portfolio3d",
    thumbnail: thumbnailPortfolio,
    description:
      "Award-winning 3D portfolio built with Three.js, GSAP, and custom shaders",
    link: "https://github.com/kuntal131204/portfolio3d"
  },
  {
    title: "AI Writing Assistant",
    slug: "ai-assistant",
    thumbnail: thumbnailAI,
    description:
      "GPT-powered writing assistant with context memory and multi-document workspace",
    link: "https://github.com/kuntal131204/ai-assistant"
  },
  {
    title: "Melodify — Music Player",
    slug: "music-player",
    thumbnail: thumbnailMusic,
    description:
      "Spotify-integrated music player with animated UI and personalized playlists",
    link: "https://github.com/kuntal131204/music-player"
  },
] as const satisfies ProjectPreview[];