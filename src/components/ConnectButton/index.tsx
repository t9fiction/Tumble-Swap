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
                <div onClick={handleOpen} className="uppercase border border-spacing-1 rounded-sm py-2 px-4 border-foreground">
                    Connect
                </div>
                : <div className="border border-spacing-1 border-foreground ">
                    <appkit-button />
                </div>
            }
        </div>
    );
}
