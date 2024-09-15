// Copyright Osmiumtech 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledLoader, StyledView } from "@osmiumtech/components-rnw";
import { FilePreview } from "./FilePreview";
import { UseFile2 } from "./UseFile2";
import { useFileUri } from "./useFileUri";

export const FileView = ({
  file: [file, setFile] = [undefined, undefined] as UseFile2,
  fileUri: [fileUri] = useFileUri([file, setFile]),
}): JSX.Element =>
  file ? (
    <StyledView center middle mediumSquare outline overflowHidden>
      <FilePreview dataUri={fileUri} />
    </StyledView>
  ) : (
    <StyledLoader />
  );
