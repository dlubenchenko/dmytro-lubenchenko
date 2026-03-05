import { useData, useLanguage } from "../../../../state";
import styles from "./Personal.module.scss";

function Personal() {
  const { data } = useData();
  const { language } = useLanguage();

  const header = data?.[language].header ?? {};


  return (
    <div className="rounded-2xl bg-gray-lightest2 dark:bg-gray-darker dark:shadow-primary-lighter p-6 flex flex-col justify-between border-gray-lighter border-2 dark:border-gray-dark col-span-4">
      <div>
        <div className="text-hero">
          {header.name?.details} {header.surname?.details}
        </div>
        <div className={`text-heading-1-bold ${styles.position}`}>
          {header.position?.details}
        </div>
      </div>
      <div className={`flex flex-col items-end ${styles.quotation}`}>
        <div className='text-heading-2-bold '>
          {header.quotation?.details}
        </div>
        <div className="text-caption-1 text-gray dark:text-gray-light pr-7">
          {header.quotation_author?.details}
        </div>

      </div>
    </div>
  );
}

export default Personal;