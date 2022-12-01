type AppLayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children } : any) {
    // console.log(children);
    return(
        <>{children}</>
    )
}