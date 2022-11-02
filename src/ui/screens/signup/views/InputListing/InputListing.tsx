import React, { useCallback, useEffect, useState } from 'react';
import * as styled from './InputListing.styled';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { AiFillPlusCircle, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';
import { COLOR } from '../../../../../assets/colors';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDropzone } from "react-dropzone";
import Switch from "react-switch";
import { Checkbox } from '../../../@core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../../@core/Spinner';
import { createListing, uploadPhoto } from '../../../../api/server/auth';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '370px',
        height: 450,
        maxHeight: 450,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        borderRadius: 20,

    },
    overlay: {
        backgroundColor: '#077997cc'
    }
};


type Props = {
};

export const InputListing: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.auth.user);
    const loading = useSelector((state: any) => state.auth.loading);

    const [instantBooking, setInstantBooking] = useState(false);
    const [pickup, setPickup] = useState(false);
    const [dropOff, setDropOff] = useState(false);
    const [charge, setCharge] = useState(0);
    const [careServices, setCareServices] = useState([]);
    const [description, setDescription] = useState('');
    const [numberOfOccupancy, setNumberOfOccupancy] = useState<number | number[]>(0);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [tempService, setTempService] = useState('');
    const [showInput, setShowInput] = useState(false);

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();
            reader.onload = () => {
            };
            reader.readAsDataURL(file);
        });
    }, [])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        accept: {
            'image/*': []
        }, onDrop
    })

    useEffect(() => {
        if (user) {
            setCareServices(user.careServices);
            setNumberOfOccupancy(user.numberOfOccupancy);
        }
    }, [user])

    const handleServicePrice = (e: any, serviceName: string, serviceSize: string) => {
        if (e.target.value.includes('$')) {
            if (!isNaN(e.target.value.substring(1))) {
                const updatedPrices: any = careServices.map((item: any) => {
                    if (serviceName === item.name) {
                        item[e.target.name] = Number(e.target.value.substring(1))
                        item[serviceSize] = true
                    }
                    return item
                });
                setCareServices(updatedPrices);
            }
        } else if (!isNaN(e.target.value)) {
            const updatedPrices: any = careServices.map((item: any) => {
                if (serviceName === item.name) {
                    item[e.target.name] = Number(e.target.value)
                    item[serviceSize] = true
                }
                return item
            });
            setCareServices(updatedPrices);
        }
    }

    const removeService = (serv: any) => {
        setCareServices(careServices.filter((item: any) => item.name !== serv.name))
    }

    const handleCharge = (e: any) => {
        if (loading) return
        // setCharge(moneyMask(e.target.value))
        if (e.target.value.includes('$')) {
            if (!isNaN(e.target.value.substring(1))) {
                setCharge(Number(e.target.value.substring(1)))
            }
        } else if (!isNaN(e.target.value)) {
            setCharge(Number(e.target.value));
        }
    }

    const onPutService = () => {
        if (!tempService) {
            return
        }
        let temp: any = [
            ...careServices,
            {
                id: 0,
                uuid: "",
                name: tempService,
                serviceSmall: false,
                serviceMedium: false,
                serviceLarge: false,
                createdAt: "",
                updatedAt: ""
            }
        ];
        setTempService('');
        setShowInput(false)
        setCareServices(temp);
    }

    const postListing = () => {
        if(loading) return
        if (acceptedFiles.length === 0) {
            toast('Please choose images', { type: 'error' })
            return
        }

        let formdata: any = new FormData();
        acceptedFiles.map((file) => {
            formdata.append("images", file, file.name);
            return null;
        })
        uploadPhoto(dispatch, { uuid: user.uuid, images: formdata })
            .then((res) => {
                const groomerInfo = {
                    uuid: user.uuid,
                    instantBooking: instantBooking,
                    careServices: careServices,
                    offeredDropOff: dropOff,
                    offeredPickUp: pickup,
                    numberOfOccupancy: numberOfOccupancy,
                    chargePerMile: charge,
                    description: description
                }

                createListing(dispatch, groomerInfo)
                    .then((res) => { })
                    .catch((err) => {
                        toast(err, { type: 'error' })
                    })
            })
            .catch((err) => {
                toast(err, { type: 'error' })
            })
    }

    return (
        <styled.Container id='ddd'>
            <Spinner visible={loading} />
            <styled.Form>
                <styled.Table>
                    <styled.Thead>
                        <tr>
                            <styled.Th>Services Offered</styled.Th>
                            <styled.Th>Small 1-19 lbs</styled.Th>
                            <styled.Th>Medium 20-39 lbs</styled.Th>
                            <styled.Th>Large 40+ lbs</styled.Th>
                            <styled.Th><FiMoreHorizontal size={26} /></styled.Th>
                        </tr>
                    </styled.Thead>
                    <styled.Tbody>
                        {careServices.map((service: any, index) => {
                            return (
                                <styled.Tr key={index}>
                                    <styled.Td>
                                        {service.name}
                                    </styled.Td>
                                    <styled.Td>
                                        <input
                                            name="smallPrice"
                                            value={service.smallPrice != null ? "$" + service.smallPrice : ''}
                                            onChange={(e) => handleServicePrice(e, service.name, 'serviceSmall')}
                                        />
                                    </styled.Td>
                                    <styled.Td>
                                        <input
                                            name="mediumPrice"
                                            value={service.mediumPrice != null ? "$" + service.mediumPrice : ''}
                                            onChange={(e) => handleServicePrice(e, service.name, 'serviceMedium')}
                                        />
                                    </styled.Td>
                                    <styled.Td>
                                        <input
                                            name="largePrice"
                                            value={service.largePrice != null ? "$" + service.largePrice : ''}
                                            onChange={(e) => handleServicePrice(e, service.name, 'serviceLarge')}
                                        />
                                    </styled.Td>
                                    <styled.Td onClick={() => removeService(service)}>
                                        <AiOutlineClose size={26} color='red' />
                                    </styled.Td>
                                </styled.Tr>
                            )
                        })}
                        <styled.Tr>
                            <styled.Td colSpan={4} onClick={() => {
                                if (loading) return
                                setIsOpen(true)
                            }}>
                                <div>
                                    <AiFillPlusCircle size={28} color={COLOR.primary0} />
                                    <span>Add Servie</span>
                                </div>
                            </styled.Td>
                        </styled.Tr>
                    </styled.Tbody>
                </styled.Table>
                <styled.BookingContainer>
                    <styled.BookingHeader>
                        <styled.Title>
                            INSTANT BOOKING?
                        </styled.Title>
                        <Switch
                            className="book-switch"
                            onChange={setInstantBooking}
                            onColor={'#78d890'}
                            offColor={COLOR.gray5}
                            checked={instantBooking}
                            checkedIcon={<span style={{ color: COLOR.primary0, fontFamily: 'MuseoSansRouned500', fontSize: 12, paddingTop: 2 }}>ON</span>}
                            uncheckedIcon={<span style={{ color: 'white', fontFamily: 'MuseoSansRouned500', fontSize: 12, paddingTop: 2 }}>OFF</span>}
                        />
                    </styled.BookingHeader>
                    <styled.List>
                        <styled.Fieldset>
                            <styled.Legend>Do You Offer Pick Up Service?</styled.Legend>
                            <styled.Group>
                                <Checkbox
                                    id='check1'
                                    label='YES'
                                    onChange={() => {
                                        if (loading) return
                                        setPickup(true)
                                    }}
                                    checked={pickup}
                                />
                                <Checkbox
                                    id='check1'
                                    label='NO'
                                    onChange={() => {
                                        if (loading) return
                                        setPickup(false)
                                    }}
                                    checked={!pickup}
                                />
                            </styled.Group>
                        </styled.Fieldset>
                        {pickup && (
                            <>
                                <styled.Fieldset>
                                    <styled.Legend>Do You Offer Drop Off Service?</styled.Legend>
                                    <styled.Group>
                                        <Checkbox
                                            id='check1'
                                            label='YES'
                                            onChange={() => {
                                                if (loading) return
                                                setDropOff(true)
                                            }}
                                            checked={dropOff}
                                        />
                                        <Checkbox
                                            id='check1'
                                            label='NO'
                                            onChange={() => {
                                                if (loading) return
                                                setDropOff(false)
                                            }}
                                            checked={!dropOff}
                                        />
                                    </styled.Group>
                                </styled.Fieldset>
                                <styled.Fieldset>
                                    <styled.Legend>How Much Do You Charge Per Mile?</styled.Legend>
                                    <styled.ChargeInput
                                        value={charge ? "$" + charge : ''}
                                        onChange={handleCharge}
                                        type='text'
                                    />
                                </styled.Fieldset>
                            </>
                        )}

                    </styled.List>
                </styled.BookingContainer>
                <styled.OcupancyContainer>
                    <styled.Fieldset>
                        <styled.Legend>What is the Maximum Ocupancy at Your Business?</styled.Legend>
                        <styled.Legend style={{ color: COLOR.primary0 }}>{numberOfOccupancy} Dogs</styled.Legend>
                    </styled.Fieldset>
                    <Slider
                        value={numberOfOccupancy}
                        onChange={(value) => {
                            if (loading) return
                            setNumberOfOccupancy(value)
                        }}
                        trackStyle={{ backgroundColor: '#077997', height: 4 }}
                        min={0}
                        max={200}
                        step={1}
                        style={{ marginTop: 30 }}
                        handleStyle={{
                            boxShadow: '0px 15px 20px #00A3CE4D',
                            border: '3px solid #85D8E7',
                            height: '34px',
                            width: '34px',
                            borderRadius: '21px',
                            backgroundColor: '#FFFFFF',
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            marginTop: '-15px',
                            marginLeft: '10px',
                        }}
                    />
                    <styled.Fieldset style={{ flexDirection: 'row' }}>
                        <styled.Text>1 Dog</styled.Text>
                        <styled.Text>200 Dogs</styled.Text>
                    </styled.Fieldset>
                </styled.OcupancyContainer>
                <styled.InputWrapper>
                    <styled.Label>Description</styled.Label>
                    <styled.Input
                        placeholder='Type description'
                        value={description}
                        onChange={(e) => {
                            if (loading) return
                            setDescription(e.target.value)
                        }}
                    />
                </styled.InputWrapper>
                <styled.Dropzone
                    {...getRootProps({ className: 'dropzone' })}
                    isDragActive={isDragActive}
                >
                    <input {...getInputProps()} />
                    {acceptedFiles.length === 0 ? (
                        <>
                            <MdOutlinePhotoSizeSelectActual color={COLOR.primary0} size={34} />
                            <p style={{ fontSize: 15, color: COLOR.primary0, fontFamily: 'MuseoSansRouned700' }}>Drag and Drop Images</p>
                        </>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {acceptedFiles.map((file, i) => (
                                <img src={URL.createObjectURL(file)} key={i} style={{ width: 78, height: 78, margin: 5, objectFit: 'cover', borderRadius: 8 }} alt={"preview-img" + i} />
                            ))}
                        </div>
                    )}
                </styled.Dropzone>
                <styled.LoginButton onClick={postListing}>POST LISTING</styled.LoginButton>
            </styled.Form>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setTempService('');
                    setShowInput(false);
                    setIsOpen(false);
                }}
                style={customStyles}
            >
                <styled.CustomModal>
                    <styled.ModalHeader>
                        <styled.ModalTitle>Create Custom Service</styled.ModalTitle>
                        <styled.AddIcon onClick={() => { setShowInput(true) }}>
                            <AiOutlinePlus size={28} color={COLOR.primary0} />
                        </styled.AddIcon>
                    </styled.ModalHeader>
                    <styled.ModalBody>
                        {careServices.map((service: any, index) => {
                            return (
                                <styled.ServiceRow key={index}>{service.name} </styled.ServiceRow>
                            )
                        })}
                    </styled.ModalBody>
                    {showInput && (
                        <styled.ModalFooter>
                            <styled.ServiceInput
                                placeholder='Add New Service'
                                value={tempService}
                                onChange={(e) => { setTempService(e.target.value); }}
                            />
                            <styled.ServicePutIcon onClick={onPutService}>
                                <FaChevronRight color={COLOR.primary0} size={28} />
                            </styled.ServicePutIcon>
                        </styled.ModalFooter>
                    )}
                </styled.CustomModal>
            </Modal>
        </styled.Container>
    )
}