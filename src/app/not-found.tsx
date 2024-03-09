import React from "react";
import { Metadata } from "next";
import { ServerError } from "@/components/server-error";

export const metadata: Metadata = {
  title: "Not Found",
}

export default function NotFound() {
  return (
    <ServerError statusCode="404" message="The page could not be found" />
  )
}
