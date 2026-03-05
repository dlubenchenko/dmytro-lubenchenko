import { useData, useLanguage } from "../../../../state";

function Contacts() {
  const { data } = useData();
  const { language } = useLanguage();

  const contacts = data?.[language].contacts ?? {};

  const email = contacts.email;
  const phone = contacts.phone;
  const address = contacts.address;

  const emailDetails = email?.details ?? "";
  const emailHref = emailDetails.includes("@")
    ? `mailto:${emailDetails}`
    : `mailto:${emailDetails}@gmail.com`;

  return (
    <div className="rounded-2xl bg-gray-lightest2 dark:bg-gray-darker dark:shadow-primary-lighter p-6 flex flex-col justify-center border-gray-lighter border-2 dark:border-gray-dark col-span-4">
      <div className="flex gap-5 items-center">
        <div className="bg-gray rounded-[100%] p-2 w-12 h-12 flex items-center justify-center">
          <img src="/assets/aside/contacts/mail.svg" alt="Email" className="w-7" />
        </div>
        <div>
          <div className="text-caption-1 text-gray dark:text-gray-light">{email?.item}</div>
          <a href={emailHref} className="text-body-2-bold dark:text-gray-lighter text-gray">
            {emailDetails}
          </a>
        </div>
      </div>

      <div className="flex gap-5 mt-5 items-center">
        <div className="bg-gray rounded-[100%] p-2 w-12 h-12 flex items-center justify-center">
          <img src="/assets/aside/contacts/phone.svg" alt="Phone" className="w-6" />
        </div>
        <div>
          <div className="text-caption-1 text-gray dark:text-gray-light">{phone?.item}</div>
          <div className="text-body-2-bold dark:text-gray-lighter text-gray-dark">{phone?.details}</div>
        </div>
      </div>

      <div className="flex gap-5 mt-5 items-center">
        <div className="bg-gray rounded-[100%] p-2 w-12 h-12 flex items-center justify-center">
          <img src="/assets/aside/contacts/address.svg" alt="Address" className="w-5" />
        </div>
        <div>
          <div className="text-caption-1 text-gray dark:text-gray-light">{address?.item}</div>
          <div className="text-body-2-bold dark:text-gray-lighter text-gray-dark">{address?.details}</div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;