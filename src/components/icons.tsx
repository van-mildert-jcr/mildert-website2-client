/*
The contents of this file are largely based upon
https://github.com/shadcn-ui/ui/blob/1f0a7008d6194e2c45b4ec250683e155f34be13f/apps/www/config/site.ts
Copyright (c) 2023 shadcn
shadcn licenses the referenced file to Van Mildert JCR under the MIT license.

Copyright (c) 2024 Van Mildert JCR
All rights reserved.
 */

import React from "react";

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo : (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>

    </svg>
  ),
}
