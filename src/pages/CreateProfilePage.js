import { useState } from "react";
import Input from "../components/common/Input";

const CreateProfilePage = () => {
    const [servicesSelected, setServicesSelected] = useState({
        grooming: false,
        dayCare: false,
        overNight: false,
        pickDrop: false
    })

    const services = [
        {
            id: 0,
            name: "Grooming",
            service: 'grooming',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}><path fillRule="evenodd" fill="currentColor" d="M24.513 24.658c-.327.252-.706.582-1.097.457h-.486c-.351-.15-.738-.248-1.047-.459-.651-.445-.89-1.123-.891-1.894v-6.46h-4.353V14.84h4.335v-1.472h-4.342v-1.456h4.342v-1.466h-4.333V8.985h4.332v-1.47h-4.34V6.56h4.347V4.596h-4.345V3.139h4.342V1.625h-4.359V.159h6.798c.391.091.77.205 1.097.457.388.301.622.703.796 1.149v21.744c-.174.447-.408.848-.796 1.149zm-.606-22.332c-.02-.386-.286-.674-.672-.701-.248-.017-.499-.003-.785-.003v.246c0 6.971 0 13.942.002 20.913 0 .12.012.469.045.359a.73.73 0 0 0 .691.514c.319-.001.626-.228.697-.539.031-.132.024-.274.024-.411l.001-20.135c0-.081.001-.162-.003-.243zM13.471 17.592c.073.103.22.19.345.213 1.47.895 2.695 1.45 2.944 2.866.64 1.593-.376 3.081-1.39 3.861-1.517.684-2.737.717-3.933.062-1.255-.686-1.873-1.798-1.891-3.22-.005-.388.115-.78.204-1.164.034.42.035-.249-.056-.376-.34-.472-.414-.954-1.02-1.466-.17.243-.324.465-.479 1.182-.069-.395.475-.286-.21-.198-.393.418-.457.851-.311 1.433 1.016 1.58-.524 3.334-2.018 3.978-.374.16-.783.237-1.176.352H3.8c-.326.205-.663-.135-.975-.255A3.605 3.605 0 0 1 .48 21.419c.017-1.532.965-2.871 2.413-3.219.627-.238.324-.309.488-.313.272-.008.411-.157.551-.361.637-.937 1.282-1.868 1.935-2.794.11-.156.118-.258.004-.42-.72-1.027-1.446-2.05-2.133-3.098C2.707 9.64 2.161 7.901 2.41 6.19c-.445-1.356-.26-2.51-.045-3.665.043-.23.086.125.141-.755l6.166 8.901 6.125-8.84c.092.49.176.927.733 1.365-.308.926-.216 2.334-.264 2.801-.096 1.901-.646 3.657-1.681 5.248-.68 1.044-1.405 2.058-2.117 3.08-.097.14-.113.231-.008.379.675.96 1.334 1.93 2.011 2.888zm-.287 5.995a2.164 2.164 0 0 0 2.179-2.144c.022-1.224-.922-2.2-2.168-2.226-.295-.025-2.198.952-2.196 2.178.101 1.167.869 2.177 2.185 2.192zm-11.242-2.14c.005 1.22.986 2.227 2.174 2.202 1.251-.026 2.175-.949 2.188-2.166.013-1.305-1.022-2.214-2.188-2.209a2.177 2.177 0 0 0-2.174 2.173zm3.445-3.465 1.245.765c1.168-.543.765-1.104 1.153-.907-.298-1.185-.582-1.596-.889-2.038l-1.509 2.18zm6.108-6.251c.722-1.025 1.435-2.054 1.832-3.263.273-.833.458-1.68.432-2.573-.091.375-.184.263-.275.395a4084.82 4084.82 0 0 0-3.783 5.465c-.05.073-.123.202-.095.345.264.312.548.71.843 1.136.365-.525.702-1.017 1.046-1.505zM3.506 5.776c0 .135-.002.19 0 .444.003-.093.002.013.013.118a9.452 9.452 0 0 0 1.662 4.423c1.793 2.586 3.583 5.175 5.376 7.763.044.064.096.122.125.159l1.238-.76L3.506 5.776z" /></svg>
            )
        },
        {
            id: 1,
            name: "Daycare",
            service: 'dayCare',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31" {...props}><path fillRule="evenodd" fill="currentColor" d="M29.651 16.56c-.887-.031-1.776.005-2.663-.012-.764-.015-1.233-.601-1.074-1.303.686-.405.449-.766.862-.774a76.876 76.876 0 0 1 3.327.002c.48.011.717.386 1.097.783v.485c-.44.617-.898.842-1.549.819zm-5.399-8.342c-.395.378-1.01.331-1.398-.047-.402-.39-.463-1.013-.077-1.419.736-.775 1.497-1.527 2.693-2.266-.261-.153-.002-.205.114-.258.553.02.877.21 1.069.596.199.4.17.807-.133 1.125-.738.774-1.26 1.531-2.268 2.269zm-8.769 15.513c-4.53-.012-8.235-3.735-8.218-8.256.018-4.518 3.721-8.21 8.235-8.209 4.74 0 8.241 3.721 8.234 8.242-.007 4.822-3.234 8.236-8.251 8.223zm.022-14.348c-3.365-.003-6.12 2.746-6.123 6.11-.002 3.367 2.746 6.119 6.111 6.122 3.366.003 6.121-2.746 6.124-6.11.003-3.364-2.748-6.12-6.112-6.122zM15.272 5.9c-.421-.3-.791-1.248-.801-1.679a79.888 79.888 0 0 1-.003-3.295c.009-.495.38-.741.79-.926h.484c.613.245.84.699.816 1.351-.034.917.005 1.836-.02 2.753-.019.683-.603 1.118-1.266 1.796zM6.733 8.208a73.213 73.213 0 0 1-2.243-2.25c-.154-.162-.208-.419-.262-.534.016-.554.204-.878.589-1.073.399-.202.809-.177 1.127.125a62.513 62.513 0 0 1 2.288 2.289c.375.396.31 1.011-.077 1.396-.396.392-1.019.435-1.422.047zm-.853 7.516c-.28.421-1.231.793-1.659.802a74.982 74.982 0 0 1-3.325-.002c-.48-.011-.718-.384-.696-.783v-.485c.041-.615.498-.841 1.149-.819.886.031 1.775-.004 2.761.013.652.014 1.115.83 1.77 1.274zm.867 7.054c.405-.386 1.028-.33 1.42.07.381.39.432 1.002.055 1.397-.738.945-1.498 1.527-2.271 2.266-.161.154-.42.205-.536.258-.554-.019-.878-.211-1.069-.596-.198-.399-.172-.808.133-.703.739-1.196 1.494-1.954 2.268-2.692zm7.698 4.392c.013-.926.745-1.402 1.276-1.263.435.086.8.451.808.897.02 1.088.021 2.177 0 3.886-.01-.127-.38.12-.787.308h-.484c-.615-.243-.847-.697-.824-1.349.03-.876-.003-1.755.011-2.479zm9.805-4.394c.99.737 1.527 1.498 2.265 2.694.154-.262.205-.003.258.112-.02.555-.215.877-.6 1.069-.399.198-.807.168-.693-.136-1.205-.738-1.963-1.305-2.701-2.267-.378-.396-.329-1.008.052-1.398.392-.401 1.013-.46 1.419-.074z" /></svg>
            )
        },
        {
            id: 2,
            name: "Overnight",
            service: 'overNight',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 26" {...props}><path fillRule="evenodd" fill="currentColor" d="M20.951.193h1.432l.717.1c0 .289.64.578.006.86.046.395.694.6-.464.789-2.059 1.458-3.098 3.187-2.711 5.454.559 3.272 4.186 5.151 7.201 3.732 1.142-.538 2.768-1.395 2.514-2.516.048-.098.138-.242.215-.246.441-.023.885-.011 1.314-.011.036.267.066.49.096 1.325v.877c-.038.234-.078.683-.114.7-.361 2.313-1.428 4.241-3.174 6.283-.761.192-1.62.72-2.57 1.138l.213.231c2.097 2.286 1.08 5.904-1.897 6.744-.208.059-.42.102.261.153H5.321c-.044-.018-.087-.046-.133-.053-1.348-.293-3.761-1.763-4.297-3.82-.061-.236-.109-.476-.163-.714v-1.072c.018.763.043.213.052-.168.325-1.985 1.43-3.357 3.92-4.103-.311-.127-.159-.263-.08-.609.63-2.761 3.091-4.915 5.905-4.487.975-.46.964-.49 1.418-.08.267-1.369.447-2.058.243-2.719C13.54 4.92 15.436 1.604 19.26.5c.548-.158 1.127-.207 1.691-.307zM6.17 17.257c-.262.035-.467.067-.673.089-1.988.208-3.37 2.18-2.879 4.11.532 1.724 1.707 2.724 3.369 2.734 3.846.02 7.693.01 11.54.01 1.72 0 3.44.17 5.159-.09.905-.112 1.598-.554 2.008-1.365 1.296-.799.676-1.595-.164-2.337-.27-.735-1.235-1.036-2.105-.999.415.014-.467-.101-.538-.439-.527-2.503-2.107-3.756-4.357-3.414-.719.041-.962.067-1.2.099-.907-2.949-3.592-4.16-5.848-3.781-1.056.646-1.974.642-2.743 1.391-1.118 1.089-1.561 2.451-1.569 3.992zM19.359 2.314c-.212.075-.426.142-.635.225-3.139 1.261-5.09 4.322-4.936 7.722.009.204.111.265.732.332.933.612 2.02 1.577 2.778 2.903.099.173.206.221.397.225 2.022.042 3.666.848 4.877 2.476.292.392 1.288 1.133.771 1.26 3.1-.627 5.288-3.26 5.775-5.207-1.44 1.2-3.011 1.261-4.75 1.108-1.744-.152-3.211-.883-4.425-2.135-1.982-2.043-2.765-5.745-.584-8.909z" /></svg>
            )
        },
        {
            id: 3,
            name: "Pick/Drop",
            service: 'pickDrop',
            icon: (props) => (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 33" {...props}><path fillRule="evenodd" fill="currentColor" d="M22.515 23.266c-3.029 2.958-6.094 5.879-9.143 9.554-.03-.71-.063-.683-.108-.643-.055-.044-.115.763.726.283-3.84-2.61-7.073-6.322-10.136-9.304C1.724 21.82.498 18.54.115 15.596c.675-.278.265-.186-.115-.832v-1.566c.18-.08.48.192.53-.24C.147 11.586.477 10.27 1.6 9.4 2.822 4.659 6.31 1.973 10.65.979c.506-.109 1.024-.165 1.536-.245h2.073c.503.076 1.012.129 1.509.234 4.656.984 7.898 3.68 9.699 8.362 2.043 5.37.904 10.172-2.952 13.936zm1.721-11.415C23.729 9.59 22.328 6.75 20.53 5.2c-2.977-2.081-5.814-2.771-8.923-2.342-2.159.298-4.081 1.262-5.694 2.609-2.503 3.123-4.147 5.841-3.777 9.692.227 2.366 1.15 4.469 2.805 6.175 1.847 1.905 3.795 4.126 5.702 5.559.856.829 1.717 1.651 2.603 2.503.101-.09.179-.157.253-.228 2.461-2.371 4.925-4.741 7.383-6.638 2.912-3.29 4.078-6.699 3.354-10.679zm-3.991 3.29c.04.581.103 1.12.109 1.66.027 2.672-1.389 4.528-3.973 5.459a26.424 26.424 0 0 1-4.454.107c-.998-.059-1.975-.218-2.697-.595-2.301-.85-3.358-2.431-3.438-4.662-.022-.621.056-1.245.089-1.893-.127-.031-.277-.063-.426-.103-1.603-.437-2.185-1.991-1.849-3.614.575-1.612 1.59-2.937 2.976-3.941.963-.698 2.029-.914 3.159-.34.069.036.2.003.459-.04a17 17 0 0 1 6.48-.038c-.534.041-.404.075-.339.039.99-.547 1.989-.464 2.89.119 1.737 1.125 2.946 2.686 3.437 4.831.326 1.229-.67 2.62-2.091 3.57-.111.25-.222-.582-.332-.559zm-7.041 1.778c.255-.181.483-.415.673-.665.223.546.007-.318-.195-.352-.185-.032-.374-.039-.471-.048.569 0 .129-.009-.216.001-.251.064-.671.075-.717.795-.116-.242.214-.011.476.173.121.084.364.158.45.096zM8.723 8.222c-.261.038-.526.061-.783.12a1.267 1.267 0 0 0-.423.197c-1.266.89-2.19 2.055-2.675 4.071-.296.347.518 1.063 1.122 1.254.253.052.354-.018.451-.264.707-1.793 1.112-3.72 2.346-5.282l-.038-.096zm7.08.409c-1.158-1.023-2.557-1.096-3.993-.77-1.273.289-2.114 1.259-2.62 2.288-.574 1.292-1.034 2.635-1.541 3.957a8.24 8.24 0 0 0-.526 2.434c-.126 1.945.722 3.346 2.474 4.024.262.101.533.194.809.241 1.164.113 1.308.295 1.995.295 0-.946-.007-1.801.006-2.656.003-.209-.072-.314-.248-.124-.517-.577-.902-.999-.909-1.544-.612-.907.42-1.865.747-2.128a3.914 3.914 0 0 1 2.17.004c.816.235 1.248 1.02 1.042 1.841.101.712-.649 1.197-1.256 2.167-.079-.545-.194-.46-.195-.39-.013.916-.008 1.832-.008 3.22.99-.22 1.909-.589 2.788-.92 1.298.25 2.151-1.375 2.406-2.767.976-.812.916-1.633-.076-2.423-.498-1.808-1.108-3.585-1.933-5.272-.268-.548-.673-.748-1.132-1.477zm5.466 3.275c-.49-1.379-1.366-2.495-2.544-3.365-.395-.292-.853-.432-1.343-.342.35.629.751 1.218 1.022 2.411.483.6.893 1.78 1.318 2.953.08.222.179.287.409.241.991-.199 1.476-.946 1.138-1.898zm-6.415 1.416c-.345-.001-.637.188-.659-.623-.011-.187-.002-.375-.002-.562 0-.177-.009-.355.002-.531a.649.649 0 0 1 .662-.615c.357 0 .643.257.657.618.014.364.015.729 0 1.093-.015.858-.312.62-.66.62zm-3.572 0c-.358.004-.651.148-.668-.645-.008-.177-.002-.354-.001-.531 0-.177-.008-.355.002-.531a.644.644 0 0 1 .652-.624c.356-.003.65.252.666.609.016.364.015.729.001 1.093-.013.787-.305.624-.652.629z" /></svg>
            )
        },
    ]

    const handleServiceSelect = (serviceInfo) => {
        setServicesSelected({ ...servicesSelected, [serviceInfo.service]: !servicesSelected[serviceInfo.service] })
    }
    return (
        <main>
            <section className="grid justify-center my-12 md:grid-cols-2 md:max-w-3xl mx-auto">
                <Input labelText="First Name" placeholderText="John" type="name" />
                <Input labelText="Last Name" placeholderText="Doe" type="name" />
                <Input labelText="Business Name" placeholderText="John Corporations" type="name" />
                <Input labelText="Email" placeholderText="johndoe@xyz.com" type="email" />
                <Input labelText="Phone Number" placeholderText="123-45-6789" type="phone" />
                <Input labelText="Address" placeholderText="xyz sesame street" type="name" />
            </section>
            <section className="flex flex-col justify-center items-center">
                <h4>Which Services does your business offer</h4>
                <div className="my-8 md:flex md:flex-row">
                    {services.map(service => (
                        <button key={service.name} className={`w-40 h-[68px] rounded-xl ${servicesSelected[service.service] ? 'bg-[#95e8f7]' : 'bg-[#f1f7ff]'}  flex justify-center items-center gap-x-3 m-1`} onClick={() => handleServiceSelect(service)}>
                            <service.icon className={`${servicesSelected[service.service] ? 'text-[#077997]' : 'text-[#9697a3]'} h-8 w-8`} />
                            <span className={`${servicesSelected[service.service] ? 'text-[#077997]' : 'text-[#9697a3]'} `}>
                                {service.name}
                            </span>
                        </button>
                    ))}
                </div>
                <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#077997] hover:bg-[#077997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#077997] mb-8"
                >
                    Continue
                </button>
            </section>
        </main>
    )
}

export default CreateProfilePage;