import React from 'react';
import * as styled from './PaymentPage.styled';
import BANK from '../../../../assets/images/bank.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../@core/Spinner';
import { linkStripeAccount } from '../../../api/server/data';
import { toast } from 'react-toastify';
import { SET_AUTH } from '../../../redux/types';

type Props = {};

export const PaymentPage: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.data.loading);
    const user = useSelector((state: any) => state.auth.user);

    const linkBank = () => {
        linkStripeAccount(dispatch, { uuid: user.uuid })
            .then((res) => {
                window.open(res.url);
            })
            .catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    return (
        <styled.Container>
            <Spinner visible={loading} />
            {/* <styled.Title>How would you like to receive payments?</styled.Title> */}
            <styled.Wrapper>
                <styled.Form>
                    <styled.Img src={BANK} alt="bank" />
                    <styled.Button onClick={linkBank}>Link Your Bank</styled.Button>
                    <styled.Text>SECURED BY STRIPE CONNECT</styled.Text>
                </styled.Form>
                {/* <styled.Form>
                    <styled.Img src={CARD} alt="card" />
                    <styled.Button onClick={() => {}}>Debit Card</styled.Button>
                    <styled.Text>SECURED BY STRIPE CONNECT</styled.Text>
                </styled.Form>
                <styled.Form>
                    <styled.Img src={ROUTING} alt="routing" />
                    <styled.Button onClick={() => {}}>Account and Routing Number</styled.Button>
                    <styled.Text>SECURED BY STRIPE CONNECT</styled.Text>
                </styled.Form> */}
            </styled.Wrapper>
            {/* <styled.TaxWrapper>
                <styled.IdWrapper>Taxpayer ID : </styled.IdWrapper>
                <styled.ID>00 - 123987342984723894</styled.ID>
                <styled.Confirm>Confirm</styled.Confirm>
            </styled.TaxWrapper> */}
        </styled.Container>
    )
}