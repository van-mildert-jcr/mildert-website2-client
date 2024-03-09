import React from "react";
import ServerError from "@/components/server-error";

export default function NotFound() {
  return (
    <ServerError statusCode="404" conciseMessage="Not Found" message="The page could not be found" />
  )
}
