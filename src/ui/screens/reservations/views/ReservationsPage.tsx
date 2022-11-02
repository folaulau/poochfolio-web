import React, { useCallback, useEffect, useState } from 'react';
import * as styled from './ReservationsPage.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { VscScreenFull } from 'react-icons/vsc';
import { COLOR } from '../../../../assets/colors';
import { Occupant } from '../components/Occupant';
import Calendar from 'react-calendar';
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from '@nivo/line'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import 'react-calendar/dist/Calendar.css';
import { acceptBooking, checkinBooking, checkoutBooking, getBookings } from '../../../api/server/data';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Spinner } from '../../@core/Spinner';
import { Nothing } from '../../@core/Nothing';

type Props = {};

const DATA = [
    {
        "id": "vacancy",
        "label": "Vacancy",
        "value": 13,
        "color": "#79D2E3"
    },
    {
        "id": "occupancy",
        "label": "Occupancy",
        "value": 87,
        "color": "#077997"
    },
]

const DDATA = [
    {
        "id": "balance",
        "color": "#077997",
        "data": [
            {
                "x": "Jan",
                "y": 296
            },
            {
                "x": "Feb",
                "y": 259
            },
            {
                "x": "Mar",
                "y": 86
            },
            {
                "x": "Apr",
                "y": 37
            },
            {
                "x": "May",
                "y": 71
            },
            {
                "x": "Jun",
                "y": 89
            },
            {
                "x": "Jul",
                "y": 42
            },
            {
                "x": "Aug",
                "y": 210
            },
            {
                "x": "Sep",
                "y": 59
            },
            {
                "x": "Oct",
                "y": 257
            },
            {
                "x": "Nov",
                "y": 271
            },
            {
                "x": "Dec",
                "y": 201
            }
        ]
    },
]

