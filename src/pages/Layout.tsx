import { About, Contacts, Experience, Languages, Loader, Main, Personal, PhotoTile, Preference, Sidebar, Social } from "../ui/components";
import { useData } from "../state/DataContext";

export const Layout = () => {
    const { loading } = useData();

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-darkest">
                <Loader />
            </div>
        );
    }

    return (
        <div className="noise font-sans min-h-screen bg-gray-lighter dark:bg-gray-darker dark:text-white py-5">
            <div className="flex justify-center items-start min-h-screen">
                <div className="w-full max-w-4/5 grid grid-cols-12 gap-4 rounded-2xl stroke-1 bg-gray-light dark:bg-gray-darkest p-4 noise items-stretch">
                    <PhotoTile />
                    <About />
                    <Languages />
                    <Personal />
                    <Experience />
                    <Preference />
                    <Contacts />
                    <Social />
                </div>
            </div>
        </div>
    );
};