import { GlobalColors } from "../../../../styles/Colors";

export const styles = {
  footer: {
    backgroundColor: GlobalColors.background,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    padding: '0 20px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Comic Book Font',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};