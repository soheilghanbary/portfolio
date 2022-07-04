import { usePalette } from "hooks/use-palette";
import { useSidebar } from "hooks/use-sidebar";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = () => {
  const { toggleSidebar, sidebar, closeSidebar } = useSidebar();
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const { palette, setColorPalette } = usePalette();
  const router = useRouter()

  return (
    <>
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <div className="p-8">
          <h3 className="text-2xl font-medium mb-4">تنظیمات</h3>
          <h4 className="text-base">پالت رنگ</h4>
          <div className="flex items-center gap-4 my-4">
            <div
              onClick={() => setColorPalette("red")}
              className="p-1 rounded-full border-2 border-transparent hover:border-rose-400 cursor-pointer duration-200 ease-in-out"
            >
              <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
            </div>
            <div
              onClick={() => setColorPalette("blue")}
              className="p-1 rounded-full border-2 border-transparent hover:border-sky-400 cursor-pointer duration-200 ease-in-out"
            >
              <div className="w-6 h-6 bg-sky-400 rounded-full"></div>
            </div>
            <div
              onClick={() => setColorPalette("primary")}
              className="p-1 rounded-full border-2 border-transparent hover:border-indigo-400 cursor-pointer duration-200 ease-in-out"
            >
              <div className="w-6 h-6 bg-indigo-400 rounded-full"></div>
            </div>
            <div
              onClick={() => setColorPalette("yellow")}
              className="p-1 rounded-full border-2 border-transparent hover:border-amber-400 cursor-pointer duration-200 ease-in-out"
            >
              <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
            </div>
            <div
              onClick={() => setColorPalette("green")}
              className="p-1 rounded-full border-2 border-transparent hover:border-teal-400 cursor-pointer duration-200 ease-in-out"
            >
              <div className="w-6 h-6 bg-teal-400 rounded-full"></div>
            </div>
          </div>
          <h4 className="text-base" onClick={toggleTheme}>
            تم تاریک
          </h4>
          <input onClick={toggleTheme} type="checkbox" id="switch" />
          <label htmlFor="switch">Toggle</label>
          <div className="mt-8">
            <Link href={"/"} locale="en">
              <button className={`p-3 border border-zinc-200/30 ${router.locale === 'en' ? 'rounded-l-lg' : 'rounded-r-lg'}`}>
                EN
              </button>
            </Link>
            <Link href={"/"} locale="fa">
              <button className={`p-3 border border-zinc-200/30 ${router.locale === 'en' ? 'rounded-r-lg' : 'rounded-l-lg'}`}>
                FA
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={closeSidebar}
        className={`sidebar-overlay ${sidebar ? "active" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
