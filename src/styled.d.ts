import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		textColor: string;
		bgColor: string;
		accentColor?: string;
		cardBgColor: string;
		btnBgColor: string;
		borderColor: string;
		hoveColor: string;
		DetailCard: string;
		DetailCardFontColor: string;
		tablet: string;
		desktop: string;
	}
}
