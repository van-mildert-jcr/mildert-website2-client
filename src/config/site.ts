/*
The contents of this file are largely based upon
https://github.com/shadcn-ui/ui/blob/1f0a7008d6194e2c45b4ec250683e155f34be13f/apps/www/config/site.ts
Copyright (c) 2023 shadcn
shadcn licenses the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

export const siteConfig = {
  name: "Van Mildert JCR",
  url: "https://mildert.co.uk",
  ogImage: "https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg", // TODO
  description: "Home of Van Mildert College Junior Common Room. Van Mildert College is one of Durham University's 17 distinct colleges.",
  links: {
    "github": "https://github.com/van-mildert-jcr"
  }
}

export type SiteConfig = typeof siteConfig
