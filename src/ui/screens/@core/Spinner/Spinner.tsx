import React from 'react';
import BarLoader from "react-spinners/BarLoader";
import { COLOR } from '../../../../assets/colors';

type Props = {
    visible: boolean
};

export const Spinner: React.FC<Props> = ({
    visible
}) => {
    return (
        <div style={{ display: visible ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
            <BarLoader color={COLOR.primary1} height={6} width="100%" />
        </div>
    )
}