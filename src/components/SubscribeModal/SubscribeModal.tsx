import React from 'react'

type modalProps ={
    isOpen: boolean,
    onClose: any,
    children: React.ReactNode
}
export const SubscribeModal: React.FC<modalProps> = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;

    return (
    <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        width: '100%'
    }}
    
    onClick={()=>{onClose}}>
        <div style={{
            width: '35em',
            height: '20em',
            backgroundColor: '#ACD3D8',
            margin: 'auto',
            padding: '2%',
            borderRadius: '2%',
            textAlign: 'center',

        }}>
            {children}
        </div>
    </div>
  )
}