export const ReservationsPage: React.FC<Props> = () => {
    const screen1 = useFullScreenHandle();
    const screen2 = useFullScreenHandle();
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.data.loading);
    const bookings = useSelector((state: any) => state.data.bookings);
    const [searchFocus, setSearchFocus] = useState(false);
    const [filter, setFilter] = useState(0); // 0:incoming, 1:outgoing, 2:unpaid, 3:past
    const [date, setDate] = useState(new Date());
    const [isFullScreen1, setIsFullScreen1] = useState(false);
    const [isFullScreen2, setIsFullScreen2] = useState(false);
    const [occupants, setOccupants] = useState([])
    const [currentOccupants, setCurrentOccupants] = useState([]);

    const reportChange = useCallback((state: any, handle: any) => {
        if (handle === screen1) {
            if (state) {
                setIsFullScreen1(true)
            } else {
                setIsFullScreen1(false)
            }
        }
        if (handle === screen2) {
            if (state) {
                setIsFullScreen2(true)
            } else {
                setIsFullScreen2(false)
            }
        }

    }, [screen1, screen2]);

    useEffect(() => {
        getBookings(dispatch)
            .then((res) => { })
            .catch((err) => {
                toast(err, { type: 'error' })
            })
    }, [])

    useEffect(() => {
        let newBookings = [];
        newBookings = bookings.filter((item: any) => {
            const startDate = new Date(item.start_date_time);
            const endDate = new Date(item.end_date_time);
            var today = new Date();
            if (today >= startDate && today <= endDate) {
                return item
            }
        })
        setCurrentOccupants(newBookings);
    }, [bookings])

    useEffect(() => {
        let newBookings = [];
        if (filter === 0) {
            newBookings = bookings.filter((item: any) => {
                const startDate = new Date(item.start_date_time);
                const endDate = new Date(item.end_date_time);
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                if (tomorrow < startDate) {
                    return item
                }
            })
            setOccupants(newBookings)
        } else if (filter === 1) {
            newBookings = bookings.filter((item: any) => {
                const startDate = new Date(item.start_date_time);
                const endDate = new Date(item.end_date_time);
                var today = new Date();
                if (today >= startDate && today <= endDate) {
                    return item
                }
            })
            setOccupants(newBookings)
        } else if (filter === 2) {
            newBookings = bookings.filter((item: any) => {
                const startDate = new Date(item.start_date_time);
                const endDate = new Date(item.end_date_time);
                var today = new Date();
                if (today >= startDate && today <= endDate) {
                    return item
                }
            })
            setOccupants(newBookings)
        } else {
            newBookings = bookings.filter((item: any) => {
                const endDate = new Date(item.end_date_time);
                var today = new Date();
                if (today > endDate) {
                    return item
                }
            })
            setOccupants(newBookings)
        }
    }, [bookings, filter])

    const goCheckIn = (book: any) => {
        if (loading) return
        checkinBooking(dispatch, {
            groomerUuid: book.groomer.uuid,
            uuid: book.uuid,
        }).then((res) => {
            getBookings(dispatch)
                .then((res) => {
                    toast('Sccuessfully checked in!', { type: 'success' })
                })
                .catch((err) => {
                    toast(err, { type: 'error' })
                })
        }).catch((err) => {
            toast(err, { type: 'error' })
        })
    }

    const goCheckOut = (book: any) => {
        if (loading) return
        checkoutBooking(dispatch, {
            groomerUuid: book.groomer.uuid,
            uuid: book.uuid,
        }).then((res) => {
            getBookings(dispatch)
                .then((res) => {
                    toast('Sccuessfully checked out!', { type: 'success' })
                })
                .catch((err) => {
                    toast(err, { type: 'error' })
                })
        }).catch((err) => {
            toast(err, { type: 'error' })
        })
    }

    const goAccept = (book: any) => {
        if(loading) return
        acceptBooking(dispatch, {
            uuid: book.uuid,
            approved: true,
            note: "Accepted",
        }).then((res) => {
            getBookings(dispatch)
                .then((res) => {
                    toast('Sccuessfully approved!', { type: 'success' })
                })
                .catch((err) => {
                    toast(err, { type: 'error' })
                })
        }).catch((err) => {
            toast(err, { type: 'error' })
        })
    }

    return (
        <styled.Container>
            <Spinner visible={loading} />
            <styled.Dashboard>
                <styled.Header>
                    <styled.Title>Hotel Occupants</styled.Title>
                    <styled.HeaderWrapper>
                        <styled.SearchBar focus={searchFocus}>
                            <styled.Search
                                placeholder='Search for reservations, occupants, invoices, and more'
                                onFocus={() => { setSearchFocus(true) }}
                                onBlur={() => { setSearchFocus(false) }}
                            />
                            <BsSearch color={COLOR.primary0} size={24} />
                        </styled.SearchBar>
                        <styled.Toolbar>
                            <styled.Button>
                                <AiOutlinePlus size={18} color={COLOR.primary0} style={{ marginRight: 10 }} />
                                Reservations
                            </styled.Button>
                            <styled.Button>
                                <AiOutlinePlus size={18} color={COLOR.primary0} style={{ marginRight: 10 }} />
                                Add Occupants
                            </styled.Button>
                        </styled.Toolbar>
                    </styled.HeaderWrapper>
                </styled.Header>
                <FullScreen handle={screen1} onChange={reportChange}>
                    <styled.Table isFullScreen={isFullScreen1}>
                        <styled.TableHeader>
                            <styled.Filter active={filter === 0} onClick={() => { setFilter(0) }} isFullScreen={isFullScreen1}>Incoming Occupants</styled.Filter>
                            <styled.Filter active={filter === 1} onClick={() => { setFilter(1) }} isFullScreen={isFullScreen1}>Outgoing Occupants</styled.Filter>
                            <styled.Filter active={filter === 2} onClick={() => { setFilter(2) }} isFullScreen={isFullScreen1}>Unpaid Occupants</styled.Filter>
                            <styled.Filter active={filter === 3} onClick={() => { setFilter(3) }} isFullScreen={isFullScreen1}>Past Reservations Occupants</styled.Filter>
                        </styled.TableHeader>
                        <styled.FullIcon onClick={() => {
                            if (isFullScreen1) {
                                screen1.exit()
                            } else {
                                screen1.enter()
                            }
                        }}>
                            <VscScreenFull size={18} color={COLOR.primary0} />
                        </styled.FullIcon>
                        <styled.TableBody isFullScreen={isFullScreen1}>
                            {occupants.length === 0 && (
                                <Nothing />
                            )}
                            {occupants.map((book: any, index: any) => {
                                return (
                                    <Occupant {...book} key={index} onCheckIn={() => goCheckIn(book)} onCheckOut={() => goCheckOut(book)} onAccept={() => goAccept(book)} />
                                )
                            })}
                        </styled.TableBody>
                    </styled.Table>
                </FullScreen>
                <FullScreen handle={screen2} onChange={reportChange}>
                    <styled.Table isFullScreen={isFullScreen2}>
                        <styled.TableHeader>
                            <styled.Filter active isFullScreen={isFullScreen2}>Current Occupants</styled.Filter>
                        </styled.TableHeader>
                        <styled.FullIcon onClick={() => {
                            if (isFullScreen2) {
                                screen2.exit()
                            } else {
                                screen2.enter()
                            }
                        }}>
                            <VscScreenFull size={18} color={COLOR.primary0} />
                        </styled.FullIcon>
                        <styled.TableBody isFullScreen={isFullScreen2}>
                            {currentOccupants.length === 0 && (
                                <Nothing />
                            )}
                            {currentOccupants.map((book: any, index: any) => {
                                return (
                                    <Occupant {...book} current key={index} onCheckIn={() => goCheckIn(book)} onCheckOut={() => goCheckOut(book)} onAccept={() => goAccept(book)} />
                                )
                            })}
                        </styled.TableBody>
                    </styled.Table>
                </FullScreen>
            </styled.Dashboard>
            <styled.CalendarBoard>
                <styled.CalendarWrapper>
                    <styled.CalendarHeader>
                        <styled.Title>Calendar</styled.Title>
                        <styled.CalendarType>
                            <styled.Type active={true}>Month</styled.Type>
                            <styled.Type active={false}>Day</styled.Type>
                        </styled.CalendarType>
                    </styled.CalendarHeader>
                    <styled.CalendarBody>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            nextLabel={<styled.NextButton size={24} />}
                            next2Label={null}
                            prevLabel={<styled.PrevButton size={24} />}
                            prevAriaLabel="here"
                            prev2Label={null}
                            // showFixedNumberOfWeeks
                            // showNavigation={false}
                            calendarType="US"
                            tileClassName="day-render"
                            tileContent={<styled.PriceContent>$14</styled.PriceContent>}
                            // formatShortWeekday={(locale, date) => locale()}
                            view="month"
                        />
                    </styled.CalendarBody>
                </styled.CalendarWrapper>
                <styled.AnalyticsWrapper>
                    <styled.Analytics>
                        <styled.DetailWrapper>
                            <styled.Title>Analytics</styled.Title>
                            <styled.Vacancy>Vacancy : 13%</styled.Vacancy>
                            <styled.Occupancy>Occupancy Rate : 87%</styled.Occupancy>
                        </styled.DetailWrapper>
                        <styled.ChartWrapper>
                            <ResponsivePie
                                data={DATA}
                                margin={{ top: 32, right: 32, bottom: 32, left: 32 }}
                                innerRadius={0.5}
                                padAngle={1}
                                activeOuterRadiusOffset={10}
                                colors={{ datum: 'data.color' }}
                                enableArcLinkLabels={false}
                                arcLabel={(d) => `${d.value}%`}
                                arcLabelsTextColor="white"
                            />
                        </styled.ChartWrapper>
                    </styled.Analytics>
                    <styled.Revenue>
                        <styled.Title>Monthly Revenue</styled.Title>
                        <styled.RevenueWrapper>
                            <ResponsiveLine
                                data={DDATA}
                                margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                                // axisLeft={null}
                                // axisBottom={null}
                                // xScale={{ type: 'point' }}
                                // yScale={{
                                //     type: 'linear',
                                //     min: 'auto',
                                //     max: 'auto',
                                //     stacked: true,
                                //     reverse: false
                                // }}
                                yFormat=">-.2f"
                                colors={{ datum: 'color' }}
                                curve="monotoneX"
                                enableArea
                                enableGridX={false}
                                enableGridY={false}
                                lineWidth={3}
                                enablePoints={false}
                                crosshairType="bottom"
                                useMesh={true}
                            />
                        </styled.RevenueWrapper>
                    </styled.Revenue>
                </styled.AnalyticsWrapper>

            </styled.CalendarBoard>
        </styled.Container>
    )
}