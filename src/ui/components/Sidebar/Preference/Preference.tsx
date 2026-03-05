import { LanguageToggle } from "../../common/LanguageToggle"
import { ThemeToggle } from "../../common/ThemeToggle"

function Preference() {
    return (
        <div className="rounded-2xl bg-gray-lightest2 dark:bg-gray-darker dark:shadow-primary-lighter px-4 py-2 flex items-center flex-wrap gap-3 border-gray-lighter dark:border-gray-dark border-2 justify-around col-span-3">
            <ThemeToggle />
            <LanguageToggle />
        </div>
    )
}

export default Preference