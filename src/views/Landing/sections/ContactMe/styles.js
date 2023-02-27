import { GlobalColors } from "../../../../styles/Colors";

export const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.background,
        color: GlobalColors.text,
    },
    headerText: {
        fontSize: '3em',  
        fontFamily: 'Action Man',
        backgroundColor: 'purple',
    },
    bodyText: {
        width: '50%',
        fontSize: '18px',
        fontFamily: 'Argentum Sans Light',
        textAlign: 'center',
    },
}