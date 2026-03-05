import { useData, useLanguage } from "../../../../state";

function Social() {
    const { data } = useData();
    const { language } = useLanguage();

    const socials = data?.[language].socials ?? {};

    return (
        <div className="rounded-2xl bg-gray-lightest2 dark:bg-gray-darker dark:shadow-primary-lighter p-6 flex flex-col border-gray-lighter border-2 dark:border-gray-dark col-span-3">
            <p className="text-caption-1 text-gray dark:text-gray-light">{language === 'en' ? 'Socials' : 'Соціальні мережі'}</p>
            <div className="flex gap-5 mt-5 items-center">
                <div className="border-2 border-white rounded-[100%] p-2 w-12 h-12 flex items-center justify-center">
                    <img src="/assets/aside/social/github.svg" alt="Github" className="invert" />
                </div>
                <div>
                    <div className="text-caption-1 text-gray dark:text-gray-light">{socials.github?.item}</div>
                    <div>{socials.github?.details}</div>
                </div>
            </div>
            <div className="flex gap-5 mt-5 items-center">
                <div className="border-2 border-white rounded-[100%] p-2 w-12 h-12 flex items-center justify-center">
                    <img src="/assets/aside/social/linkedin.svg" alt="LinkedIn" className="w-8" />
                </div>
                <div>
                    <div className="text-caption-1 text-gray dark:text-gray-light">{socials.linkedin?.item}</div>
                    <div>{socials.linkedin?.details}</div>
                </div>
            </div>
            <div className="flex gap-5 mt-5 items-center">
                <div className="border-2 border-white rounded-[100%] p-2 w-12 h-12 flex items-center justify-center">
                    <img src="/assets/aside/social/djinni.svg" alt="Djinni" className="w-8" />
                </div>
                <div>
                    <div className="text-caption-1 text-gray dark:text-gray-light">{socials.djinni?.item}</div>
                    <div>{socials.djinni?.details}</div>
                </div>
            </div>
        </div>
    );
}

export default Social;