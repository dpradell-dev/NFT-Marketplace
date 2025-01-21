import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWalletAddress, setError, disconnect } from "@app/walletSlice";
import { connectWallet } from "@utils/wallet";

export const useWallet = () => {
    const dispatch = useDispatch();
    const { address, isConnected, error } = useSelector((state) => state.wallet);

    const connect = useCallback(async () => {
        try {
            const account = await connectWallet();
            dispatch(setWalletAddress(account));
        } catch (err) {
            dispatch(setError(err.message));
        }
    }, [dispatch]);

    const disconnectWallet = useCallback(() => {
        dispatch(disconnect());
    }, [dispatch]);

    return {
        address,
        isConnected,
        error,
        connect,
        disconnect: disconnectWallet,
    };
}; 