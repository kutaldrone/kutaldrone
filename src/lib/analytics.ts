// Google Analytics utilities
declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string | Date,
            config?: Record<string, unknown>
        ) => void;
    }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Log page views
export const pageview = (url: string) => {
    if (!window.gtag) return;

    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
    });
};

// Log specific events
export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (!window.gtag) return;

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

// Predefined events
export const trackButtonClick = (buttonName: string) => {
    event({
        action: 'click',
        category: 'Button',
        label: buttonName,
    });
};

export const trackFormSubmit = (formName: string) => {
    event({
        action: 'submit',
        category: 'Form',
        label: formName,
    });
};

export const trackProjectView = (projectName: string) => {
    event({
        action: 'view',
        category: 'Project',
        label: projectName,
    });
};
