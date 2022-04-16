import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import './sass/styleguide.scss';
import './sass/base/_base.scss';
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider'

getChainOptions().then((chainOption) => {
    ReactDOM.render(
        <React.StrictMode>
            <WalletProvider {...chainOption}>
                <App />
            </WalletProvider>
        </React.StrictMode>,
        document.getElementById("root"),
        )
})


