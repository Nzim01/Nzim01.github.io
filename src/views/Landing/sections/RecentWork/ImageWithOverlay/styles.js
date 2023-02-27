import { GlobalColors } from "../../../../../styles/Colors";

export const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalColors.background,
        color: GlobalColors.text,
    },
    viewProjectText: {
        fontSize: '1em',  
        fontFamily: 'Comic Book Font',
        // backgroundColor: '#222222',
    },
    bodyText: {
        fontSize: '2rem',
        fontFamily: 'Comic Book Font',
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        objectFit: 'cover',
    },
}