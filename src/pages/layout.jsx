import { Outlet } from 'react-router-dom';
import { SearchMovies } from '@/components';

function Layout() {
    return (
        <>
            <SearchMovies />
            <Outlet />
        </>
    );
}

export default Layout;
