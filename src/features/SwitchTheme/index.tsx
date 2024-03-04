import React, { FC } from "react";

import { IconMoon, IconSun } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/atoms";

export const SwitchTheme: FC = () => (
  <Button theme="inherit" radius="normal">
    {true ? <IconSun /> : <IconMoon />}
  </Button>
);
