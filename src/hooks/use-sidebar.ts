import { SidebarContext } from "contexts";
import { useRecoilState } from "recoil";
export const useSidebar = () => {
  const [sidebar, setSidebar] = useRecoilState(SidebarContext);
  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false)
  return { sidebar , toggleSidebar , closeSidebar }
};
