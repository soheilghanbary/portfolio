import { paletteContext } from "contexts";
import { useRecoilState } from "recoil";
export const usePalette = () => {
  const [palette, setPalette] = useRecoilState(paletteContext);
  const setColorPalette = (key: string) => setPalette(key);
  return { setColorPalette , palette }
};
