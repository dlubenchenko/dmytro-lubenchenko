import { LanguageToggle, ThemeToggle } from ".";
import { useLanguage } from "../../state/LanguageContext";

export const Layout = () => {
    const { t, isLoading } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-3 color-white text-gray-darker dark:bg-gray-darkest dark:text-gray-lighter">
            <div className="flex justify-between mb-8 w-full">
                <ThemeToggle />
                <LanguageToggle />
            </div>
            <div className="text-2xl font-bold">
                {isLoading ? "Loading…" : t("hello")}
            </div>
        </div>
    );
};