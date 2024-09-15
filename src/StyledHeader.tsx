// Copyright Osmiumtech 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React from "react";
import { useNavigation } from "@osmiumtech/hooks-expo";
import { StyledText } from "@osmiumtech/components-rnw";
import { IconButtonProps, IconButton } from "@osmiumtech/components-rnw";
import { AlignedView } from "@osmiumtech/components-rnw";
import { Gap } from "@osmiumtech/components-rnw";

export const StyledHeader = ({
  title = "",
  actions = Array<IconButtonProps | false>(),
  back = useNavigation().up as (() => void) | undefined,
}) => (
  <AlignedView
    left={back && <IconButton icon="arrow-back" onPress={back} />}
    center={
      <StyledText center bold uppercase>
        {title}
      </StyledText>
    }
    right={
      actions
        ?.filter((a): a is IconButtonProps => !!a)
        .map((a) => <IconButton key={a.icon} {...a} />) ?? <Gap />
    }
  />
);
export type StyledHeaderProps = Parameters<typeof StyledHeader>[0];
