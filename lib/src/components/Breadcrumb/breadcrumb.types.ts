type crumb = {
    title: string;
    href?: string;
};

export interface BreadcrumbProps {
    crumbs: Array<crumb>;
    separator?: string | React.ReactNode;
    className?: string;
}