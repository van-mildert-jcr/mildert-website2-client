import { Metadata } from "next"
import Balancer from "react-wrap-balancer";

import {
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import {
  Tile,
  TileBackground,
  TileImage,
  TileContent,
  TileGrid,
  TileForeground,
  TileLink
} from "@/components/ui/tile-grid"
import {
  ResourcesPage,
  ResourcesPageBreadcrumb,
  ResourcesPageContent,
  ResourcesPageTitle,
} from "@/components/resources-page";

export const metadata: Metadata = {
  title: "Events",
}

export default function Home() {
  return (
    <ResourcesPage>
      <ResourcesPageBreadcrumb>
        <BreadcrumbItem>
          <BreadcrumbPage>Events</BreadcrumbPage>
        </BreadcrumbItem>
      </ResourcesPageBreadcrumb>
      <ResourcesPageTitle value="Events"/>

      <ResourcesPageContent>
        <TileGrid>
          <Tile alignForeground="left">
            <TileLink href="/resources/events/summer-ball">
              <TileBackground>
                <TileImage src="/photos/college-feather.png" alt="Photo of the feather sculpture at Van Mildert College" width={1200} height={800}/>
              </TileBackground>
              <TileForeground className="bg-yellow-accent">
                <TileContent className="text-yellow-accent-foreground text-center font-bold">
                  <Balancer>Summer Ball</Balancer>
                </TileContent>
              </TileForeground>
            </TileLink>
          </Tile>
          <Tile alignForeground="right">
            <TileLink href="/resources/events/winter-ball">
              <TileBackground />
              <TileForeground className="bg-yellow-accent">
                <TileContent className="text-yellow-accent-foreground font-bold">
                    Winter Ball
                </TileContent>
              </TileForeground>
            </TileLink>
          </Tile>
          <Tile alignForeground="left">
            <TileLink href="/resources/events/bops">
              <TileBackground />
              <TileForeground className="bg-yellow-accent">
                <TileContent className="text-yellow-accent-foreground font-bold">
                  BOPs
                </TileContent>
              </TileForeground>
            </TileLink>
          </Tile>
          <Tile alignForeground="right">
            <TileLink href="/resources/events/mildert-day">
              <TileBackground />
              <TileForeground className="bg-yellow-accent">
                <TileContent className="text-yellow-accent-foreground font-bold">
                  Mildert Day
                </TileContent>
              </TileForeground>
            </TileLink>
          </Tile>
          <Tile alignForeground="left">
            <TileLink href="/resources/events/formals">
              <TileBackground />
              <TileForeground className="bg-yellow-accent">
                <TileContent className="text-yellow-accent-foreground font-bold">
                  Formals
                </TileContent>
              </TileForeground>
            </TileLink>
          </Tile>
        </TileGrid>
      </ResourcesPageContent>

    </ResourcesPage>
  )
}
