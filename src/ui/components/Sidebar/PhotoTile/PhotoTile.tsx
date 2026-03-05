import styles from "./PhotoTile.module.scss";

const PhotoTile = () => (
    <div className={`rounded-2xl border-gray-lighter border-2 dark:border-gray-dark col-span-2 overflow-hidden w-full h-65 ${styles.photoTile}`}>
        <img
            src="/assets/aside/personal/lubenchenko_photo.jpg"
            alt="Dmytro Lubenchenko"
            className={`rounded-md ${styles.photo} object-[center_-35px] h-full object-cover w-full`}
        />
    </div>
);

export default PhotoTile;