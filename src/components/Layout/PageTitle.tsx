import { FC, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface PageTitleProps {
	titleKey?: string;
	customTitle?: string;
	suffix?: string;
}

const PageTitle: FC<PageTitleProps> = ({ titleKey, customTitle, suffix = "Mystic Gallery" }) => {
	const { t, language } = useLanguage();

	useEffect(() => {
		let title = "";

		if (customTitle) {
			title = customTitle;
		} else if (titleKey) {
			title = t(titleKey);
		}

		document.title = title ? `${title} - ${suffix}` : suffix;
	}, [titleKey, customTitle, suffix, t, language]);

	return null;
};

export default PageTitle;
