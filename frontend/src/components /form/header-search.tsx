'use client';
import { useRef, useState } from 'react';
import { Search } from '../svg';
import useClickOutside from '@/hooks/use-click-outside';
import { useRouter } from 'next/navigation';

export default function HeaderSearch() {
    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef<HTMLFormElement | null>(null);
    useClickOutside(searchRef as React.RefObject<HTMLElement>, () => setActive(false));
    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!searchValue) return;
        router.push(`/room-1?searchTerm=${searchValue}`);
    }
    return (
        <form onSubmit={handleSubmit} ref={searchRef} action="#" className={`tp-header-form tp-header-input-toggle ${active ? 'active' : ''}`}>
            <input onClick={() => setActive(!active)} onChange={(e) => setSearchValue(e.target.value)} className="tp-header-search-input" type="text" placeholder="Search..." />
            <button className="tp-header-submit-btn" type="submit">
                <span>
                    <Search />
                </span>
            </button>
        </form>
    )
}
