import React, { useCallback, useEffect, useState } from 'react';
import * as styled from './ReservationsPage.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { VscScreenFull } from 'react-icons/vsc';
import { COLOR } from '../../../../assets/colors';
import { Occupant } from '../components/Occupant';
import Calendar from 'react-calendar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import 'react-calendar/dist/Calendar.css';
import { acceptBooking, checkinBooking, checkoutBooking, getBookings } from '../../../api/server/data';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Spinner } from '../../@core/Spinner';
import { Nothing } from '../../@core/Nothing';
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, Tooltip, PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

type Props = {};

const data = [
    {
        name: 'Jan',
        uv: 230,
    },
    {
        name: 'Feb',
        uv: 180,
    },
    {
        name: 'Mar',
        uv: 200,
    },
    {
        name: 'Apr',
        uv: 180,
    },
    {
        name: 'May',
        uv: 170,
    },
    {
        name: 'Jun',
        uv: 160,
    },
    {
        name: 'Jul',
        uv: 120,
    },
    {
        name: 'Aug',
        uv: 140,
    },
    {
        name: 'Sep',
        uv: 170,
    },
    {
        name: 'Oct',
        uv: 180,
    },
    {
        name: 'Nov',
        uv: 250,
    },
    {
        name: 'Dec',
        uv: 230,
    },
];

const data1 = [
    { name: 'Vacancy', value: 200 },
    { name: 'Occupancy', value: 500 },
    { name: 'Paid', value: 300 },
    { name: 'Unpaid', value: 400 },
    { name: 'Pickup', value: 300 },
];

const COLORS = ['#077997', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;

    return (
        <g>
            <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill={fill}>
                {(percent * 100).toFixed(2)}%
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 4}
                outerRadius={outerRadius + 8}
                fill={fill}
            />
        </g>
    );
};


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
    // const [activeIndex, setActiveIndex] = useState(0);


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
    }, [dispatch])

    useEffect(() => {
        let newBookings = [];
        newBookings = bookings.filter((item: any) => {
            const startDate = new Date(item.start_date_time);
            const endDate = new Date(item.end_date_time);
            var today = new Date();
            if (today >= startDate && today <= endDate) {
                return item
            }
            return null
        })
        setCurrentOccupants(newBookings);
    }, [bookings])

    useEffect(() => {
        let newBookings = [];
        if (filter === 0) {
            newBookings = bookings.filter((item: any) => {
                const startDate = new Date(item.start_date_time);
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                if (tomorrow < startDate) {
                    return item
                }
                return null
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
                return null
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
                return null
            })
            setOccupants(newBookings)
        } else {
            newBookings = bookings.filter((item: any) => {
                const endDate = new Date(item.end_date_time);
                var today = new Date();
                if (today > endDate) {
                    return item
                }
                return null
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
        if (loading) return
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

    // const onPieEnter = (_: any, index: any) => {
    //     setActiveIndex(index)
    // };

    return (
        <styled.Container>
            <Spinner visible={loading} />
            <styled.Dashboard>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.3
                    }}
                >
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
                </motion.div>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                        delay: 0.2
                    }}
                >
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
                                        <motion.div
                                            key={index}
                                            initial={{ x: '-120%' }}
                                            animate={{ x: 0 }}
                                            transition={{
                                                type: "tween",
                                                duration: 0.3,
                                                delay: 0.1 * index + (filter === 0 ? 0.8 : 0.4)
                                            }}
                                        >
                                            <Occupant {...book} key={index} onCheckIn={() => goCheckIn(book)} onCheckOut={() => goCheckOut(book)} onAccept={() => goAccept(book)} />
                                        </motion.div>
                                    )
                                })}
                            </styled.TableBody>
                        </styled.Table>
                    </FullScreen>
                </motion.div>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                        delay: 0.4
                    }}
                >
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
                                        <motion.div
                                            key={index}
                                            initial={{ x: '-120%' }}
                                            animate={{ x: 0 }}
                                            transition={{
                                                type: "tween",
                                                duration: 0.3,
                                                delay: 0.1 * index + 1
                                            }}
                                        >
                                            <Occupant {...book} current key={index} onCheckIn={() => goCheckIn(book)} onCheckOut={() => goCheckOut(book)} onAccept={() => goAccept(book)} />
                                        </motion.div>
                                    )
                                })}
                            </styled.TableBody>
                        </styled.Table>
                    </FullScreen>
                </motion.div>
            </styled.Dashboard>
            <styled.CalendarBoard>
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.3
                    }}
                >
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
                </motion.div>
                <styled.AnalyticsWrapper>
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            delay: 0.2
                        }}
                        style={{ width: '90%', display: 'flex', justifyContent: 'center' }}
                    >
                        <styled.Analytics>
                            <styled.Title>Analytics</styled.Title>
                            <styled.ChartWrapper>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={400} height={400}>
                                        <Pie
                                            // activeIndex={activeIndex}
                                            activeShape={renderActiveShape}
                                            data={data1}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={66}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                            // onMouseEnter={onPieEnter}
                                        >
                                            {data1.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </styled.ChartWrapper>
                        </styled.Analytics>
                    </motion.div>
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            delay: 0.4
                        }}
                        style={{ width: '90%', display: 'flex', justifyContent: 'center' }}
                    >
                        <styled.Revenue>
                            <styled.Title>Monthly Revenue</styled.Title>
                            <styled.RevenueWrapper>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart width={200} height={200} data={data}>
                                        <Area type="monotone" dataKey="uv" stroke="#077997" fill="#EBFDFF" />
                                        <XAxis dataKey="name" stroke="#CECECE" />
                                        {/* <YAxis /> */}
                                        <Tooltip />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </styled.RevenueWrapper>
                        </styled.Revenue>
                    </motion.div>
                </styled.AnalyticsWrapper>
            </styled.CalendarBoard>
        </styled.Container>
    )
}