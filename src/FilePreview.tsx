// Copyright Osmiumtech 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledLoader } from "@osmiumtech/components-rnw";
import { getFontAwesomeGlyphFromMime } from "@osmiumtech/components-rnw";
import { Image } from "@rneui/themed";
import { getMimeFromUri } from "./uri";
import { StyledFontAwesome } from "@osmiumtech/components-rnw";
import * as Linking from "expo-linking";
import { useBufferedState } from "@osmiumtech/hooks-react";

const useDataUriCache = (dataUri: string | null | undefined) =>
  useBufferedState<string | null | undefined>([dataUri, () => {}]);

export const FilePreview = ({
  dataUri = undefined as string | null | undefined,
  dataUriCache: [dataUriCache, setDataUriCache] = useDataUriCache(dataUri),
}): JSX.Element =>
  dataUriCache === "" ? (
    <StyledFontAwesome name={"warning"} />
  ) : dataUriCache === undefined ? (
    <StyledLoader />
  ) : dataUriCache === null ? (
    <StyledFontAwesome name={"upload"} />
  ) : getMimeFromUri(dataUriCache).includes("image") ? (
    <Image
      style={{ width: 120, height: 120 }}
      source={{ uri: dataUriCache }}
      onError={(e) => (
        console.log("FilePreviewE1", e.nativeEvent.error),
        setDataUriCache?.(() => "")
      )}
      onPress={() => Linking.openURL(dataUriCache)}
    />
  ) : (
    <StyledFontAwesome
      name={getFontAwesomeGlyphFromMime(getMimeFromUri(dataUriCache))}
      onPress={() => Linking.openURL(dataUriCache)}
    />
  );
