import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setupWalletListeners } from "@utils/wallet";

// Inside your App component:
const dispatch = useDispatch();

useEffect(() => {
    setupWalletListeners(dispatch);
}, [dispatch]); 