import { useData, useLanguage } from "../../../../state";

function Languages() {
    const { data } = useData();
    const { language } = useLanguage();

    const languages = data?.[language].languages ?? {};

    return (
        <div className="rounded-2xl stroke-3 bg-gray-lightest2 dark:bg-gray-darker dark:shadow-primary-lighter p-6 flex flex-col border-gray-lighter border-2 dark:border-gray-dark col-span-2">
            <p className="text-caption-1 text-gray dark:text-gray-light">{language === 'en' ? 'Languages' : 'Мови'}</p>
            <div>
                <div>{languages.ukrainian?.item}</div>
                <div className="text-caption-1 text-gray dark:text-gray-light">{languages.ukrainian?.details}</div>
            </div>
            <div>
                <div>{languages.english?.item}</div>
                <div className="text-caption-1 text-gray dark:text-gray-light">{languages.english?.details}</div>
            </div>
        </div>
    );
}

export default Languages;