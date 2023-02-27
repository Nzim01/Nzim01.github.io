import { GlobalColors } from "../../../../styles/Colors";

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
        // backgroundColor: `#111111`,
        color: GlobalColors.text,
    },
    typeWriterGeneral: {
        // fontFamily: 'Comic Book Font',
        // fontFamily: 'Alpha Clouds',
        fontFamily: 'Beanbag',
        fontSize: '4em',
    },
    videoContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        // height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#171717',
        color: GlobalColors.text,
    },
    videoContainerOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to top, rgba(0,0,0, 0.9), rgba(0,0,0, 0.5))',

        // backgroundColor: GlobalColors.background,
        // opacity: 0.5,
    },
    videoTextOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(10px)', /* adjust blur radius as desired */
        // backgroundColor: GlobalColors.background,
        // opacity: 0.5,
    },
    videoPlayer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#333333',
        // color: GlobalColors.text,
    },
}