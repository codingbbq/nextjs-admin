"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Search = ({placeholder}) => {

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathName = usePathname();

    const handleSearch = (event) => {
        const params = new URLSearchParams(searchParams);
        if(event.target.value) {
            params.set("q", event.target.value);
        }else {
            params.delete("q");
        }
        replace(`${pathName}?${params}`);
    }

    return (
        <>
            <div className={styles.container}>
                <MdSearch />
                <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
            </div>
        </>
    )
};

export default Search;