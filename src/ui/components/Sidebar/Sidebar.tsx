import { Contacts, Languages, Personal, PhotoTile, Preference, Social } from "..";

export const Sidebar = () => {
    return (
        <div className="grid max-[640px]:grid-cols-2 max-[420px]:grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3">
            <Preference />
            <Personal />
            <PhotoTile />
            <Contacts />
            <Social />
            <Languages />
        </div>
    );
};