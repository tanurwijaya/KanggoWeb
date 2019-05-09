import React, { Component } from 'react'
import { WHITE } from '../../../themes/Colors';

export default function KegiatanTypeCard({ text }) {
    return (
        // <div style={{ width: '25%', height: 100, background: WHITE, border: '1px solid #C4C4C4', borderRadius: 16, margin: 8 }}>
            // Test
            // </div>
            <div style={{background: WHITE, border: '1px solid #C4C4C4'}}>
                {text}
            </div>
    )
}