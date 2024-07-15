"use client";

import { FinalComponent } from "@/components/component/final-component";
import { InitialScreen } from "@/components/component/initial-screen";
import { LoadingScreen } from "@/components/component/loading-screen";
import Image from "next/image";
import { useState } from "react";

export type GeneratedImage = {
  generatedImage: string;
};

export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [ARGenerating, setARGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage>();

  const handleSubmit = async (prompt: string) => {
    setGenerating(true);
    setUserPrompt(prompt);
    console.log(prompt);
    // Uncomment this when using API
    // const response = await fetch(
    //   "https://7sfpdw.buildship.run/get-prompt-cloth-image",
    //   // process.env.NEXT_PUBLIC_GET_SCORE_WORKFLOW as string,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       prompt: prompt
    //     }),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    const data = {
      "generatedImage": "https://storage.googleapis.com/buildship-7sfpdw-us-central1/1721044494821.png",
      // "https://storage.googleapis.com/buildship-7sfpdw-us-central1/1721049608783.png"
    };
    console.log("new one");
    // await response.json();
    setGeneratedImage(data);
    setGenerating(false);
  };

  const handleARSubmit = async () => {
    setARGenerating(true);
    console.log("AR opening");
    
    setARGenerating(false);
  };

  const reset = () => {
    setUserPrompt("");
    setGeneratedImage(undefined);
  };

  if (generating)
    return <LoadingScreen />;

  if (generatedImage)
    return (
      <FinalComponent
        image={generatedImage!}
        userPrompt={userPrompt}
        reset={reset}
      />
    );

  // return <InitialScreen onSubmit={handleSubmit} />;
  return <LoadingScreen />;
}