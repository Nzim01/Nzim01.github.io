import { GlobalColors } from "../../../../styles/Colors";

export const styles = {
    container: {
        // width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: '10vw',
        paddingLeft: '10vw',
        // backgroundColor: GlobalColors.background,
        backgroundColor: '#050505',
        color: GlobalColors.text,
    },
    headerText: {
        fontSize: '3em',  
        fontFamily: 'Action Man',
        backgroundColor: 'purple',
    },
    bodyText: {
        fontSize: '2rem',
        fontFamily: 'Comic Book Font',
        textAlign: 'center',
    }
}