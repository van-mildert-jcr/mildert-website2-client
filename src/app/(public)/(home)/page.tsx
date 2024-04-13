import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WelcomeCarousel } from "@/components/welcome-carousel";

export default function Home() {
  return (
    <div>
      <WelcomeCarousel />

      <div className="py-6 grid grid-cols-1 lg:grid-cols-4 lg:gap-6">
        <Card className="lg:col-span-3">
          <CardContent className="pt-6">
            lorem ipsum
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What&apos;s On</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>something here</li>
              <li>something there</li>
              <li>something everywhere</li>
            </ul>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}
