import { useData, useLanguage } from "../../../../state";
import styles from "../Main.module.scss";

function About() {
    const { data } = useData();
    const { language } = useLanguage();

    const about = data?.[language].about ?? {}

    return (
        <div className={`${styles.rightDot} ${styles.line} col-span-8`}>
            <div className="rounded-2xl bg-gray-lightest2 dark:bg-gray-darker dark:shadow-primary-lighter p-6 flex flex-col justify-center h-full border-gray-lighter border-2 dark:border-gray-dark">
                <h2 className="text-heading-2-bold">
                    {about.about?.item}
                </h2>
                <p className="text-body-2 mt-4">
                    {about.about?.details}
                </p>
            </div>
        </div>
    )
}

export default About