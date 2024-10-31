import DashboardSidebar from '@/components/dashboard/sidebar';
import React from 'react'

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = (
    { children }: DashboardLayoutProps
) => {

    return (
        <>
            <div>
                <DashboardSidebar />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default DashboardLayout