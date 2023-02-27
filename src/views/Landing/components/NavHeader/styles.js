import { GlobalColors } from "../../../../styles/Colors";

export const styles = {
    // container: {
    //     width: '100vw',
    //     height: '100vh',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#f8f8f8'
    // },
    nameStyle: {
        fontFamily: 'Comic Book Font',
        fontSize: '16px',
        // fontWeight: 'bold',
        textTransform: 'uppercase',
        color: GlobalColors.primary,
        paddingRight: '20px',
      },
    navStyle: {
        overflow: 'hidden',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Argentum Sans Light'
    },
    liStyle: {
        display: 'block',
    },
    navLinkStyle: {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '22px 24px',
        outline: 'none',
        textDecoration: 'none',
        fontSize: '17px'
    },
    activeLinkStyle: {
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    stickyNavStyle: {
        backgroundColor: GlobalColors.softBlack,
        opacity: 0.9,
        borderRadius: '30px',
        position: 'fixed',
        top: '2vh',
        maxWidth: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
};