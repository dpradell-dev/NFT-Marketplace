export const setupWalletListeners = (dispatch) => {
    if (!window.ethereum) return;

    window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
            dispatch(setWalletAddress(accounts[0]));
        } else {
            dispatch(disconnect());
        }
    });

    window.ethereum.on("disconnect", () => {
        dispatch(disconnect());
    });

    window.ethereum.on("chainChanged", () => {
        // Reload the page on chain change as recommended by MetaMask
        window.location.reload();
    });
}; 