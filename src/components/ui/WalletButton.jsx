import PropTypes from "prop-types";
import { useWallet } from "@hooks/useWallet";

const WalletButton = ({ className }) => {
    const { address, isConnected, connect, disconnect } = useWallet();

    const handleClick = () => {
        if (isConnected) {
            disconnect();
        } else {
            connect();
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={className}
        >
            {isConnected 
                ? `${address.slice(0, 6)}...${address.slice(-4)}`
                : "Connect Wallet"
            }
        </button>
    );
};

WalletButton.propTypes = {
    className: PropTypes.string,
};

export default WalletButton; 