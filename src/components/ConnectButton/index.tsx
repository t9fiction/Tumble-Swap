'use client'
import React from 'react';
import { useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import { useAppKit } from '@reown/appkit/react';

export default function ConnectButton() {
    const { open } = useAppKit();
    const { address, isConnected, caipAddress, status } = useAppKitAccount()
    const { disconnect } = useDisconnect()

    const handleOpen = () => {
        open() // Opens the AppKit interface or modal
    };

    const handleClose = () => {
        disconnect(); // Closes the AppKit interface or modal
    };
    // return <appkit-button />

    return (
        <div>
            {!isConnected ?
                <div onClick={handleOpen} className="uppercase">
                    Connect
                </div>
                : <div className="">
                    <appkit-button />
                </div>
            }
        </div>
    );
}