'use client'
import React from 'react';
import { useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import { useAppKit } from '@reown/appkit/react';

export default function ConnectButton() {
    const { open, close } = useAppKit();
    const { address, isConnected } = useAppKitAccount();
    const { disconnect } = useDisconnect()

    const handleOpen = () => {
        open(); // Opens the AppKit interface or modal
    };

    const handleClose = () => {
        disconnect(); // Closes the AppKit interface or modal
    };
    // return <appkit-button />

    return (
        <div>
            {!isConnected ?
                <div onClick={handleOpen} className="">
                    Connect
                </div>
                : <div onClick={handleClose} className="">
                    Disconnect
                </div>
            }
        </div>
    );
}
