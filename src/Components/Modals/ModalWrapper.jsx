// eslint-disable-next-line react/prop-types
const ModalWrapper = ({ children, isOpen }) => {
    return (
        <div className={`${isOpen ? "block" : "hidden"} fixed w-screen h-screen transition bg-[#272727]/50 z-10 backdrop-blur-sm`}>
            {children}
        </div>
    )
}

export default ModalWrapper